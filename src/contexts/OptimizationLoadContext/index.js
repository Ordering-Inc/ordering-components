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
export const OptimizationLoadProvider = ({ settings, children, strategy }) => {
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
    const countryCodeFromLocalStorage = await strategy.getItem('country-code')
    const localOptions = await strategy.getItem('options', true)
    const countryCode = countryCodeFromLocalStorage || localOptions?.address?.country_code

    if (countryCode) {
      requestOptions.headers = {
        ...requestOptions.headers,
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

  const handleUpdateOptimizationState = (key, data) => {
    const keysAllowed = ['configs', 'features', 'site', 'theme', 'validation_fields']
    if (!keysAllowed.includes(key)) return
    setState({
      ...state,
      result: {
        ...state?.result,
        [key]: {
          ...state?.result?.[key],
          ...data
        }
      }
    })
  }

  useEffect(() => {
    getData()
  }, [settings?.useOptimizeLoad])

  const functions = {
    getData,
    handleUpdateOptimizationState
  }

  return (
    <OptimizationLoadContext.Provider value={[state, functions]}>
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
