import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useOrder } from '../../contexts/OrderContext'

/**
 * Component to manage Multi carts paymethods and wallets behavior without UI component
 */
export const MultiCartsPaymethodsAndWallets = (props) => {
  const {
    UIComponent,
    openCarts,
    propsToFetch
  } = props

  const [ordering] = useApi()
  const [{ token, user }] = useSession()
  const [orderState] = useOrder()

  const cartsUuids = openCarts.reduce((uuids, cart) => [...uuids, cart.uuid], [])
  const businessIds = openCarts.reduce((uuids, cart) => [...uuids, cart.business_id], [])

  const [paymethodsAndWallets, setPaymethodsAndWallets] = useState({ loading: true, paymethods: [], wallets: [], error: null })
  const [walletsState, setWalletsState] = useState({ result: [], loading: true, error: null })
  const [businessPaymethods, setBusinessPaymethods] = useState({ loading: true, result: [], error: null })

  /**
   * Method to get available wallets and paymethods from API
   */
  const getPaymethodsAndWallets = async () => {
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

  /**
 * Method to get business from API
 */
  const getBusiness = async () => {
    try {
      const parameters = {
        type: orderState.options?.type
      }

      const { content: { result, error } } = await ordering.businesses(businessIds[0]).select(propsToFetch).parameters(parameters).get()
      setBusinessPaymethods({
        loading: false,
        result: error ? [] : result?.paymethods,
        error: error ? result : null
      })
    } catch (error) {
      setBusinessPaymethods({
        ...businessPaymethods,
        loading: false,
        error: [error.message]
      })
    }
  }

  /**
   * Method to get user wallets from API
   */
  const getUserWallets = async () => {
    try {
      const response = await fetch(
        `${ordering.root}/users/${user.id}/wallets`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      )
      const { error, result } = await response.json()

      setWalletsState({
        ...walletsState,
        loading: false,
        error: error ? result : null,
        result: error ? null : result
      })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setWalletsState({
          ...walletsState,
          loading: false,
          error: [err.message]
        })
      }
    }
  }

  useEffect(() => {
    if (!cartsUuids.length) return
    getPaymethodsAndWallets()
    getUserWallets()
    getBusiness()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessIds={businessIds}
          paymethodsAndWallets={paymethodsAndWallets}
          walletsState={walletsState}
          businessPaymethods={businessPaymethods}
        />
      )}
    </>
  )
}

MultiCartsPaymethodsAndWallets.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}

MultiCartsPaymethodsAndWallets.defaultProps = {
  propsToFetch: ['id', 'name', 'email', 'cellphone', 'address', 'paymethods', 'logo', 'location', 'configs']
}
