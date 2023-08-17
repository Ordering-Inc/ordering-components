import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'
import { useConfig } from '../../contexts/ConfigContext'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'
/**
 * Component to manage Checkout page behavior without UI component
 */
export const Checkout = (props) => {
  const {
    cartState,
    propsToFetch,
    actionsBeforePlace,
    isPfchangs,
    handleCustomClick,
    onPlaceOrderClick,
    UIComponent
  } = props

  const [ordering] = useApi()
  const [configs, { refreshConfigs }] = useConfig()

  const [placing, setPlacing] = useState(false)
  const [errors, setErrors] = useState(null)

  const isAlsea = ordering.project === 'alsea'

  /**
   * Language context
   */
  const [, t] = useLanguage()
  /**
   * Order context
   */
  const [orderState, { placeCart, refreshOrderOptions }] = useOrder()
  /**
   * Session content
   */
  const [{ token }] = useSession()
  /**
   * Toast state
   */
  const [, { showToast }] = useToast()
  /**
   * Delivery Instructions options
   */
  const [instructionsOptions, setInstructionsOptions] = useState({ loading: false, result: [{ id: null, enabled: true, name: t('EITHER_WAY', 'Either way') }], error: null })
  /**
   * Delivery instructions selected
   */
  const [deliveryOptionSelected, setDeliveryOptionSelected] = useState(undefined)
  /**
   * Comment state
   */
  const [commentState, setCommentState] = useState({ loading: false, result: null, error: null })
  /**
   * Object to save an object with business information
   */
  const [businessDetails, setBusinessDetails] = useState({ business: null, loading: true, error: null })
  /**
   * This must be contains an object with info about paymente selected
   */
  const [paymethodSelected, setPaymethodSelected] = useState(null)

  const businessId = props.uuid
    ? Object.values(orderState.carts).find(_cart => _cart?.uuid === props.uuid)?.business_id ?? {}
    : props.businessId

  const [defaultOptionsVaXMiCuenta, setDefaultOptionsVaXMiCuenta] = useState(null)

  /**
   * This must be contains an object with info about va x mi cuenta
   */
  const [vaXMiCuenta, setVaXMiCuenta] = useState({ loading: true })

  const [uberDirect, setUberDirect] = useState({ isUberDirect: false, amountToHide: null })

  const [wowAcumulationPoints, setWowAcumulationPoints] = useState({result: null, loading: true, error: false})

  const [hasCateringProducts, setHasCateringProducts] = useState({ result: false, loading: true, error: false })
  /**
   * Current cart
   */
  const cart = orderState.carts?.[`businessId:${businessId}`]
  /**
   * Timeout for update cart comment
   */
  let timeout = null
  /**
   * Cart comment stagged
   */
  let previousComment

  /**
   * Method to get va por mi cuenta from Plugin
   */
  const getVaXMiCuenta = async () => {
    if (!defaultOptionsVaXMiCuenta?.enable) {
      setVaXMiCuenta({
        selectedOption: { amount: 0, option: 0 },
        loading: false,
        error: null
      })
      return
    }
    try {
      setVaXMiCuenta({
        ...vaXMiCuenta,
        loading: true,
        error: null
      })
      const response = await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform/va_por_mi_cuenta.php`, {
        method: 'POST',
        body: JSON.stringify({
          uuid: cart.uuid
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          'X-APP-X': ordering.appId
        }
      })
      const result = await response.json()
      let option
      if (result.result) {
        option = result.result
      } else {
        option = result
      }
      if (!result.error) {
        setVaXMiCuenta({
          ...vaXMiCuenta,
          selectedOption: { ...option, default: true },
          loading: false,
          error: null
        })
      } else {
        setVaXMiCuenta({
          ...vaXMiCuenta,
          loading: false,
          error: [result?.result]
        })
      }
    } catch (err) {
      setVaXMiCuenta({
        ...vaXMiCuenta,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to get business from API
   */
  const getBusiness = async () => {
    refreshConfigs()
    try {
      const parameters = {
        type: orderState.options?.type
      }

      const { content: { result, error } } = await ordering.businesses(businessId).select(propsToFetch).parameters(parameters).get()
      if (!error && cartState.cart?.paymethod_id) {
        const paymethodSelected = result?.paymethods?.find(paymethod => paymethod?.paymethod_id === cartState.cart?.paymethod_id)
        if (paymethodSelected?.paymethod?.id) {
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
  const handlerClickPlaceOrder = async (paymentOptions, payloadProps, confirmPayment) => {
    let paymethodData = paymethodSelected?.data
    if (paymethodSelected?.paymethod && ['stripe', 'stripe_connect', 'stripe_direct'].includes(paymethodSelected?.paymethod?.gateway)) {
      paymethodData = {
        source_id: paymethodSelected?.data?.id
      }
    }
    let payload = {
      offer_id: cart.offer_id,
      amount: cart?.balance ?? cart?.total
    }

    if (paymethodSelected?.paymethod) {
      payload = {
        ...payload,
        paymethod_id: paymethodSelected?.paymethodId,
        paymethod_data: paymethodSelected?.data
      }
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
    if (paymentOptions?.data && paymentOptions?.data?.externalcardid) {
      payload = {
        ...payload,
        ...payloadProps,
        paymethod_data: {
          ...paymethodData,
          ...paymentOptions,
          data: {
            ...paymethodData.data,
            ...paymentOptions.data
          }
        }
      }
    } else {
      payload = {
        ...payload,
        ...payloadProps,
        paymethod_data: {
          ...paymethodData,
          ...paymentOptions
        }
      }
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
    if (confirmPayment && result?.result?.paymethod_data?.gateway === 'apple_pay') {
      const { error: confirmApplePayError } = await confirmPayment(result?.result?.paymethod_data?.result?.client_secret)
      if (confirmApplePayError) {
        setErrors(confirmApplePayError)
      }
    }
    setPlacing(false)
    onPlaceOrderClick && onPlaceOrderClick(payload, paymethodSelected, cartResult)
  }

  const handlePaymethodChange = (paymethod) => {
    setPaymethodSelected(paymethod)
  }

  /**
   * change comment for cart
   */
  const handleChangeComment = (value) => {
    try {
      if (previousComment !== value) {
        clearTimeout(timeout)
        timeout = setTimeout(async function () {
          setCommentState({ ...commentState, loading: true })
          const uuid = cart?.uuid
          const response = await fetch(`${ordering.root}/carts/${uuid}`, {
            'Content-Type': 'application/json',
            method: 'PUT',
            body: JSON.stringify({
              comment: value
            }),
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
              'X-App-X': ordering.appId
            }
          })
          const { result, error } = await response.json()
          if (error) {
            setCommentState({ ...commentState, loading: false, error: true, result })
            showToast(ToastType.Error, result)
            return
          }
          setCommentState({ ...commentState, loading: false, error: null, result })
        }, 750)
      }
      previousComment = value
    } catch (err) {
      setCommentState({ ...commentState, loading: false, error: true, result: err.message })
      showToast(ToastType.Error, err.message)
    }
  }

  const getDeliveryOptions = async () => {
    try {
      const response = await fetch(`${ordering.root}/delivery_options`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${token}`,
          'X-App-X': ordering.appId
        }
      })
      const { result, error } = await response.json()
      if (!error) {
        setInstructionsOptions({ loading: false, result: [...instructionsOptions.result, ...result] })
        return
      }
      setInstructionsOptions({ loading: false, error: true, result })
      showToast(ToastType.Error, result)
    } catch (err) {
      setInstructionsOptions({ loading: false, error: true, result: err.message })
      showToast(ToastType.Error, err.message)
    }
  }

  const handleChangeDeliveryOption = async (value) => {
    try {
      const response = await fetch(`${ordering.root}/carts/${cart?.uuid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${token}`,
          'X-App-X': ordering.appId
        },
        body: JSON.stringify({
          delivery_option_id: value
        })
      })
      const { result, error } = await response.json()
      setDeliveryOptionSelected(result?.delivery_option_id)
      if (error) {
        showToast(ToastType.Error, result)
      }
    } catch (err) {
      showToast(ToastType.Error, err.message)
    }
  }

  const handleChangeVaXMiCuenta = (option, index) => {
    setVaXMiCuenta({
      ...vaXMiCuenta,
      selectedOption: { amount: option, option: index, default: false }
    })
  }

  const checkUberDirect = async () => {
    try {
      const response = await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform/is_cash_external_driver_group.php`, {
        method: 'POST',
        body: JSON.stringify({
          uuid: cart.uuid
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          'X-APP-X': ordering.appId
        }
      })
      const result = await response.json()
      if (!result.error) {
        setUberDirect({
          ...uberDirect,
          isUberDirect: !result
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  const checkAmountToHideCash = async () => {
    try {
      const response = await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform/max_cash_delivery.php`, {
        method: 'POST',
        body: JSON.stringify({
          uuid: cart.uuid
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          'X-APP-X': ordering.appId
        }
      })
      const result = await response.json()
      if (!result.error) {
        setUberDirect({
          ...uberDirect,
          amountToHide: result
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  const cartCateringEvaluate = async () => {
    try {
      setHasCateringProducts({
        ...hasCateringProducts,
        loading: true
      })
      const response = await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform/is_catering.php`, {
        method: 'POST',
        body: JSON.stringify({
          uuid: cart.uuid,
          brand_id: businessDetails?.business?.brand_id
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          'X-APP-X': ordering.appId
        }
      })
      const result = await response.json()
      if (!result.error) {
        setHasCateringProducts({
          ...hasCateringProducts,
          loading: false,
          result
        })
        return
      }
      setHasCateringProducts({
        ...hasCateringProducts,
        loading: false,
        error: true
      })
    } catch (err) {
      setHasCateringProducts({
        ...hasCateringProducts,
        loading: false,
        error: true
      })
    }
  }

  const getWowPointsAcumulation = async (total) => {
    try {
      setWowAcumulationPoints({
        ...wowAcumulationPoints,
        loading: true
      })
      const response = await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform/points_convert.php`, {
        method: 'POST',
        body: JSON.stringify({
          type: 3,
          amount: total ?? cart?.subtotal
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          'X-APP-X': ordering.appId
        }
      })
      const result = await response.json()
      if (!result.error) {
        setWowAcumulationPoints({
          ...wowAcumulationPoints,
          loading: false,
          result
        })
        return
      }
      setWowAcumulationPoints({
        ...wowAcumulationPoints,
        loading: false,
        error: true
      })
    } catch (err) {
      setWowAcumulationPoints({
        ...wowAcumulationPoints,
        loading: false,
        error: true
      })
    }
  }
  useEffect(() => {
    if (businessId && typeof businessId === 'number') {
      getBusiness()
    }
  }, [businessId])

  useEffect(() => {
    if (defaultOptionsVaXMiCuenta === null) return
    getVaXMiCuenta()
  }, [defaultOptionsVaXMiCuenta])

  useEffect(() => {
    if (configs.loading || businessDetails.loading) return
    setDefaultOptionsVaXMiCuenta(JSON.parse(configs.configs?.va_por_mi_cuenta?.value).find((value) => value.brand_id === parseInt(businessDetails?.business?.brand_id)))
  }, [configs.loading, businessDetails.loading])

  useEffect(() => {
    if (!vaXMiCuenta.selectedOption || vaXMiCuenta.selectedOption.default) return
    const applyDonation = async () => {
      try {
        const response = await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform/va_por_mi_cuenta_metafield.php`, {
          method: 'POST',
          body: JSON.stringify({
            uuid: cart.uuid,
            option: vaXMiCuenta.selectedOption.option
          }),
          headers: {
            Authorization: `Bearer ${token}`,
            'X-APP-X': ordering.appId
          }
        })
        const result = await response.json()
        if (!result.error) {
          refreshOrderOptions()
        }
      } catch (err) {
        setVaXMiCuenta({
          ...vaXMiCuenta,
          loading: false,
          error: [err.message]
        })
      }
    }
    applyDonation()
  }, [vaXMiCuenta.selectedOption])

  useEffect(() => {
    if (uberDirect.isUberDirect) {
      checkAmountToHideCash()
    }
  }, [uberDirect.isUberDirect])

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
        amount: cart?.balance ?? cart?.total
      }
      onPlaceOrderClick && onPlaceOrderClick(data, paymethodSelected, cart)
    }
  }, [cart])

  useEffect(() => {
    if (deliveryOptionSelected === undefined) {
      setDeliveryOptionSelected(cart?.delivery_option_id)
    }
  }, [cart?.delivery_option_id])

  useEffect(() => {
    if (vaXMiCuenta.amount && vaXMiCuenta.amount > 0) {
      getWowPointsAcumulation(cart?.subtotal - vaXMiCuenta.amount)
    } else {
      getWowPointsAcumulation(cart?.subtotal)
    }
  }, [cart?.subtotal])

  useEffect(() => {
    getDeliveryOptions()
    checkUberDirect()
  }, [])

  useEffect(() => {
    if (businessDetails?.business?.brand_id) {
      cartCateringEvaluate()
    }
  }, [businessDetails])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          cart={cart}
          placing={placing}
          errors={errors}
          orderOptions={orderState.options}
          paymethodSelected={paymethodSelected}
          businessDetails={businessDetails}
          commentState={commentState}
          instructionsOptions={instructionsOptions}
          deliveryOptionSelected={deliveryOptionSelected}
          defaultOptionsVaXMiCuenta={defaultOptionsVaXMiCuenta}
          vaXMiCuenta={vaXMiCuenta}
          uberDirect={uberDirect}
          hasCateringProducts={hasCateringProducts}
          handlePaymethodChange={handlePaymethodChange}
          handlerClickPlaceOrder={handlerClickPlaceOrder}
          handleChangeComment={handleChangeComment}
          handleChangeDeliveryOption={handleChangeDeliveryOption}
          handleChangeVaXMiCuenta={handleChangeVaXMiCuenta}
          wowAcumulationPoints={wowAcumulationPoints}
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
  propsToFetch: ['id', 'name', 'email', 'cellphone', 'address', 'paymethods', 'logo', 'location', 'configs']
}
