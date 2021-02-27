import React, { useEffect, useState, useContext, createContext } from 'react'

export const CustomerContext = createContext()

export const CustomerProvider = ({ children, strategy }) => {
  const [state, setState] = useState({
    loading: false,
    user: null
  })

  const getUserCustomerFromLocalStorage = async () => {
    const userId = await strategy.getItem('user-customer', true)
    if (userId) {
      setState({ ...state, user: { id: userId } })
    }
  }

  const setUserCustomer = async (user, isFromLocalStorage) => {
    if (isFromLocalStorage && user) {
      await strategy.setItem('user-customer', user.id, true)
    }
    setState({
      ...state,
      user
    })
  }

  const deleteUserCustomer = async (isFromLocalStorage) => {
    if (isFromLocalStorage) {
      await strategy.removeItem('user-customer')
    }
    setState({
      ...state,
      user: null
    })
  }

  const functions = {
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
