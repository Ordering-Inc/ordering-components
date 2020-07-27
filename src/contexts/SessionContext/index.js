import React, { createContext, useContext, useReducer } from 'react'

export const SESSION_ACTIONS = {
  LOGIN: 'login',
  LOGOUT: 'logout',
  CHANGE_USER: 'change_user'
}

/**
 * Create SessionContext
 * This context will manage the session internally and provide an easy interface
 */
export const SessionContext = createContext()

const defaultInitialState = {
  auth: window.localStorage.getItem('token'),
  token: window.localStorage.getItem('token'),
  user: JSON.parse(window.localStorage.getItem('user'))
}

/**
 * Default reducer definition
 * @param {object} state Currente state reducer
 * @param {object} action Data to change state reducer
 */
const defaultReducer = (state, action) => {
  switch (action.type) {
    case SESSION_ACTIONS.LOGIN:
      window.localStorage.setItem('token', action.token)
      window.localStorage.setItem('user', JSON.stringify(action.user))
      return {
        ...state,
        auth: true,
        user: action.user,
        token: action.token
      }
    case SESSION_ACTIONS.LOGOUT:
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('user')
      return {
        ...state,
        auth: false,
        user: null,
        token: null
      }
    case SESSION_ACTIONS.CHANGE_USER:
      window.localStorage.setItem('user', JSON.stringify(action.user))
      return {
        ...state,
        user: action.user
      }

    default:
      return state
  }
}

/**
 * Custom provider to session manager
 * This provider has a reducer for manage session state
 * @param {props} props
 */
export const SessionProvider = ({ reducer = defaultReducer, initialState = defaultInitialState, children }) => (
  <SessionContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </SessionContext.Provider>
)

/**
 * Hook to get and update session state
 */
export const useSession = () => {
  const sessionManager = useContext(SessionContext)
  return sessionManager || [{}, () => {}]
}
