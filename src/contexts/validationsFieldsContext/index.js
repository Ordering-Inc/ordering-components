import React, { useEffect, useState, useContext, createContext } from 'react'
import { useApi } from '../ApiContext'

export const ValidationFieldsContext = createContext()

export const ValidationFieldsProvider = ({ children }) => {
  const [ordering] = useApi()
  const [state, setState] = useState({ loading: true, fields: {} })
  const requestsState = {}

  const changeCellphoneName = (result, fields) => {
    result.forEach((field) => {
      fields[field.code === 'mobile_phone' ? 'cellphone' : field.code] = field
    })
  }

  const loadValidationFields = async () => {
    try {
      const source = {}
      requestsState.validation = source
      const { content: { result: checkoutResult, error: checkoutError } } = await ordering.validationFields().toType('checkout').get({ cancelToken: source })
      const { content: { result: addressResult, error: addressError } } = await ordering.validationFields().toType('address').get({ cancelToken: source })
      const checkoutFields = {}
      const addressFields = {}
      if (!checkoutError) {
        changeCellphoneName(checkoutResult, checkoutFields)
      }
      if (!addressError) {
        changeCellphoneName(addressResult, addressFields)
      }
      setState({ loading: false, fields: { checkout: checkoutFields, address: addressFields } })
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
    <ValidationFieldsContext.Provider value={[state, functions]}>
      {children}
    </ValidationFieldsContext.Provider>
  )
}

export const useValidationFields = () => {
  const validationFieldsManager = useContext(ValidationFieldsContext)
  return validationFieldsManager || [{}, async () => {}]
}
