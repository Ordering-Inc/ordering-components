import React, { createContext, useState, useContext, useEffect } from 'react'
import { useApi } from '../ApiContext'

/**
 * Create OrderingThemeContext
 * This context will manage the current themes and layouts
 */
export const OrderingThemeContext = createContext()

/**
 * Custom provider to ordering themes and layouts manager
 * This provider has a reducer for manage themes and layouts state
 * @param {props} props
 */
export const OrderingThemeProvider = ({ children, settings }) => {

  const [state, setState] = useState({
    loading: true,
    theme: {},
    themeValues: {},
    error: false
  })

  const [ordering] = useApi()

  const getThemes = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'X-App-X': settings.appId
      }
    }
    try {
      const response = await fetch(`${ordering.root}/theme`, requestOptions)
      const { result, error } = await response.json()
      if (!error) {
        setState({
          ...state,
          theme: result.values,
          loading: false,
          error: false
        })
        return
      }
      setState({
        ...state,
        theme: {},
        loading: false,
        error: true
      })
    } catch (err) {
      setState({
        ...state,
        theme: {},
        loading: false,
        error: err
      })
    }
  }

  const getOrderingThemes = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const response = await fetch(`${ordering.root}/themes`, requestOptions)
      const { result, error } = await response.json()
      if (!error) {
        setState({
          ...state,
          themeValues: result[0]?.values_default?.my_products?.components,
          loading: false,
          error: false
        })
        return
      }
      setState({
        ...state,
        themeValues: {},
        loading: false,
        error: true
      })
    } catch (err) {
      setState({
        ...state,
        themeValues: {},
        loading: false,
        error: err
      })
    }
  }

  const refreshTheme = () => {
    getThemes()
  }

  useEffect(() => {
    getThemes()
    getOrderingThemes()
  }, [])

  const functions = {
    refreshTheme
  }

  return (
    <OrderingThemeContext.Provider value={[state, functions]}>
      {children}
    </OrderingThemeContext.Provider>
  )
}

/**
 * Hook to get ordering theme
 */
export const useOrderingTheme = () => {
  const orderingThemeManager = useContext(OrderingThemeContext)
  const warningMessage = () => {
    console.warn('Must use OrderingThemeProvider to wrappe the app.')
  }
  /**
   * Functions to avoid fails
   */
  const functionsPlaceholders = {
    refreshTheme: warningMessage
  }

  return orderingThemeManager || [{}, functionsPlaceholders]
}
