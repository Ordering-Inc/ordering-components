import React, { createContext, useState, useContext, useEffect } from 'react'
import { useApi } from '../ApiContext'
import { useSession } from '../SessionContext'

/**
 * Create DefaultThemeContext
 * This context will manage the current themes and layouts
 */
export const DefaultThemeContext = createContext()

/**
 * Custom provider to ordering themes and layouts manager
 * This provider has a reducer for manage themes and layouts state
 * @param {props} props
 */
export const DefaultThemeProvider = ({ children }) => {
  const [state, setState] = useState({
    loading: true,
    theme: {},
    error: false
  })

  const [ordering] = useApi()
  const [{ token }] = useSession()

  const getThemes = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
    try {
      const response = await fetch(`${ordering.root}/themes`, requestOptions)
      const { result, error } = await response.json()
      if (!error) {
        setState({
          ...state,
          theme: result[0]?.values_default?.my_products?.components,
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

  const refreshTheme = () => {
    getThemes()
  }

  useEffect(() => {
    if (!token) return
    getThemes()
  }, [token])

  const functions = {
    refreshTheme
  }

  return (
    <DefaultThemeContext.Provider value={[state, functions]}>
      {children}
    </DefaultThemeContext.Provider>
  )
}

/**
 * Hook to get ordering theme
 */
export const useDefaultTheme = () => {
  const defaultThemeManager = useContext(DefaultThemeContext)
  const warningMessage = () => {
    console.warn('Must use OrderingThemeProvider to wrappe the app.')
  }
  /**
   * Functions to avoid fails
   */
  const functionsPlaceholders = {
    refreshTheme: warningMessage
  }

  return defaultThemeManager || [{}, functionsPlaceholders]
}
