import React, { useEffect, useState, useContext, createContext } from 'react'
import { useApi } from '../ApiContext'

export const ValidationFieldsContext = createContext()

export const ValidationFieldsProvider = ({ children, appId }) => {
  const [ordering] = useApi()
  const [state, setState] = useState({ loading: true, fields: {}, error: false })

  const loadValidationFields = async (options) => {
    const forceLoading = options?.forceLoading
    try {
      if (forceLoading) {
        setState({ ...state, loading: true })
      }
      const { content: { result, error } } = await ordering.validationFields().get({ headers: { 'X-APP-X': appId } })
      const fields = {
        checkout: {},
        address: {},
        card: {}
      }
      if (!error) {
        result.forEach(item => {
          const code = item.code === 'mobile_phone' ? 'cellphone' : item.code
          fields[item.validate][code] = item
        })
      }
      setState({ loading: false, fields })
    } catch (err) {
      setState({ ...state, loading: false, error: [err.message] })
    }
  }

  const functions = {
    loadValidationFields
  }

  useEffect(() => {
    loadValidationFields()
  }, [])

  return (
    <ValidationFieldsContext.Provider value={[state, functions]}>
      {children}
    </ValidationFieldsContext.Provider>
  )
}

export const useValidationFields = () => {
  const validationFieldsManager = useContext(ValidationFieldsContext)
  return validationFieldsManager || [{}, async () => { }]
}
