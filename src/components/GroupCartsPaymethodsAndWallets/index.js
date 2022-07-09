import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'

/**
 * Component to manage Multi businesses checkout page behavior without UI component
 */
export const GroupCartsPaymethodsAndWallets = (props) => {
  const {
    UIComponent,
    openCarts
  } = props

  const [ordering] = useApi()
  const [{ token, user }] = useSession()
  const cartsUuids = openCarts.reduce((uuids, cart) => [...uuids, cart.uuid], [])

  const [paymethodsAndWallets, setPaymethodsAndWallets] = useState({ loading: true, paymethods: [], wallets: [], error: null })
  const [walletsState, setWalletsState] = useState({ result: [], loading: true, error: null })

  /**
   * Get available wallets and paymethods from API
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
   * Get user wallets from API
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
    getPaymethodsAndWallets()
    getUserWallets()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          paymethodsAndWallets={paymethodsAndWallets}
          walletsState={walletsState}
        />
      )}
    </>
  )
}

GroupCartsPaymethodsAndWallets.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}
