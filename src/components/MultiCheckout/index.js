import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useOrder } from '../../contexts/OrderContext'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

/**
 * Component to manage Multi businesses checkout page behavior without UI component
 */
export const MultiCheckout = (props) => {
  const {
    UIComponent,
    onPlaceOrderClick
  } = props

  const [ordering] = useApi()
  /**
   * Session content
   */
  const [{ token }] = useSession()
  const [{ carts }, { placeMulitCarts }] = useOrder()
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

  const openCarts = (Object.values(carts)?.filter(cart => cart?.products && cart?.products?.length && cart?.status !== 2 && cart?.valid_schedule && cart?.valid_products && cart?.valid_address && cart?.valid_maximum && cart?.valid_minimum) || null) || []
  const totalCartsPrice = openCarts && openCarts.reduce((total, cart) => { return total + cart?.total }, 0)
  const cartsUuids = openCarts.reduce((uuids, cart) => [...uuids, cart.uuid], [])

  const [placing, setPlacing] = useState(false)
  const [paymethodSelected, setPaymethodSelected] = useState({})

  const handleGroupPlaceOrder = async () => {
    let paymethodData = paymethodSelected?.paymethod_data
    if (paymethodSelected?.paymethod_data && ['stripe', 'stripe_connect', 'stripe_direct'].includes(paymethodSelected?.paymethod?.gateway)) {
      paymethodData = JSON.stringify({
        source_id: paymethodSelected?.paymethod_data?.id
      })
    }
    let payload = {
      carts: cartsUuids,
      amount: totalCartsPrice
    }
    if (paymethodSelected?.paymethod) {
      payload = {
        ...payload,
        paymethod_id: paymethodSelected?.paymethod?.id
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
    const { error, result } = await placeMulitCarts(payload)
    setPlacing(false)
    if (!error) {
      const orderUuids = result.carts.reduce((uuids, cart) => [...uuids, cart.order.uuid], [])
      onPlaceOrderClick && onPlaceOrderClick(orderUuids)
    }
  }

  const handleSelectPaymethod = (paymethod) => {
    setPaymethodSelected({
      ...paymethodSelected,
      ...paymethod,
      paymethod_data: null
    })
  }

  const handleSelectWallet = (checked, wallet) => {
    if (checked) {
      setPaymethodSelected({
        ...paymethodSelected,
        wallet_id: wallet.id,
        wallet_data: wallet.balance > totalCartsPrice ? totalCartsPrice : wallet.balance
      })
    } else {
      const _paymethodSelected = { ...paymethodSelected }
      delete _paymethodSelected.wallet_id
      delete _paymethodSelected.wallet_data
      setPaymethodSelected(_paymethodSelected)
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
      const response = await fetch(`${ordering.root}/delivery_options`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${token}`
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
          const response = await fetch(`${ordering.root}/carts/${cartId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `bearer ${token}`
            },
            body: JSON.stringify({
              delivery_option_id: value
            })
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

  useEffect(() => {
    if (deliveryOptionSelected === undefined) {
      setDeliveryOptionSelected(null)
    }
  }, [instructionsOptions])

  useEffect(() => {
    getDeliveryOptions()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          placing={placing}
          openCarts={openCarts}
          totalCartsPrice={totalCartsPrice}
          paymethodSelected={paymethodSelected}
          handleSelectPaymethod={handleSelectPaymethod}
          handleGroupPlaceOrder={handleGroupPlaceOrder}
          handleSelectWallet={handleSelectWallet}
          handlePaymethodDataChange={handlePaymethodDataChange}
          handleChangeDeliveryOption={handleChangeDeliveryOption}
          deliveryOptionSelected={deliveryOptionSelected}
          instructionsOptions={instructionsOptions}
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
