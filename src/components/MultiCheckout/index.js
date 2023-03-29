import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useOrder } from '../../contexts/OrderContext'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

/**
 * Component to manage Multi businesses checkout page behavior without UI component
 */
export const MultiCheckout = (props) => {
  const {
    UIComponent,
    onPlaceOrderClick,
    cartUuid,
    userId,
    actionsBeforePlace
  } = props

  const qParams = userId ? `?user_id=${userId}` : ''

  const [ordering] = useApi()
  const socket = useWebsocket()
  /**
   * Session content
   */
  const [{ token }] = useSession()
  const [{ carts }, { placeMultiCarts }] = useOrder()
  /**
* Toast state
*/
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  /**
  * Delivery Instructions options
  */
  const [instructionsOptions, setInstructionsOptions] = useState({ loading: false, result: [{ id: null, enabled: true, name: t('EITHER_WAY', 'Either way') }], error: null })
  /**
  * Delivery instructions selected
  */
  const [deliveryOptionSelected, setDeliveryOptionSelected] = useState(undefined)
  const [loyaltyPlansState, setLoyaltyPlansState] = useState({ loading: true, error: null, result: [] })

  const [placing, setPlacing] = useState(false)
  const [paymethodSelected, setPaymethodSelected] = useState({})
  const [cartGroup, setCartGroup] = useState({ loading: true, error: null, result: null })
  const [walletState, setWalletState] = useState({ loading: false, error: null, result: null })

  const openCarts = (cartGroup?.result?.carts?.filter(cart => cart?.valid && cart?.status !== 1) || null) || []
  const totalCartsPrice = openCarts?.length && openCarts.reduce((total, cart) => { return total + cart?.total }, 0)
  const totalCartsFee = openCarts?.length && openCarts?.filter(cart => cart?.status !== 1 && cart?.valid)?.reduce((total, cart) => { return total + (cart?.delivery_price_with_discount) }, 0)

  const handleGroupPlaceOrder = async (confirmPayment) => {
    let paymethodData = paymethodSelected?.paymethod_data
    if (paymethodSelected?.paymethod_data && ['stripe', 'stripe_connect', 'stripe_direct'].includes(paymethodSelected?.paymethod?.gateway)) {
      paymethodData = JSON.stringify({
        source_id: paymethodSelected?.paymethod_data?.id
      })
    }
    let payload = {
      amount: cartGroup?.result?.balance
    }
    if (paymethodSelected?.paymethod) {
      payload = {
        ...payload,
        paymethod_id: paymethodSelected?.paymethod?.id || paymethodSelected?.id
      }
    }
    if (paymethodData) {
      payload = {
        ...payload,
        paymethod_data: paymethodData
      }
    }
    if (paymethodSelected?.wallet_id) {
      payload = {
        ...payload,
        wallet_id: paymethodSelected.wallet_id,
        wallet_data: paymethodSelected.wallet_data
      }
    }
    setPlacing(true)
    const { error, result } = await placeMultiCarts(payload, cartUuid)

    if (result?.paymethod_data?.status === 2 && actionsBeforePlace) {
      await actionsBeforePlace(paymethodSelected, result)
    }

    if (confirmPayment && paymethodSelected?.gateway === 'global_apple_pay') {
      const paymentEvent = result?.payment_events?.find(event => event?.event === 'payment')
      if (paymentEvent?.data?.extra?.client_secret) {
        const { error: confirmApplePayError } = await confirmPayment(paymentEvent?.data?.extra?.client_secret)
        if (confirmApplePayError?.message || confirmApplePayError?.localizedMessage) {
          showToast(ToastType.Error, confirmApplePayError?.message || confirmApplePayError?.localizedMessage)
        }
      }
      setPlacing(false)
      if (!error) {
        onPlaceOrderClick && onPlaceOrderClick(result)
      }
    } else {
      setPlacing(false)
      onPlaceOrderClick && onPlaceOrderClick(result)
    }
  }

  const handleSelectPaymethod = (paymethod) => {
    if (paymethod === null) {
      setPaymethodSelected({})
    } else {
      setPaymethodSelected({
        ...paymethodSelected,
        ...paymethod,
        paymethod_data: paymethod?.paymethod_data
      })
    }
  }

  const handleSelectWallet = async (isChecked, wallet) => {
    setWalletState({ ...walletState, loading: true, error: null })
    const url = isChecked
      ? `${ordering.root}/cart_groups/${cartGroup?.result?.uuid}/wallets`
      : `${ordering.root}/cart_groups/${cartGroup?.result?.uuid}/wallets/${wallet.id}`
    try {
      const response = await fetch(url,
        {
          method: isChecked ? 'POST' : 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            'X-App-X': ordering.appId,
            'X-Socket-Id-X': socket?.getId()
          },
          ...(isChecked && {
            body: JSON.stringify({
              wallet_id: wallet.id
            })
          })
        }
      )
      const { error, result } = await response.json()
      if (!error) {
        setCartGroup({
          ...cartGroup,
          result: {
            ...cartGroup.result,
            wallets: result?.wallets,
            payment_events: result?.payment_events,
            balance: result?.balance
          }
        })
      }
      setWalletState({
        ...walletState,
        loading: false,
        error: error ? result : null,
        result: error ? null : result,
      })
    } catch (err) {
      setWalletState({
        ...walletState,
        loading: false,
        error: err?.message ?? err
      })
    }
  }

  const handlePaymethodDataChange = (data) => {
    setPaymethodSelected({
      ...paymethodSelected,
      paymethod_data: data
    })
  }

  const getDeliveryOptions = async () => {
    try {
      const response = await fetch(`${ordering.root}/delivery_options${qParams}`, {
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

  const multiHandleChangeDeliveryOption = async (value, cartUuidArr) => {
    try {
      const allPromise = cartUuidArr.map(cartId => {
        return new Promise(async (resolve, reject) => {
          const body = { delivery_option_id: value }
          if (userId) body.user_id = userId
          const response = await fetch(`${ordering.root}/carts/${cartId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `bearer ${token}`,
              'X-App-X': ordering.appId,
              'X-Socket-Id-X': socket?.getId()
            },
            body: JSON.stringify(body)
          })
          const { result, error } = await response.json()
          if (!error && result?.delivery_option_id === value) {
            resolve(result)
          } else {
            reject(false)
          }
        })
      })
      await Promise.all(allPromise) && setDeliveryOptionSelected(value)
    } catch (err) {
      showToast(ToastType.Error, err.message)
    }
  }

  const handleChangeDeliveryOption = async (value) => {
    const cartUuidArr = openCarts.map(cart => cart?.uuid)
    multiHandleChangeDeliveryOption(value, cartUuidArr)
  }

  const getMultiCart = async () => {
    try {
      if (!cartUuid) return
      setCartGroup({
        ...cartGroup,
        loading: true
      })
      const response = await fetch(`${ordering.root}/cart_groups/${cartUuid}${qParams}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${token}`,
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        }
      })
      const { result, error } = await response.json()
      setCartGroup({
        ...cartGroup,
        loading: false,
        result,
        error
      })
    } catch (err) {
      setCartGroup({
        ...cartGroup,
        loading: false,
        error: err.message
      })
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
        result: error ? [] : result,
        rewardRate: result?.find(loyal => loyal.type === 'credit_point')?.accumulation_rate ?? 0
      })
    } catch (error) {
      setLoyaltyPlansState({
        ...loyaltyPlansState,
        loading: false,
        result: []
      })
    }
  }

  useEffect(() => {
    if (deliveryOptionSelected === undefined) {
      setDeliveryOptionSelected(null)
    }
  }, [instructionsOptions])

  useEffect(() => {
    Promise.any([getDeliveryOptions(), getLoyaltyPlans()])
  }, [])

  useEffect(() => {
    getMultiCart()
  }, [JSON.stringify(carts)])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          placing={placing}
          openCarts={openCarts}
          rewardRate={loyaltyPlansState?.rewardRate}
          loyaltyPlansState={loyaltyPlansState}
          totalCartsPrice={totalCartsPrice}
          paymethodSelected={paymethodSelected}
          handleSelectPaymethod={handleSelectPaymethod}
          handleGroupPlaceOrder={handleGroupPlaceOrder}
          handleSelectWallet={handleSelectWallet}
          handlePaymethodDataChange={handlePaymethodDataChange}
          handleChangeDeliveryOption={handleChangeDeliveryOption}
          deliveryOptionSelected={deliveryOptionSelected}
          instructionsOptions={instructionsOptions}
          cartGroup={cartGroup}
          walletState={walletState}
          totalCartsFee={totalCartsFee}
        />
      )}
    </>
  )
}

MultiCheckout.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}
