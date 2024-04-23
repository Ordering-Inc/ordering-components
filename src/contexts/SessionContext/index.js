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
    loading: true,
    device_code: null
  })
  const [ordering] = useApi()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const setValuesFromLocalStorage = async () => {
    const { auth, token, user, device_code } = await getValuesFromLocalStorage()
    setState({
      ...state,
      auth,
      token,
      user,
      loading: false,
      device_code
    })
  }

  const getValuesFromLocalStorage = async () => {
    try {
      const auth = await strategy.getItem('token')
      const token = await strategy.getItem('token')
      const user = await strategy.getItem('user', true)
      const device_code = await strategy.getItem('device_code')
      return { auth, token, user, device_code }
    } catch (err) {
      setState({
        ...state,
        loading: false
      })
    }
  }

  const login = async (values) => {
    await strategy.setItem('token', values?.token)
    await strategy.setItem('user', values?.user, true)
    if (values?.device_code) {
      await strategy.setItem('device_code', values?.device_code)
    }
    setState({
      ...state,
      auth: true,
      user: values?.user,
      token: values?.token,
      loading: false,
      device_code: values?.device_code || null
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
    try {
      const { token, user } = await getValuesFromLocalStorage()
      if (token && !state.token) {
        login({
          user,
          token
        })
      }
      if ((!token && state.token) || (!user?.enabled)) {
        logout()
      }
    } catch (err) {
      setState({
        ...state,
        loading: false
      })
    }
  }

  const refreshUserInfo = async () => {
    try {
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${state.token}`,
          'X-App-X': ordering?.appId
        }
      }
      const response = await fetch(`${ordering.root}/users/${state.user?.id}`, requestOptions)
      const { result, error } = await response.json()
      if (!error) {
        setState({
          ...state,
          user: result,
          loading: false
        })
        await strategy.setItem('user', result, true)
      } else {
        showToast(ToastType.Error, t('FAILED_TO_REFRESH_USER', 'Failed to refresh user'))
      }
    } catch (err) {
      showToast(ToastType.Error, t('FAILED_TO_REFRESH_USER', 'Failed to refresh user'))
    }
  }

  const verifyTokenActive = async () => {
    if (!(state?.auth && state?.token && state?.user?.mono_session)) return
    try {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state?.token}`
        }
      }
      const response = await fetch(`${ordering.root}/users/me?params=id`, requestOptions)
      const { error } = await response.json()
      if (error) {
        logout()
        showToast(ToastType.Error, t('ACCOUNT_LOGGED_IN_OTHER_DEVICE', 'Account logged in other device', 5000))
      }
    } catch (err) {
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      checkLocalStorage()
    }, 2000)
    return () => clearInterval(interval)
  }, [JSON.stringify(state)])

  useEffect(() => {
    setValuesFromLocalStorage()
  }, [])

  useEffect(() => {
    let interval = null
    if (state?.auth && state?.token && state?.user?.mono_session) {
      interval = setInterval(() => {
        verifyTokenActive()
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [state?.auth, state?.token, state?.user?.mono_session])

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
