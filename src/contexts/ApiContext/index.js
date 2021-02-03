import React, { createContext, useContext, useEffect, useState } from 'react'
import { Ordering } from 'ordering-api-sdk'

/**
 * Create ApiContext
 * Context to use Ordering API on the app
 */
export const ApiContext = createContext()

/**
 * Api provider to manage api request
 * @param {props} props
 */
export const ApiProvider = ({ settings, children }) => {
  const apiSettings = Object.assign(settings.api, { project: settings.project })
  const [ordering, setOrdering] = useState(new Ordering(settings))
  const [language, setLanguage] = useState(settings.language)

  const _setLanguage = (languageCode) => {
    if (languageCode === language) return
    setLanguage(languageCode)
  }

  useEffect(() => {
    console.log('api provider', apiSettings)
  }, [apiSettings])

  useEffect(() => {
    if (settings.project === '') return
    if (ordering.language === language) return
    const _ordering = new Ordering({
      ...settings,
      language
    })
    setOrdering(_ordering)
  }, [language, settings])

  const functions = {
    setLanguage: _setLanguage
  }

  return (
    <ApiContext.Provider value={[ordering, functions]}>
      {children}
    </ApiContext.Provider>
  )
}

/**
 * Hook to get api state
 */
export const useApi = () => {
  const apiManager = useContext(ApiContext)
  return apiManager || [{}]
}
