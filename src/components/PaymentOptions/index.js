import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'
import { useApi } from '../../contexts/ApiContext'
import { useEvent } from '../../contexts/EventContext'
import { useSession } from '../../contexts/SessionContext'
import { useConfig } from '../../contexts/ConfigContext'
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
    UIComponent
  } = props

  const [events] = useEvent()
  const [ordering] = useApi()
  const [{ configs }] = useConfig()
  const [orderState, { changePaymethod }] = useOrder()
  const [{ user, token }] = useSession()
  const orderTotal = orderState.carts?.[`businessId:${businessId}`]?.total || 0
  const isAlsea = ordering.project === 'alsea'

  const [paymethodsList, setPaymethodsList] = useState({ paymethods: [], loading: true, error: null })
  const [paymethodSelected, setPaymethodsSelected] = useState(null)
  const [paymethodData, setPaymethodData] = useState({})
  const [isOpenMethod, setIsOpenMethod] = useState({ paymethod: null })
  const [wowPoints, setWowPoints] = useState({ loading: false, points: null, error: null })

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
    try {
      const { content: { error, result } } = await ordering.businesses(businessId).get()
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
      const masterCardPaymethod = paymethod?.gateway === 'openpay' && configs?.advanced_offers_module?.value && data?.brandCardName === 'mastercard' && paymethodsList?.paymethods?.find((payment) => (payment?.gateway === 'openpay_mastercard'))

      setPaymethodsSelected(masterCardPaymethod ?? paymethod)

      onPaymentChange && onPaymentChange({
        paymethodId: masterCardPaymethod?.id ?? paymethod?.id,
        id: masterCardPaymethod?.id ?? paymethod?.id,
        gateway: masterCardPaymethod.gateway ?? paymethod?.gateway,
        paymethod: masterCardPaymethod ?? paymethod,
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

  const getWowPoints = async () => {
    try {
      setWowPoints({
        ...wowPoints,
        loading: true
      })
      const response = await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform/wow_check_profile.php`, {
        method: 'POST',
        body: JSON.stringify({
          id: user?.id,
          mail: user?.email,
          name: user?.name,
          lastname: user?.lastname,
          cellphone: user?.cellphone
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          'X-APP-X': ordering.appId,
          'Content-Type': 'application/json'
        }
      })
      const result = await response.json()
      if (result?.user?.points) {
        setWowPoints({
          error: false,
          loading: false,
          points: result?.user?.points
        })
      } else {
        setWowPoints({
          error: true,
          loading: false,
          points: '???'
        })
      }
    } catch (err) {
      setWowPoints({
        error: true,
        loading: false,
        points: '???'
      })
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
    if (paymethods) {
      setPaymethodsList({
        ...paymethodsList,
        loading: isLoading,
        paymethods: parsePaymethods(paymethods)
      })
      if (paymethods.find(paymethod => paymethod?.paymethod?.gateway === 'wow_rewards')) {
        getWowPoints()
      }
    } else {
      if (businessId) {
        getPaymentOptions()
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
          wowPoints={wowPoints}
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
