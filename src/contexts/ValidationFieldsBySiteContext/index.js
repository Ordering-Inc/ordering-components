import React, { useEffect, useState, useContext, createContext } from 'react'
import { useApi } from '../ApiContext'
import { useSite } from '../SiteContext'

export const ValidationFieldsBySiteContext = createContext()

export const ValidationFieldsBySiteProvider = ({ children }) => {
  const [ordering] = useApi()
  const [{ site }] = useSite()
  const [state, setState] = useState({ loading: true, fields: {}, error: false })

  const loadValidationFields = async () => {
    try {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const response = await fetch(`${ordering.root}/validation_field_sites`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const checkoutFields = content.result.filter(field => field?.site_id === site?.id)
        setState({ fields: checkoutFields, loading: false })
      }
    } catch (err) {
      setState({ ...state, loading: false, error: [err.message] })
    }
  }

  const functions = {
    loadValidationFields
  }

  useEffect(() => {
    if (site?.id) loadValidationFields()
  }, [site?.id])

  return (
    <ValidationFieldsBySiteContext.Provider value={[state, functions]}>
      {children}
    </ValidationFieldsBySiteContext.Provider>
  )
}

export const useValidationFieldsBySite = () => {
  const validationFieldsManager = useContext(ValidationFieldsBySiteContext)
  return validationFieldsManager || [{}, async () => {}]
}
