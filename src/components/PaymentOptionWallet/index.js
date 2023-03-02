import React, { useEffect, useState } from 'react'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useOrder } from '../../contexts/OrderContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

export const PaymentOptionWallet = (props) => {
  const {
    cart,
    UIComponent,
    loyaltyPlansState
  } = props

  const [ordering] = useApi()
  const socket = useWebsocket()
  const [orderState, { setStateValues }] = useOrder()
  const [{ token, user }] = useSession()

  const [walletsState, setWalletsState] = useState({ result: [], loyaltyPlans: [], loading: true, error: null })
  const [errorState, setErrorState] = useState(null)

  const getRedemptionRate = (wallet, loyaltyPlans) => {
    if (wallet.type === 'cash') return 100

    if (!loyaltyPlans?.length) return false

    const loyaltyPlan = loyaltyPlans.find(plan => plan.type === wallet.type)
    if (!loyaltyPlan) return false

    const businessLoyaltyPlan = loyaltyPlan.businesses.find(business => business.business_id === cart.business_id)
    if (!businessLoyaltyPlan && loyaltyPlan.businesses.length) return false

    if (businessLoyaltyPlan && !businessLoyaltyPlan.redeems) return false

    const redemptionRate = businessLoyaltyPlan?.redemption_rate ?? loyaltyPlan?.redemption_rate
    return redemptionRate
  }

  const getWallets = async () => {
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

  const selectWallet = async (wallet) => {
    try {
      const response = await fetch(
        `${ordering.root}/carts/${cart.uuid}/wallets`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            'X-App-X': ordering.appId,
            'X-Socket-Id-X': socket?.getId()
          },
          body: JSON.stringify({
            wallet_id: wallet.id
          })
        }
      )
      const { error, result } = await response.json()
      if (error) {
        setErrorState(result)
        return
      }
      const carts = orderState.carts
      carts[`businessId:${result.business_id}`] = result
      setStateValues({ carts })
    } catch (err) {
      setErrorState([err?.message])
    }
  }

  const deletetWalletSelected = async (wallet) => {
    try {
      const response = await fetch(
        `${ordering.root}/carts/${cart.uuid}/wallets/${wallet.id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            'X-App-X': ordering.appId,
            'X-Socket-Id-X': socket?.getId()
          }
        }
      )
      const { error, result } = await response.json()
      if (error) {
        setErrorState(result)
        return
      }
      const carts = orderState.carts
      carts[`businessId:${result.business_id}`] = result
      setStateValues({ carts })
    } catch (err) {
      setErrorState([err?.message])
    }
  }

  useEffect(() => {
    if (loyaltyPlansState && loyaltyPlansState?.loading) return
    getWallets()
  }, [loyaltyPlansState])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          errorState={errorState}
          setErrorState={setErrorState}
          walletsState={walletsState}
          selectWallet={selectWallet}
          deletetWalletSelected={deletetWalletSelected}
        />
      )}
    </>
  )
}

PaymentOptionWallet.defaultProps = {}
