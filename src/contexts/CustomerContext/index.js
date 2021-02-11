import React, { useEffect, useState, useContext, createContext } from 'react'
import { useApi } from '../ApiContext'

export const CustomerContext = createContext()

export const CustomerProvider = ({ children }) => {
  const [ordering] = useApi()
  const [state, setState] = useState({ loading: false, user: null })

  const setUser = (user) => {
    setState({
      ...state,
      user
    })
  }

  const deleteUser = () => {
    setState({
      ...state,
      user: null
    })
  }

  const functions = {
    setUser,
    deleteUser
  }

  return (
    <CustomerContext.Provider value={[state, functions]}>
      {children}
    </CustomerContext.Provider>
  )
}

export const useCustomer = () => {
  const customerManager = useContext(CustomerContext)
  return customerManager || [{}, async () => {}]
}
