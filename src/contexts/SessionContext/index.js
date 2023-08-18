import React, { createContext, useContext, useEffect, useState } from 'react'
import { useApi } from '../ApiContext'
import { useToast, ToastType } from '../ToastContext'
import { useLanguage } from '../LanguageContext'
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
    device_code: null,
    loading: true
  })
  const [ordering] = useApi()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const setValuesFromLocalStorage = async () => {
    const { auth, token, user } = await getValuesFromLocalStorage()
    setState({
      ...state,
      auth,
      token,
      user,
      device_code,
      loading: false
    })
  }

  const getValuesFromLocalStorage = async () => {
    const auth = await strategy.getItem('token')
    const token = await strategy.getItem('token')
    const user = await strategy.getItem('user', true)
    return { auth, token, user }
  }

  const login = async (values) => {
    await strategy.setItem('token', values.token)
    await strategy.setItem('user', values.user, true)
    await strategy.setItem('device_code', values?.device_code)
    setState({
      ...state,
      auth: true,
      user: values.user,
      token: values.token,
      device_code: values?.device_code || null,
      loading: false
    })
  }

  const logout = async () => {
    await strategy.removeItem('token')
    await strategy.removeItem('user')
    const countryCodeFromLocalStorage = await strategy.getItem('country-code')
    if (countryCodeFromLocalStorage) {
      await strategy.removeItem('country-code')
    }
    setState({
      ...state,
      auth: false,
      user: null,
      token: null,
      loading: false
    })
  }

  const changeUser = async (user) => {
    await strategy.setItem('user', user, true)
    setState({
      ...state,
      user,
      loading: false
    })
  }

  const checkLocalStorage = async () => {
    const { token, user } = await getValuesFromLocalStorage()
    if (token && !state.token) {
      login({
        user,
        token
      })
    }

    if (!token && state.token) {
      logout()
    }
  }

  const refreshUserInfo = async () => {
    try {
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${state.token}`,
          'X-App-X': ordering.appId
        }
      }
      const response = await fetch(`${ordering.root}/users/${state.user.id}`, requestOptions)
      const { result, error } = await response.json()
      if (!error) {
        setState({
          ...state,
          user: result
        })
        await strategy.setItem('user', result, true)
      } else {
        showToast(ToastType.Error, t('FAILED_TO_REFRESH_USER', 'Failed to refresh user'))
      }
    } catch (err) {
      showToast(ToastType.Error, t('FAILED_TO_REFRESH_USER', 'Failed to refresh user'))
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      checkLocalStorage()
    }, 1000)
    return () => clearInterval(interval)
  }, [state])

  useEffect(() => {
    setValuesFromLocalStorage()
  }, [])

  const functions = {
    login,
    logout,
    changeUser,
    refreshUserInfo
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
  return sessionManager || [{}, () => { }]
}
