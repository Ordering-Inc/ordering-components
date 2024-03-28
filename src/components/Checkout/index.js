import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'
import { useConfig } from '../../contexts/ConfigContext'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

/**
 * Component to manage Checkout page behavior without UI component
 */
export const Checkout = (props) => {
  const {
    cartState,
    propsToFetch,
    actionsBeforePlace,
    handleCustomClick,
    onPlaceOrderClick,
    UIComponent,
    isApp,
    isKiosk,
    isCustomerMode
  } = props

  const [ordering] = useApi()
  const socket = useWebsocket()
  const [{ options }, { refreshOrderOptions }] = useOrder()
  const [{ configs }, { refreshConfigs }] = useConfig()

  const [placing, setPlacing] = useState(false)
  const [errors, setErrors] = useState(null)
  const [alseaCheckPriceError, setAlseaCheckpriceError] = useState(null)
  /**
   * Language context
   */
  const [, t] = useLanguage()
  /**
   * Order context
   */
  const [orderState, { placeCart }] = useOrder()
  /**
   * Session content
   */
  const [{ token, user }] = useSession()
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
  /**
   * Loyalty plans state
   */
  const [loyaltyPlansState, setLoyaltyPlansState] = useState({ loading: true, error: null, result: [] })

  const [checkoutFieldsState, setCheckoutFieldsState] = useState({ fields: [], loading: false, error: null })

  const [isLoadingCheckprice, setIsLoadingCheckprice] = useState(false)

  const businessId = props.uuid
    ? Object.values(orderState.carts).find(_cart => _cart?.uuid === props.uuid)?.business_id ?? {}
    : props.businessId
  /**
   * Current cart
   */
  const cart = businessId && typeof businessId === 'number' ? orderState.carts?.[`businessId:${businessId}`] : orderState.carts?.['businessId:null']
  /**
   * Place spot state from chackout
   */
  const [placeSpotNumber, setPlaceSpotNumber] = useState(cartState?.cart?.spot_number ?? cart?.spot_number)
  /**
   * Timeout for update cart comment
   */
  let timeout = null
  /**
   * Cart comment stagged
   */
  let previousComment
  /**
   * order types delivery
   */
  const orderTypesDelivery = [1, 7]
  /**
   * Method to get business from API
   */

  const paymethodsWithoutSaveCard = ['credomatic']

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
  const handlerClickPlaceOrder = async (paymentOptions, payloadProps, confirmPayment, dismissPlatformPay) => {
    if (placing) {
      showToast(ToastType.Info, t('CART_IN_PROGRESS', 'Cart in progress'))
      return
    }
    let paymethodData = paymethodSelected?.data
    if (paymethodSelected?.paymethod && ['stripe', 'stripe_connect', 'stripe_direct'].includes(paymethodSelected?.paymethod?.gateway)) {
      paymethodData = {
        source_id: paymethodSelected?.data?.id
      }
    }
    let payload = {
      amount: cart?.balance ?? cart?.total
    }

    if (cart?.offer_id) payload.offer_id = cart?.offer_id

    if (paymethodSelected?.paymethod) {
      payload = {
        ...payload,
        paymethod_id: paymethodSelected?.paymethodId,
        paymethod_data: paymethodSelected?.data
      }
    }

    if (orderTypesDelivery.includes(orderState?.options?.type)) {
      payload = {
        ...payload,
        delivery_zone_id: cart?.business_id ? cart.delivery_zone_id : 0
      }
    }

    if (handleCustomClick) {
      handleCustomClick(payload, paymethodSelected, cart)
      return
    }
    if (!cart) return
    payload = {
      ...payload,
      ...payloadProps,
      paymethod_data: {
        ...paymethodData,
        ...paymentOptions
      }
    }

    setPlacing(true)
    await onChangeSpot()
    if (paymethodsWithoutSaveCard.includes(paymethodSelected?.paymethod?.gateway)) {
      delete payload.paymethod_data
    }
    const result = await placeCart(cart.uuid, payload)
    if (result?.error || !result) {
      setErrors(result?.result)
      if (dismissPlatformPay && paymethodSelected?.paymethod?.gateway === 'apple_pay') {
        await dismissPlatformPay()
      }
      refreshOrderOptions()
      setPlacing(false)
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
    if (paymethodsWithoutSaveCard.includes(cartResult?.paymethod_data?.gateway) &&
      cartResult?.paymethod_data?.result?.hash &&
      cartResult?.paymethod_data?.status === 2 &&
      !payloadProps.isNative
    ) {
      handleConfirmCredomaticPage(cartResult, paymethodSelected)
    }
    setPlacing(false)
    onPlaceOrderClick && onPlaceOrderClick(payload, paymethodSelected, cartResult)
  }

  const handlePaymethodChange = (paymethod) => {
    setPaymethodSelected(paymethod)
  }

  const onRemoveSpotNumber = (businessSlug) => {
    const spotNumberFromStorage = window.localStorage.getItem('table_number')
    if (!spotNumberFromStorage) return
    const slug = JSON.parse(spotNumberFromStorage)?.slug
    if (businessSlug === slug) {
      window.localStorage.removeItem('table_number')
    }
  }

  /**
   * change place spot from checkout
   */
  const handleChangeSpot = async ({ isCheckout = true, bodyToSend }) => {
    try {
      const id = isCheckout ? cart?.uuid : cart?.id
      const endpointToFetch = isCheckout
        ? ordering.setAccessToken(token).carts(id).set(bodyToSend)
        : ordering.setAccessToken(token).orders(id).save(bodyToSend)

      const { content: { error, result } } = await endpointToFetch

      if (!error && !isApp) {
        onRemoveSpotNumber && onRemoveSpotNumber(cart?.business?.slug)
      }

      showToast(
        error ? ToastType.Error : ToastType.Success,
        error
          ? t('ERROR', result[0])
          : t('SPOT_CHANGE_SUCCESS_CONTENT', 'Changes applied correctly')
      )
    } catch (err) {
      console.log(err)
    }
  }

  const onChangeSpot = async () => {
    if (options.type === 3 && (!cartState?.cart?.spot_number && !cart?.spot_number)) {
      const bodyToSend = {}
      placeSpotNumber && (bodyToSend.spot_number = placeSpotNumber)

      if (Object.keys(bodyToSend).length) {
        handleChangeSpot({ bodyToSend })
      }
    }
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
              'X-App-X': ordering.appId,
              'X-Socket-Id-X': socket?.getId()
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
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
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
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
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

  const getLoyaltyPlans = async () => {
    try {
      const req = await fetch(`${ordering.root}/loyalty_plans`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            'X-App-X': ordering.appId,
            'X-Socket-Id-X': socket?.getId()
          }
        }
      )
      const { error, result } = await req.json()
      setLoyaltyPlansState({
        ...loyaltyPlansState,
        loading: false,
        result: error ? [] : result
      })
    } catch (error) {
      setLoyaltyPlansState({
        ...loyaltyPlansState,
        loading: false,
        result: []
      })
    }
  }

  const handleConfirmCredomaticPage = async (cart, paymethodSelected) => {
    const isSandbox = configs?.credomatic_integration_sandbox?.value === '1'
    const keyId = isSandbox ? configs?.credomatic_integration_public_sandbox_key?.value : configs?.credomatic_integration_public_production_key?.value
    const processorId = configs?.credomatic_integration_processor_id?.value
    try {
      const cartUuid = cart?.uuid
      const data = {
        type: 'auth',
        key_id: keyId,
        hash: cart?.paymethod_data?.result?.hash,
        time: cart?.paymethod_data?.result?.time,
        amount: cart?.total,
        orderid: cartUuid,
        ccnumber: paymethodSelected?.data?.ccnumber,
        cvv: paymethodSelected?.data?.cvv,
        ccexp: paymethodSelected?.data?.ccexp,
        redirect: window.location.href.replace(window.location.search, '')
      }
      if (processorId) {
        data.processor_id = processorId
      }
      const form = document.createElement('form')
      form.method = 'POST'
      form.action = 'https://credomatic.compassmerchantsolutions.com/api/transact.php'
      form.style.display = 'none'
      // eslint-disable-next-line no-unused-expressions
      Object.keys(data)?.map(key => {
        const formInputName = document.createElement('input')
        formInputName.name = key
        formInputName.value = data[key]
        form.appendChild(formInputName)
      })
      document.body.appendChild(form)
      form.submit()
    } catch (err) {
      showToast(ToastType.Error, err.message)
    }
  }

  const getValidationFieldOrderTypes = async () => {
    try {
      setCheckoutFieldsState({ ...checkoutFieldsState, loading: true })

      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/validation_field_order_types`, requestOptions)
      const content = await response.json()
      if (!content?.error) {
        setCheckoutFieldsState({ fields: content?.result, loading: false })
      } else {
        setCheckoutFieldsState({ ...checkoutFieldsState, loading: false, error: content?.result })
      }
    } catch (err) {
      setCheckoutFieldsState({ ...checkoutFieldsState, loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    if (businessId && typeof businessId === 'number') {
      getBusiness()
    }
  }, [businessId, orderState.options?.type])

  /**
   * Update carts from sockets
   */
  useEffect(() => {
    if (cart && cart.status === 1) {
      const data = {
        paymethod_id: paymethodSelected.paymethodId,
        paymethod_data: paymethodSelected?.data,
        delivery_zone_id: cart.delivery_zone_id,
        amount: cart?.balance ?? cart?.total
      }
      if (cart?.offer_id) payload.offer_id = cart?.offer_id
      onPlaceOrderClick && onPlaceOrderClick(data, paymethodSelected, cart)
    }
  }, [cart])

  useEffect(() => {
    if (deliveryOptionSelected === undefined) {
      setDeliveryOptionSelected(cart?.delivery_option_id)
    }
  }, [cart?.delivery_option_id])

  useEffect(() => {
    if (!isKiosk) {
      Promise.all(
        [getDeliveryOptions(), getLoyaltyPlans()].map(promise => {
          return promise.then(
            value => Promise.reject(value),
            error => Promise.resolve(error)
          )
        })
      )
    }
    getValidationFieldOrderTypes()
  }, [])

  useEffect(() => {
    const alseaProjects = ['alsea', 'alsea-staging']
    const amount = cart?.balance ?? cart?.total
    if (!(alseaProjects.includes(ordering.project) && isCustomerMode)) return
    const handleAlseaCheckPrice = async () => {
      try {
        setIsLoadingCheckprice(true)
        const customerFromLocalStorage = await window.localStorage.getItem('user-customer', true)
        const apiCheckprice = ordering.project === 'alsea' ? 'https://alsea-plugins.ordering.co/alseaplatform/api_checkprice.php' : 'https://alsea-plugins-staging.ordering.co/alseaplatform/api_checkprice.php'
        const response = await fetch(apiCheckprice, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-App-X': ordering.appId,
            Authorization: `bearer ${token}`
          },
          body: JSON.stringify({
            amount: amount ?? 0,
            user_id: customerFromLocalStorage?.id || user.id,
            uuid: cart.uuid
          })
        })
        const result = await response.json()
        if (result.error) {
          setAlseaCheckpriceError(t(result?.result))
        } else {
          setAlseaCheckpriceError(null)
          await refreshOrderOptions()
        }
        setIsLoadingCheckprice(false)
      } catch (err) {
        setAlseaCheckpriceError(err?.message)
        setIsLoadingCheckprice(false)
      }
    }
    handleAlseaCheckPrice()
  }, [isCustomerMode, JSON.stringify(cart?.products)])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          cart={cart}
          placing={placing}
          errors={errors}
          loyaltyPlansState={loyaltyPlansState}
          orderOptions={orderState.options}
          paymethodSelected={paymethodSelected}
          businessDetails={businessDetails}
          commentState={commentState}
          placeSpotNumber={placeSpotNumber}
          setPlaceSpotNumber={setPlaceSpotNumber}
          instructionsOptions={instructionsOptions}
          deliveryOptionSelected={deliveryOptionSelected}
          handlePaymethodChange={handlePaymethodChange}
          handlerClickPlaceOrder={handlerClickPlaceOrder}
          handleChangeComment={handleChangeComment}
          handleChangeSpot={handleChangeSpot}
          onChangeSpot={onChangeSpot}
          handleChangeDeliveryOption={handleChangeDeliveryOption}
          handleConfirmCredomaticPage={handleConfirmCredomaticPage}
          checkoutFieldsState={checkoutFieldsState}
          alseaCheckPriceError={alseaCheckPriceError}
          isLoadingCheckprice={isLoadingCheckprice}
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
  propsToFetch: ['id', 'name', 'email', 'cellphone', 'address', 'address_notes', 'paymethods', 'logo', 'location', 'configs']
}
