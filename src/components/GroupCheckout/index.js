import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
/**
 * Component to manage Multi businesses checkout page behavior without UI component
 */
export const GroupCheckout = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [{ carts }] = useOrder()

  const openCarts = (Object.values(carts)?.filter(cart => cart?.products && cart?.products?.length && cart?.status !== 2 && cart?.valid_schedule && cart?.valid_products && cart?.valid_address && cart?.valid_maximum && cart?.valid_minimum) || null) || []
  const totalCartsPrice = openCarts && openCarts.reduce((total, cart) => { return total + cart?.total }, 0)
  const cartsUuids = openCarts.reduce((uuids, cart) => [...uuids, cart.uuid], [])

  const [placingState, setPlacingState] = useState({ loading: false, error: null })
  const [paymethodSelectedState, setPaymethodSelectedState] = useState({})

  /**
   * Confirm cart payment from  API
   */
  const handleGroupPlaceOrder = async () => {
    try {
      setPlacingState({ ...placingState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${token}`
        },
        body: JSON.stringify({
          carts: cartsUuids,
          amount: totalCartsPrice,
          ...paymethodSelectedState
        })
      }

      const response = await fetch(`${ordering.root}/carts/place_group`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setPlacingState({ loading: false, error: null })
      } else {
        setPlacingState({ loading: false, error: result })
      }
    } catch (err) {
      setPlacingState({
        loading: false,
        error: [err.message]
      })
    }
  }

  const handleSelectPaymethod = (paymethodId) => {
    setPaymethodSelectedState({
      ...paymethodSelectedState,
      paymethod_id: paymethodId
    })
  }

  const handleSelectWallet = (checked, wallet) => {
    if (checked) {
      setPaymethodSelectedState({
        ...paymethodSelectedState,
        wallet_id: wallet.id,
        wallet_data: wallet.balance > totalCartsPrice ? totalCartsPrice : wallet.balance
      })
    } else {
      const _paymethodSelectedState = { ...paymethodSelectedState }
      delete _paymethodSelectedState.wallet_id
      delete _paymethodSelectedState.wallet_data
      setPaymethodSelectedState(_paymethodSelectedState)
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          placingState={placingState}
          openCarts={openCarts}
          totalCartsPrice={totalCartsPrice}
          paymethodSelectedState={paymethodSelectedState}
          handleSelectPaymethod={handleSelectPaymethod}
          handleGroupPlaceOrder={handleGroupPlaceOrder}
          handleSelectWallet={handleSelectWallet}
        />
      )}
    </>
  )
}

GroupCheckout.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}
