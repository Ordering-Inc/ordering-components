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
