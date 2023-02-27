import React, { createContext, useContext, useEffect, useState } from 'react'
import { useApi } from '../ApiContext'
import { useWebsocket } from '../WebsocketContext'
import { useOrder } from '../OrderContext'

/**
 * Create OptimizationLoadContext
 * Context to use Ordering API on the app
 */
export const OptimizationLoadContext = createContext()

/**
 * Api provider to manage api request
 * @param {props} props
 */
export const OptimizationLoadProvider = ({ settings, children, strategy }) => {
  const [state, setState] = useState({
    loading: settings?.useOptimizeLoad,
    result: null,
    error: null
  })

  const [ordering] = useApi()
  const socket = useWebsocket()
  const [orderState] = useOrder()

  const getData = async () => {
    if (!settings?.useOptimizeLoad) return
    const requestOptions = {
      method: 'GET',
      headers: { 'X-App-X': settings.appId }
    }
    const countryCodeFromLocalStorage = await strategy.getItem('country-code')
    const countryCode = countryCodeFromLocalStorage && countryCodeFromLocalStorage !== orderState?.options?.address?.country_code
      ? countryCodeFromLocalStorage
      : orderState?.options?.address?.country_code

    if (countryCode) {
      requestOptions.headers = {
        'X-Socket-Id-X': socket?.getId(),
        'X-Country-Code-X': countryCode
      }
    }
    try {
      const response = await fetch(`${ordering.root}/frontends/first_load`, requestOptions)
      const { result, error } = await response.json()
      setState({
        ...state,
        loading: false,
        result: error ? null : result,
        error: error ? result : null
      })
    } catch (err) {
      setState({
        ...state,
        loading: false,
        error: err
      })
    }
  }

  useEffect(() => {
    getData()
  }, [settings?.useOptimizeLoad])

  return (
    <OptimizationLoadContext.Provider value={[state]}>
      {children}
    </OptimizationLoadContext.Provider>
  )
}

/**
 * Hook to get OptimizationLoadContext state
 */
export const useOptimizationLoad = () => {
  const optimizationLoadManager = useContext(OptimizationLoadContext)
  return optimizationLoadManager || [{}]
}
