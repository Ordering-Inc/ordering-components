import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useOrder } from '../../contexts/OrderContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

/**
 * Component to manage Multi carts paymethods and wallets behavior without UI component
 */
export const MultiCartsPaymethodsAndWallets = (props) => {
  const {
    UIComponent,
    openCarts,
    propsToFetch,
    cartUuid
  } = props

  const [ordering] = useApi()
  const socket = useWebsocket()
  const [{ token, user }] = useSession()

  const [cartsUuids, setCartsUuids] = useState([])
  const [businessIds, setBusinessIds] = useState([])
  const [paymethodsAndWallets, setPaymethodsAndWallets] = useState({ loading: true, paymethods: [], wallets: [], error: null })
  const [walletsState, setWalletsState] = useState({ result: [], loading: true, error: null })

  /**
   * Method to get available wallets and paymethods from API
   */
  const getPaymethodsAndWallets = async () => {
    try {
      setPaymethodsAndWallets({ ...paymethodsAndWallets, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${token}`,
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        }
      }
      const response = await fetch(`${ordering.root}/cart_groups/${cartUuid}/prepare`, requestOptions)
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
            Authorization: `Bearer ${token}`,
            'X-App-X': ordering.appId,
            'X-Socket-Id-X': socket?.getId()
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
    const _cartsUuids = openCarts.reduce((uuids, cart) => [...uuids, cart.uuid], [])
    setCartsUuids(_cartsUuids)
    const _businessIds = openCarts.reduce((uuids, cart) => [...uuids, cart.business_id], [])
    setBusinessIds(_businessIds)
  }, [openCarts])

  useEffect(() => {
    getUserWallets()
  }, [])

  useEffect(() => {
    if (!cartsUuids.length) return
    getPaymethodsAndWallets()
  }, [JSON.stringify(cartsUuids), JSON.stringify(businessIds)])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessIds={businessIds}
          paymethodsAndWallets={paymethodsAndWallets}
          walletsState={walletsState}
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
