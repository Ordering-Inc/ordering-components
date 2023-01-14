import React, { createContext, useState, useContext, useEffect } from 'react'
import { useApi } from '../ApiContext'
import { useLanguage } from '../LanguageContext'
import { useOptimizationLoad } from '../OptimizationLoadContext'

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
  const [optimizationLoad] = useOptimizationLoad()

  const refreshSite = async (sites = null) => {
    try {
      setState({ ...state, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-APP-X': appId
        }
      }

      let error = sites?.error ?? null
      let result = sites?.result ?? null
      if (!sites) {
        const response = await fetch(`${ordering.root}/sites/current`, requestOptions)
        const res = await response.json()
        error = res?.error
        result = res?.result
      }

      setState({
        ...state,
        loading: false,
        site: error ? {} : result
      })
    } catch (err) {
      setState({ ...state, loading: false })
    }
  }

  const functions = {
    refreshSite
  }

  useEffect(() => {
    if (languageState.loading || optimizationLoad.loading) return
    const _sites = optimizationLoad.result ? {
      error: optimizationLoad.error,
      result: optimizationLoad.result?.site
    } : null
    refreshSite(_sites)
  }, [languageState, optimizationLoad])

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
