import React, { createContext, useContext, useReducer } from 'react'

export const BUSINESS_ACTIONS = {
  SET_FILTER_VALUES: 'set_filter_values',
  FETCH_BUSINESSES: 'fetch_businesses',
  LOADING: 'loading',
  ERROR: 'error'
}

/**
 * Create BusinessContext
 * This context will manage the business internally and provide an easy interface
 */
export const BusinessContext = createContext()

const defaultInitialState = {
  filterValues: { search: '', sortBy: '', category: '', businessType: 'delivery_time' },
  businesses: [],
  loading: false,
  error: null
}

/**
 * Default reducer definition
 * @param {object} state Currente state reducer
 * @param {object} action Data to change state reducer
 */
const defaultReducer = (state, action) => {
  switch (action.type) {
    case BUSINESS_ACTIONS.SET_FILTER_VALUES:
      return {
        ...state,
        filterValues: action.filterValues
      }
    case BUSINESS_ACTIONS.FETCH_BUSINESSES:
      return {
        ...state,
        businesses: action.isConcatArray ? state.businesses.concat(action.data.businesses) : action.data.businesses ?? [],
        loading: action.data.loading ?? false,
        error: action.data.error ?? null
      }
    case BUSINESS_ACTIONS.LOADING:
      return {
        ...state,
        loading: action.loading
      }
    case BUSINESS_ACTIONS.ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

/**
 * Custom provider to business manager
 * This provider has a reducer for manage business state
 * @param {props} props
 */
export const BusinessProvider = ({ reducer = defaultReducer, initialState = defaultInitialState, children }) => (
  <BusinessContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </BusinessContext.Provider>
)

/**
 * Hook to get and update business state
 */
export const useBusiness = () => {
  const BusinessManager = useContext(BusinessContext)
  return BusinessManager || [{}, () => {}]
}
