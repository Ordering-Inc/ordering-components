import React, { createContext, useContext, useEffect, useState } from 'react'

/**
 * Create SessionContext
 * This context will manage the session internally and provide an easy interface
 */
export const SessionContext = createContext()

/**
 * Custom provider to session manager
 * This provider has a reducer for manage session state
 * @param {props} props
 */
export const SessionProvider = ({ children, strategy }) => {
  const [state, setState] = useState({
    auth: null,
    token: null,
    user: null,
    loading: false
  })

  const getValuesFromLocalStorage = async () => {
    setState({
      ...state,
      loading: true
    })
    const auth = await strategy.getItem('token')
    const token = await strategy.getItem('token')
    const user = await strategy.getItem('user', true)
    setState({ auth, token, user, loading: false })
  }

  const login = async (values) => {
    await strategy.setItem('token', values.token)
    await strategy.setItem('user', values.user, true)
    setState({
      ...state,
      auth: true,
      user: values.user,
      token: values.token
    })
  }

  const logout = async () => {
    await strategy.removeItem('token')
    await strategy.removeItem('user')
    setState({
      ...state,
      auth: false,
      user: null,
      token: null
    })
  }

  const changeUser = async (user) => {
    await strategy.setItem('user', user, true)
    setState({
      ...state,
      user
    })
  }

  useEffect(() => {
    getValuesFromLocalStorage()
  }, [])

  const functions = {
    login,
    logout,
    changeUser
  }

  return (
    <SessionContext.Provider value={[state, functions]}>
      {children}
    </SessionContext.Provider>
  )
}

/**
 * Hook to get and update session state
 */
export const useSession = () => {
  const sessionManager = useContext(SessionContext)
  return sessionManager || [{}, () => {}]
}
