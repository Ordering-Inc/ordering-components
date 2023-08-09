import React, { useEffect, useState, useContext, createContext } from 'react'
import { useApi } from '../ApiContext'
import { useSite } from '../SiteContext'

export const ValidationFieldsBySiteContext = createContext()

export const ValidationFieldsBySiteProvider = ({ children }) => {
  const [ordering] = useApi()
  const [{ site }] = useSite()
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
