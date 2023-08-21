import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'
import { useApi } from '../../contexts/ApiContext'
import { useEvent } from '../../contexts/EventContext'
import { useSession } from '../../contexts/SessionContext'

const paymethodsExisting = ['stripe', 'stripe_direct', 'stripe_connect', 'paypal', 'square']
const paymethodsNotAllowed = ['paypal_express', 'authorize']
const paymethodsCallcenterMode = ['cash', 'card_delivery', 'ivrpay', '100_coupon']

/**
 * Component to manage payment options behavior without UI component
 */
export const PaymentOptions = (props) => {
  const {
    isLoading,
    paymethods,
    businessId,
    isCustomerMode,
    onPaymentChange,
    paymethodsCustom,
    UIComponent,
    isKiosk
  } = props

  const fetchPaymethods = isKiosk
  const [events] = useEvent()
  const [ordering] = useApi()
  const [orderState, { changePaymethod }] = useOrder()
  const [{device_code}] = useSession()
  const orderTotal = orderState.carts?.[`businessId:${businessId}`]?.total || 0

  const [paymethodsList, setPaymethodsList] = useState({ paymethods: [], loading: true, error: null })
  const [paymethodSelected, setPaymethodsSelected] = useState(null)
  const [paymethodData, setPaymethodData] = useState({})
  const [isOpenMethod, setIsOpenMethod] = useState({ paymethod: null })

  const parsePaymethods = (paymethods) => {
    const _paymethods = paymethods && paymethods
      .filter(credentials => isCustomerMode
        ? !paymethodsNotAllowed.includes(credentials?.paymethod?.gateway) &&
          paymethodsCallcenterMode.includes(credentials?.paymethod?.gateway)
        : !paymethodsNotAllowed.includes(credentials?.paymethod?.gateway))
      .map(credentials => {
        return {
          ...credentials?.paymethod,
          sandbox: credentials?.sandbox,
          credentials: credentials?.data
        }
      })
    return _paymethods
  }

  /**
   * Method to get payment options from API
   */
  const getPaymentOptions = async () => {
    setPaymethodsList({ ...paymethodsList, loading: true })

    const headers = {
      'X-Physical-Device-Code-X': `${device_code}`
    }

    try {
      const { content: { error, result } } = await ordering.businesses(businessId).get(device_code ? {headers} : {})
      if (!error) {
        paymethodsList.paymethods = parsePaymethods(result.paymethods)
      }
      setPaymethodsList({
        ...paymethodsList,
        loading: false,
        error: error ? result : null,
        paymethods: error ? [] : parsePaymethods(result.paymethods)
      })
    } catch (error) {
      setPaymethodsList({
        ...paymethodsList,
        loading: false,
        error: [error.message]
      })
    }
  }

  /**
   * Method to set payment option selected by user
   * @param {Object} val object with information of payment method selected
   */
  const handlePaymethodClick = (paymethod, isPopupMethod) => {
    const paymentsDirect = ['paypal', 'square']
    events.emit('add_payment_option', paymethod)
    if (isPopupMethod) {
      if (paymentsDirect.includes(paymethod?.gateway)) {
        setPaymethodsSelected(paymethod)
      } else {
        setPaymethodsSelected(null)
      }
      setIsOpenMethod({
        ...isOpenMethod,
        paymethod
      })
      handlePaymethodDataChange({})
      return
    }
    if (paymethodsCustom) {
      paymethodsCustom(paymethod)
    }
    setPaymethodsSelected(paymethod)
    setIsOpenMethod({ paymethod })
    handlePaymethodDataChange({})
  }

  const handlePaymethodDataChange = (data) => {
    setPaymethodData(data)
    if (Object.keys(data).length) {
      const paymethod = props.paySelected || isOpenMethod.paymethod
      setPaymethodsSelected(paymethod)
      onPaymentChange && onPaymentChange({
        paymethodId: paymethod?.id,
        id: paymethod?.id,
        gateway: paymethod?.gateway,
        paymethod: paymethod,
        credentials: paymethod?.credentials ?? null,
        data
      })
      return
    }
    if (paymethodSelected) {
      onPaymentChange && onPaymentChange({
        paymethodId: paymethodSelected.id,
        id: paymethodSelected.id,
        name: paymethodSelected.name,
        gateway: paymethodSelected.gateway,
        paymethod: paymethodSelected,
        data
      })
    } else {
      onPaymentChange && onPaymentChange(null)
    }
  }

  useEffect(() => {
    if (paymethodSelected) {
      changePaymethod(businessId, paymethodSelected.id, JSON.stringify(paymethodData))
    }
  }, [paymethodSelected, paymethodData])

  useEffect(() => {
    if (
      paymethodSelected &&
      (['card_delivery', 'cash', 'stripe_redirect'].includes(paymethodSelected?.gateway) ||
      !paymethodsExisting.includes(paymethodSelected?.gateway))
    ) {
      onPaymentChange && onPaymentChange({
        paymethodId: paymethodSelected.id,
        id: paymethodSelected.id,
        name: paymethodSelected.name,
        gateway: paymethodSelected.gateway,
        paymethod: paymethodSelected,
        data: paymethodData
      })
    } else if (paymethodSelected === null && onPaymentChange) {
      onPaymentChange(null)
    }
  }, [paymethodSelected])

  useEffect(() => {
    if(fetchPaymethods){
      getPaymentOptions()
      return
    }
    if (paymethods) {
      setPaymethodsList({
        ...paymethodsList,
        loading: isLoading,
        paymethods: parsePaymethods(paymethods)
      })
    } else {
      if (businessId) {
        if (businessId === -1) {
          setPaymethodsList({
            ...paymethodsList,
            loading: false,
            paymethods: [{
              gateway: 'stripe',
              name: 'Stripe',
              id: 1
            }]
          })
        } else {
          getPaymentOptions()
        }
      }
    }
  }, [isLoading, businessId])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          orderTotal={orderTotal}
          isOpenMethod={isOpenMethod}
          paymethodsList={paymethodsList}
          paymethodSelected={paymethodSelected}
          paymethodData={paymethodData}
          setPaymethodData={setPaymethodData}
          handlePaymethodClick={handlePaymethodClick}
          handlePaymethodDataChange={handlePaymethodDataChange}
        />
      )}
    </>
  )
}

PaymentOptions.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Options, this must be containt an array of payment options
   */
  paymethods: PropTypes.array,
  /**
   * businessId, this must be contains business id to fetch business from API
   */
  businessId: PropTypes.number,
  /**
   * Get option selected
   */
  onPaymentChange: PropTypes.func,
  /**
   * Components types before Payment Options
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Payment Options
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Payment Options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Payment Options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

PaymentOptions.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
