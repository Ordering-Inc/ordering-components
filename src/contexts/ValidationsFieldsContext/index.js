import React, { useEffect, useState, useContext, createContext } from 'react'
import { useOptimizationLoad } from '../OptimizationLoadContext'
import { useApi } from '../ApiContext'

export const ValidationFieldsContext = createContext()

export const ValidationFieldsProvider = ({ children, appId }) => {
  const [ordering] = useApi()
  const [optimizationLoad] = useOptimizationLoad()
  const [state, setState] = useState({ loading: true, fields: {}, error: false })

  const loadOriginalValidationFields = async (options, fields = null) => {
    const forceLoading = options?.forceLoading
    try {
      if (forceLoading) {
        setState({ ...state, loading: true })
      }
      let error = fields?.error ?? null
      let result = fields?.result ?? null
      const fieldsObj = {
        checkout: {},
        address: {},
        card: {}
      }
      if (!result) {
        const response = await ordering.validationFields().get({ headers: { 'X-APP-X': appId } })
        error = response?.content?.error
        result = response?.content?.result
      }
      if (!error) {
        result.forEach(item => {
          const code = item.code === 'mobile_phone' ? 'cellphone' : item.code
          fieldsObj[item.validate][code] = item
        })
      }
      setState({ loading: false, fields: fieldsObj })
    } catch (err) {
      setState({ ...state, loading: false, error: [err.message] })
    }
  }

  const functions = {
    loadOriginalValidationFields
  }

  useEffect(() => {
    if (optimizationLoad.loading) return
    const _fields = optimizationLoad.result ? {
      error: optimizationLoad.error,
      result: optimizationLoad.result?.validation_fields
    } : null
    loadOriginalValidationFields(null, _fields)
  }, [optimizationLoad])

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
