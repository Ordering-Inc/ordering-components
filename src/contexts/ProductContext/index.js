import React, { createContext, useContext, useReducer, useEffect, useState } from 'react'

export const PRODUCT_ACTIONS = {
  CHANGE_INGREDIENTS: 'change_ingredients',
  CHANGE_OPTIONS: 'change_options'
}

/**
 * Create OrderContext
 * This context will manage the current order with options internally and provide an easy interface
 */
export const ProductContext = createContext()

const defaultInitialState = {
  ingredients: [],
  options: []
}

/**
 * Default reducer definition
 * @param {object} state Currente state reducer
 * @param {object} action Data to change state reducer
 */
const defaultReducer = (state, action) => {
  switch (action.type) {
    case PRODUCT_ACTIONS.CHANGE_INGREDIENTS: {
      window.localStorage.setItem('ingredients', JSON.stringify(action.ingredients));
      return {
        ...state,
        ingredients: action.ingredients
      }
    }
    case PRODUCT_ACTIONS.CHANGE_OPTIONS: {
      window.localStorage.setItem('options', JSON.stringify(action.options))
      return {
        ...state,
        options: action.options
      }
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
export const ProductProvider = ({ reducer = defaultReducer, initialState = defaultInitialState, children }) => (
  <ProductContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </ProductContext.Provider>
)

/**
 * Hook to get and update order state
 */
export const useProduct = () => {
  const productManager = useContext(ProductContext)
  return productManager || [{}, () => {}]
}
