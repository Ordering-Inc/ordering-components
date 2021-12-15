import React, { createContext, useContext, useState, useEffect } from 'react'
import { useApi } from '../ApiContext'

/**
 * Create BusinessContext
 * This context will manage the business internally and provide an easy interface
 */
export const BusinessContext = createContext()

/**
 * Custom provider to business manager
 * This provider has a reducer for manage business state
 * @param {props} props
 */
export const BusinessProvider = ({ children, businessId }) => {
  const [state, setState] = useState({
    business: {},
    loading: false,
    error: null
  })

  const [ordering] = useApi()
  const businessParams = ['header', 'logo', 'name', 'slug', 'address', 'location', 'distance', 'address_notes', 'zipcode', 'internal_number']

  const getBusiness = async (id) => {
    try {
      setState({ ...state, loading: true })
      const { content: { result, error } } = await ordering.businesses(id)
        .select(businessParams)
        .get()

      setState({
        ...state,
        loading: false,
        business: error ? {} : result,
        error: error ? result[0] : null
      })
    } catch (err) {
      setState({ ...state, loading: false, error: err.message })
    }
  }

  const setBusiness = async (business) => {
    setState({ ...state, business })
  }

  const copyState = JSON.parse(JSON.stringify(state))
  const functions = {
    setBusiness
  }

  useEffect(() => {
    if (businessId) {
      getBusiness(businessId)
    }
  }, [businessId])

  return (
    <BusinessContext.Provider value={[copyState, functions]}>
      {children}
    </BusinessContext.Provider>
  )
}

/**
 * Hook to get and update business state
 */
export const useBusiness = () => {
  const BusinessManager = useContext(BusinessContext)
  return BusinessManager || [{}, () => {}]
}
