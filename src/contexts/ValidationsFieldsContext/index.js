import React, { useEffect, useState, useContext, createContext } from 'react'
import { useApi } from '../ApiContext'

export const ValidationFieldsContext = createContext()

export const ValidationFieldsProvider = ({ children }) => {
  const [ordering] = useApi()
  const [state, setState] = useState({ loading: true, fields: {}, error: false })

  const convertArrayToObject = (result, fields) => {
    result.forEach((field) => {
      fields[field.code === 'mobile_phone' ? 'cellphone' : field.code] = field
    })
  }

  const loadValidationFields = async () => {
    try {
      const { content: { result, error } } = await ordering.validationFields().get()
      const checkout = {}
      const address = {}
      if (!error) {
        convertArrayToObject(
          result.filter(field => field.validate === 'checkout'),
          checkout
        )
        convertArrayToObject(
          result.filter(field => field.validate === 'address'),
          address
        )
      }
      setState({
        loading: false,
        fields: {
          checkout,
          address
        }
      })
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
  return validationFieldsManager || [{}, async () => {}]
}
