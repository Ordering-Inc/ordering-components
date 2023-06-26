import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

/**
 * Component to manage Multi carts paymethods and wallets behavior without UI component
 */
export const MultiCartsPaymethodsAndWallets = (props) => {
  const {
    UIComponent,
    openCarts,
    loyaltyPlansState,
    userId,
    cartUuid
  } = props

  const qParams = userId ? `?user_id=${userId}` : ''

  const [ordering] = useApi()
  const socket = useWebsocket()
  const [{ token, user }] = useSession()

  const [cartsUuids, setCartsUuids] = useState([])
  const [businessIds, setBusinessIds] = useState([])
  const [paymethodsAndWallets, setPaymethodsAndWallets] = useState({ loading: true, paymethods: [], wallets: [], error: null })
  const [walletsState, setWalletsState] = useState({ result: [], loading: true, error: null })

  const getRedemptionRate = (wallet, loyaltyPlans) => {
    if (wallet.type === 'cash') return 100

    if (!loyaltyPlans?.length) return false

    const loyaltyPlan = loyaltyPlans.find(plan => plan.type === wallet.type)
    if (!loyaltyPlan) return false

    const loyalBusinessesIds = loyaltyPlan.businesses.map(b => b.business_id)
    const isBusinessContained = businessIds.every(business => loyalBusinessesIds.includes(business))

    const businessLoyaltyPlans = loyaltyPlan.businesses.filter(business => businessIds.includes(business.business_id))

    if (!isBusinessContained && loyaltyPlan.businesses.length) return false

    if (isBusinessContained && !businessLoyaltyPlans.every(bl => bl.redeems)) return false

    return loyaltyPlan?.redemption_rate
  }

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
      const response = await fetch(`${ordering.root}/cart_groups/${cartUuid}/prepare${qParams}`, requestOptions)
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
        `${ordering.root}/users/${user.id}/wallets${qParams}`,
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

      let resLoyalty = loyaltyPlansState ?? null

      if (!loyaltyPlansState) {
        const reqLoyalty = await fetch(
          `${ordering.root}/loyalty_plans`,
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
        resLoyalty = await reqLoyalty.json()
      }

      let wallets = []
      if (!error) {
        const loyaltyPlans = resLoyalty.result
        wallets = result.map(wallet => {
          const redemptionRate = getRedemptionRate(wallet, loyaltyPlans)
          if (redemptionRate === false) {
            wallet.valid = false
            wallet.redemption_rate = null
          } else {
            wallet.valid = true
            wallet.redemption_rate = redemptionRate
          }
          return wallet
        })
      }

      setWalletsState({
        ...walletsState,
        loading: false,
        error: error ? result : null,
        result: error ? null : wallets,
        loyaltyPlans: resLoyalty?.error ? [] : resLoyalty?.result
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
    if (loyaltyPlansState && loyaltyPlansState?.loading) return
    getUserWallets()
  }, [loyaltyPlansState])

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
