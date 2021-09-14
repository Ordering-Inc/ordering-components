import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStripe } from '@stripe/react-stripe-js'
import { useOrder } from '../../contexts/OrderContext'
import { useApi } from '../../contexts/ApiContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useSession } from '../../contexts/SessionContext'

/**
 * Component to manage Checkout page behavior without UI component
 */
export const Checkout = (props) => {
  const {
    isEnabledStripe,
    businessId,
    cartState,
    propsToFetch,
    actionsBeforePlace,
    handleCustomClick,
    onPlaceOrderClick,
    UIComponent
  } = props

  const payMethodsWithStripe = ['stripe', 'stripe_connect', 'stripe_direct', 'google_pay', 'microsoft_pay', 'apple_pay']

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, t] = useLanguage()
  const stripe = isEnabledStripe ? useStripe() : null;

  const [placing, setPlacing] = useState(false)
  const [errors, setErrors] = useState(null)
  const [paymentRequest, setPaymentRequest] = useState(null);

  /**
   * Order context
   */
  const [orderState, { placeCart }] = useOrder()
  /**
   * Object to save an object with business information
   */
  const [businessDetails, setBusinessDetails] = useState({ business: null, loading: true, error: null })
  /**
   * This must be contains an object with info about paymente selected
   */
  const [paymethodSelected, setPaymethodSelected] = useState(null)
  /**
   * Current cart
   */
  const cart = orderState.carts?.[`businessId:${businessId}`]
  /**
   * Method to get business from API
   */
  const getBusiness = async () => {
    try {
      const { content: { result, error } } = await ordering.businesses(businessId).select(propsToFetch).get()
      if (!error && cartState.cart?.paymethod_id) {
        const paymethodSelected = result?.paymethods?.find(paymethod => paymethod?.paymethod_id === cartState.cart?.paymethod_id)
        handlePaymethodChange({
          paymethodId: paymethodSelected?.paymethod?.id,
          gateway: paymethodSelected?.paymethod?.gateway,
          paymethod: {
            ...paymethodSelected?.paymethod,
            credentials: {
              ...paymethodSelected?.data
            }
          },
          data: cart?.paymethod_data,
          id: paymethodSelected?.paymethod?.id
        })
      }
      setBusinessDetails({
        ...businessDetails,
        loading: false,
        business: result,
        error
      })
    } catch (error) {
      setBusinessDetails({
        ...businessDetails,
        loading: false,
        error
      })
    }
  }

  /**
   * Method to handle click on Place order
   */
  const handlerClickPlaceOrder = async (sourceId) => {
    let paymethodData = paymethodSelected?.data

    if (payMethodsWithStripe.includes(paymethodSelected.paymethod.gateway)) {
      paymethodData = {
        source_id: paymethodSelected?.data?.id || sourceId
      }
    }

    let payload = {
      paymethod_id: paymethodSelected.paymethodId,
      paymethod_data: paymethodSelected?.data,
      offer_id: cart.offer_id,
      amount: cart.total
    }

    if (orderState.options.type === 1) {
      payload = {
        ...payload,
        delivery_zone_id: cart.delivery_zone_id
      }
    }

    if (handleCustomClick) {
      handleCustomClick(payload, paymethodSelected, cart)
      return
    }

    payload = {
      ...payload,
      paymethod_data: paymethodData
    }

    setPlacing(true)
    const result = await placeCart(cart.uuid, payload)

    if (result?.error) {
      setErrors(result?.result)
      return
    }

    const cartResult = result?.result

    if (cartResult?.paymethod_data?.status === 2 && actionsBeforePlace) {
      await actionsBeforePlace(paymethodSelected, result.result)
    }
    setPlacing(false)
    onPlaceOrderClick && onPlaceOrderClick(payload, paymethodSelected, cartResult)
  }

  const handlePaymethodChange = (paymethod) => {
    setPaymethodSelected(paymethod)
  }

  const handlePay = async (e) => {
    try {
      const response = await fetch(`${ordering.root}/carts/change_paymethod`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          business_id: cart.business_id,
          paymethod_data: JSON.stringify({
            id: e.paymentMethod.id,
            type: e.paymentMethod.type,
            source_id: e.paymentMethod.id,
            card: {
              brand: e.paymentMethod.card.brand,
              last4: e.paymentMethod.card.last4
            }
          }),
          paymethod_id: paymethodSelected.paymethodId
        })
      });
      const { error } = await response.json()

      if (!error) {
        e.complete('success')
        handlerClickPlaceOrder(e.paymentMethod.id)
      } else {
        e.complete('fail');
      }
    } catch(err) {
      e.complete('fail')
    }
  }

  useEffect(() => {
    getBusiness()
  }, [businessId])

  /**
   * Update carts from sockets
   */
  useEffect(() => {
    if (cart && cart.status === 1) {
      const data = {
        paymethod_id: paymethodSelected.paymethodId,
        paymethod_data: paymethodSelected?.data,
        delivery_zone_id: cart.delivery_zone_id,
        offer_id: cart.offer_id,
        amount: cart.total
      }
      onPlaceOrderClick && onPlaceOrderClick(data, paymethodSelected, cart)
    }
  }, [cart])

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: t('CART_TOTAL', 'Total'),
          amount: cart.total * 100,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      // Check the availability of the Payment Request API.
      pr.canMakePayment().then(result => {
        if (result) {
          setPaymentRequest(pr);
          pr.on('paymentmethod', handlePay);
        }
      });
    }
  }, [stripe, paymethodSelected]);

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          cart={cart}
          paymentRequest={paymentRequest}
          placing={placing}
          errors={errors}
          orderOptions={orderState.options}
          paymethodSelected={paymethodSelected}
          businessDetails={businessDetails}
          handlePaymethodChange={handlePaymethodChange}
          handlerClickPlaceOrder={handlerClickPlaceOrder}
        />
      )}
    </>
  )
}

Checkout.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Custom method to receive props from checkout page
   */
  handleCustomClick: PropTypes.func,
  /**
   * onPlaceOrderClick, function to get click event and return business object after default behavior
   */
  onPlaceOrderClick: PropTypes.func,
  // /**
  //  * handler values from other components
  //  */
  // handlerValues: PropTypes.func,
  /**
   * Components types before Checkout
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Checkout
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

Checkout.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'name', 'email', 'cellphone', 'address', 'paymethods', 'logo', 'location']
}
