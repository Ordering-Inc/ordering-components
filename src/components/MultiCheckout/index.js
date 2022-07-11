import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'
/**
 * Component to manage Multi businesses checkout page behavior without UI component
 */
export const MultiCheckout = (props) => {
  const {
    UIComponent,
    onPlaceOrderClick
  } = props

  const [{ carts }, { placeMulitCarts }] = useOrder()

  const openCarts = (Object.values(carts)?.filter(cart => cart?.products && cart?.products?.length && cart?.status !== 2 && cart?.valid_schedule && cart?.valid_products && cart?.valid_address && cart?.valid_maximum && cart?.valid_minimum) || null) || []
  const totalCartsPrice = openCarts && openCarts.reduce((total, cart) => { return total + cart?.total }, 0)
  const cartsUuids = openCarts.reduce((uuids, cart) => [...uuids, cart.uuid], [])

  const [placing, setPlacing] = useState(false)
  const [paymethodSelectedState, setPaymethodSelectedState] = useState({})

  /**
   * Confirm cart payment from  API
   */
  const handleGroupPlaceOrder = async () => {
    setPlacing(true)
    const result = await placeMulitCarts({
      carts: cartsUuids,
      amount: totalCartsPrice,
      ...paymethodSelectedState
    })
    setPlacing(false)
    if (!result.error) {
      onPlaceOrderClick && onPlaceOrderClick(cartsUuids)
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
          placing={placing}
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

MultiCheckout.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}
