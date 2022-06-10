import React, { useEffect, useState } from 'react'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'

export const WalletList = (props) => {
  const {
    UIComponent,
    isWalletCashEnabled,
    isWalletPointsEnabled
  } = props

  const [ordering] = useApi()
  const [{ token, user }] = useSession()
  const [walletSelected, setWalletSelected] = useState(null)

  const [state, setState] = useState({ wallets: [], loading: true, error: null })
  const [transactions, setTransactions] = useState({ list: null, loading: true, error: null })

  const getTransactions = async (walletId) => {
    if (transactions.list?.[`wallet:${walletId}`]) return
    try {
      setTransactions({ ...transactions, loading: true })
      const response = await fetch(
        `${ordering.root}/users/${user.id}/wallets/${walletId}/events?orderBy=-id`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      )
      const { error, result } = await response.json()

      setTransactions({
        ...transactions,
        error: error ? result : null,
        list: {
          ...transactions.list,
          [`wallet:${walletId}`]: error ? null : result
        },
        loading: false
      })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setTransactions({
          ...transactions,
          loading: false,
          error: [err.message]
        })
      }
    }
  }

  const getWallets = async () => {
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

      if (!error && result?.length > 0) {
        const cashWallet = isWalletCashEnabled ? result.find(wallet => wallet.type === 'cash') : null
        const pointsWallet = isWalletPointsEnabled ? result.find(wallet => wallet.type === 'credit_point') : null

        if (cashWallet) {
          getTransactions(cashWallet.id)
        } else if (pointsWallet) {
          getTransactions(pointsWallet.id)
        }
      }

      setState({
        ...state,
        loading: false,
        error: error ? result : null,
        wallets: error ? null : result,
      })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setState({
          ...state,
          loading: false,
          error: [err.message]
        })
      }
    }
  }

  useEffect(() => {
    getWallets()
  }, [])

  useEffect(() => {
    if (walletSelected ) {
      getTransactions(walletSelected)
    }
  }, [walletSelected])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          walletList={state}
          transactionsList={transactions}
          setWalletSelected={setWalletSelected}
          getWallets={getWallets}
        />
      )}
    </>
  )
}

WalletList.defaultProps = {}
