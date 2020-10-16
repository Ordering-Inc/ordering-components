import React, { createContext, useContext, useState } from 'react'

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
export const BusinessProvider = ({ children }) => {
  const [state, setState] = useState({
    business: {}
  })

  const setBusiness = async (business) => {
    setState({ ...state, business })
  }

  const copyState = JSON.parse(JSON.stringify(state))
  const functions = {
    setBusiness
  }

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
