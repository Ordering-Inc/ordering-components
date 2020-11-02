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
    user: null
  })

  const getValuesFromLocalStorage = async () => {
    const auth = await strategy.getItem('token')
    const token = await strategy.getItem('token')
    const user = await strategy.getItem('user', true)
    console.log('initial values', auth, token, user)
    setState({ auth, token, user })
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

  const changeUser = async (value) => {
    await strategy.setItem('user', value.user, true)
    setState({
      ...state,
      user: value.user
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

  // const copyState = JSON.parse(JSON.stringify(state))

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
