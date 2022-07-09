import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
/**
 * Component to manage Multi businesses checkout page behavior without UI component
 */
export const MultiBusinessesCheckout = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [{ carts }] = useOrder()

  const openCarts = (Object.values(carts)?.filter(cart => cart?.products && cart?.products?.length && cart?.status !== 2 && cart?.valid_schedule && cart?.valid_products && cart?.valid_address && cart?.valid_maximum && cart?.valid_minimum) || null) || []
  const totalCartsPrice = openCarts && openCarts.reduce((total, cart) => { return total + cart?.total }, 0)
  const cartsUuids = openCarts.reduce((uuids, cart) => [...uuids, cart.uuid], [])

  const [paymethodsAndWallets, setPaymethodsAndWallets] = useState({ loading: false, paymethods: [], wallets: [], error: null })

  /**
   * Get available wallets and paymethods from API
   */
  const getAvailablePaymethodsAndWallets = async () => {
    try {
      setPaymethodsAndWallets({ ...paymethodsAndWallets, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${token}`
        },
        body: JSON.stringify({
          carts: cartsUuids
        })
      }
      const response = await fetch(`${ordering.root}/carts/prepare_checkout`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setPaymethodsAndWallets({
          loading: false,
          paymethods: content.result?.paymethods || [],
          wallets: content.result?.wallets || [],
          error: null
        })
      } else {
        setPaymethodsAndWallets({
          ...paymethodsAndWallets,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setPaymethodsAndWallets({
        ...paymethodsAndWallets,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    getAvailablePaymethodsAndWallets()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          openCarts={openCarts}
          totalCartsPrice={totalCartsPrice}
          paymethodsAndWallets={paymethodsAndWallets}
        />
      )}
    </>
  )
}

MultiBusinessesCheckout.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}
