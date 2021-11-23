import React, { useEffect, useState, useContext, createContext } from 'react'

export const CustomerContext = createContext()

export const CustomerProvider = ({ children, strategy }) => {
  const [state, setState] = useState({
    loading: false,
    user: null
  })

  const getUserCustomerFromLocalStorage = async () => {
    setState({ ...state, loading: true })
    const user = await strategy.getItem('user-customer', true)
    if (user) {
      setState({ ...state, user, loading: false })
      return
    }
    setState({ ...state, loading: false })
  }

  const setUserCustomer = async (user, isFromLocalStorage) => {
    if (isFromLocalStorage && user) {
      setState({ ...state, loading: true })
      await strategy.setItem('user-customer', user, true)
    }
    setState({
      ...state,
      user,
      loading: false
    })
  }

  const deleteUserCustomer = async (isFromLocalStorage) => {
    if (isFromLocalStorage) {
      setState({ ...state, loading: true })
      await strategy.removeItem('user-customer')
    }
    setState({
      ...state,
      user: null,
      loading: false
    })
  }

  const setLoadingCustomer = (value) => {
    setState({ ...state, loading: value })
  }

  const functions = {
    setLoadingCustomer,
    setUserCustomer,
    deleteUserCustomer
  }

  useEffect(() => {
    getUserCustomerFromLocalStorage()
  }, [])

  return (
    <CustomerContext.Provider value={[state, functions]}>
      {children}
    </CustomerContext.Provider>
  )
}

export const useCustomer = () => {
  const customerManager = useContext(CustomerContext)
  return customerManager || [{}, () => {}]
}
