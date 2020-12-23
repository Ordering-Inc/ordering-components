import React, { useEffect, useState, useContext, createContext } from 'react'
import { useApi } from '../ApiContext'

export const validationFieldsContext = createContext()

export const ValidationFieldsProvider = ({ children }) => {
  const [ordering] = useApi()
  const [state, setState] = useState({ loading: true, fields: {} })
  const requestsState = {}

  const loadValidationFields = async () => {
    try {
      const source = {}
      requestsState.validation = source
      const { content: { error, result } } = await ordering.validationFields().get({ cancelToken: source })
      const fields = {}
      if (!error) {
        result.forEach((field) => {
          if (field.validate === 'checkout') {
            fields[field.code === 'mobile_phone' ? 'cellphone' : field.code] = field
          }
        })
      }
      setState({ loading: false, fields })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setState({ loading: false })
      }
    }
  }

  const functions = {
    loadValidationFields
  }

  useEffect(() => {
    loadValidationFields()
    return () => {
      if (requestsState.validation) {
        requestsState.validation.cancel()
      }
    }
  }, [])

  return (
    <validationFieldsContext value={[state, functions]}>
      {children}
    </validationFieldsContext>
  )
}

export const useValidationFields = () => {
  const validationFieldsManager = useContext(validationFieldsContext)
  return validationFieldsManager || [{}, async () => {}]
}
