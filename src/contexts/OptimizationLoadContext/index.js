import React, { createContext, useContext, useEffect, useState } from 'react'
import { useApi } from '../ApiContext'

/**
 * Create OptimizationLoadContext
 * Context to use Ordering API on the app
 */
export const OptimizationLoadContext = createContext()

/**
 * Api provider to manage api request
 * @param {props} props
 */
export const OptimizationLoadProvider = ({ settings, children }) => {
  const [state, setState] = useState({
    loading: settings?.useOptimizeLoad,
    result: null,
    error: null
  })

  const [ordering] = useApi()

  const getData = async () => {
    if (!settings?.useOptimizeLoad) return
    const requestOptions = {
      method: 'GET',
      headers: { 'X-App-X': settings.appId }
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
