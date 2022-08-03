import React, { createContext, useState, useContext, useEffect } from 'react'
import { useApi } from '../ApiContext'
import { useLanguage } from '../LanguageContext'

/**
 * Create SiteContext
 * This context will manage the current site internally and provide an easy interface
 */
export const SiteContext = createContext()

/**
 * Custom provider to site manager
 * This provider has a reducer for manage site state
 * @param {props} props
 */
export const SiteProvider = ({ appId, children }) => {
  const [state, setState] = useState({ loading: true, site: {} })
  const [languageState] = useLanguage()
  const [ordering] = useApi()

  const refreshSite = async () => {
    try {
      setState({ ...state, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-APP-X': appId
        }
      }

      const response = await fetch(`${ordering.root}/sites/current`, requestOptions)
      const { error, result } = await response.json()

      setState({
        ...state,
        loading: false,
        configs: error ? {} : result
      })
    } catch (err) {
      setState({ ...state, loading: false })
    }
  }

  const functions = {
    refreshSite
  }

  useEffect(() => {
    if (!languageState.loading) {
      refreshSite()
    }
  }, [languageState])

  return (
    <SiteContext.Provider value={[state, functions]}>
      {children}
    </SiteContext.Provider>
  )
}

/**
 * Hook to get and update site state
 */
export const useSite = () => {
  const siteManager = useContext(SiteContext)
  return siteManager || [{}, async () => {}]
}
