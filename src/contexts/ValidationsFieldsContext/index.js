import React, { useEffect, useState, useContext, createContext } from 'react'
import { useApi } from '../ApiContext'
import { useSite } from '../SiteContext'

export const ValidationFieldsContext = createContext()

export const ValidationFieldsProvider = ({ children }) => {
  const [ordering] = useApi()
  const [siteState] = useSite()
  const [state, setState] = useState({ loading: true, fields: {}, error: false })

  const convertArrayToObject = (result, fields) => {
    result.forEach((field) => {
      fields[field?.validation_field?.code === 'mobile_phone' ? 'cellphone' : field?.validation_field?.code] = field
    })
  }

  const loadValidationFields = async () => {
    try {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const response = await fetch(`${ordering.root}/validation_field_sites`, requestOptions)
      const { result, error } = await response.json()
      const checkout = {}
      const address = {}
      const card = {}
      if (!error) {
        const checkoutFields = result.filter(field => field?.site_id === site?.id)
        convertArrayToObject(
          checkoutFields.filter(field => field?.validation_field?.validate === 'checkout'),
          checkout
        )
        convertArrayToObject(
          checkoutFields.filter(field => field?.validation_field?.validate === 'address'),
          address
        )
        convertArrayToObject(
          checkoutFields.filter(field => field?.validation_field?.validate === 'card'),
          card
        )
      }
      setState({
        loading: false,
        fields: {
          checkout,
          address,
          card
        }
      })
    } catch (err) {
      setState({ ...state, loading: false, error: [err.message] })
    }
  }

  const loadOriginalValidationFields = async () => {
    try {
      const { content: { result, error } } = await ordering.validationFields().get()
      const checkout = {}
      const address = {}
      const card = {}
      if (!error) {
        convertArrayToObject(
          result.filter(field => field.validate === 'checkout'),
          checkout
        )
        convertArrayToObject(
          result.filter(field => field.validate === 'address'),
          address
        )
        convertArrayToObject(
          result.filter(field => field.validate === 'card'),
          card
        )
      }
      setState({
        loading: false,
        fields: {
          checkout,
          address,
          card
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
    if (siteState?.loading) return
    if (siteState?.site?.id) loadValidationFields()
    else loadOriginalValidationFields()
  }, [siteState])

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
