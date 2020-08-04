import React, { createContext, useContext, useReducer, useEffect, useState } from 'react'

export const ORDER_ACTIONS = {
  CHANGE_TYPE: 'change_type',
  CANCEL_CHANGES: 'cancel_changes',
  APPLY_CHANGES: 'apply_changes',
  CHANGE_BUSINESS: 'change_business',
  ADD_PRODUCT: 'add_product',
  REMOVE_PRODUCT: 'remove_product',
  LOADING: 'loading',
  ERROR: 'error'
}

/**
 * Create OrderContext
 * This context will manage the current order with options internally and provide an easy interface
 */
export const OrderContext = createContext()

const defaultInitialState = {
  loading: false,
  error: null,
  changing: false,
  confirm: null,
  changes: {},
  order: JSON.parse(window.localStorage.getItem('order')) || { type: 1, products: [], business: { } }
}

/**
 * Default reducer definition
 * @param {object} state Currente state reducer
 * @param {object} action Data to change state reducer
 */
const defaultReducer = (state, action) => {
  switch (action.type) {
    /**
     * Apply waiting changes
     */
    case ORDER_ACTIONS.APPLY_CHANGES: {
      const newState = {
        ...state,
        order: {
          ...state.order,
          ...action.changes
        },
        changing: false,
        changes: {},
        loading: false,
        error: null
      }
      window.localStorage.setItem('order', JSON.stringify(newState.order))
      return newState
    }
    /**
     * Start a order type change
     */
    case ORDER_ACTIONS.CHANGE_TYPE: {
      const newState = {
        ...state
      }
      if (state.order.products.length === 0) {
        newState.order = {
          ...newState.order,
          type: action.order_type
        }
        window.localStorage.setItem('order', JSON.stringify(newState.order))
        return newState
      }

      return {
        ...state,
        changing: true,
        changes: { type: action.order_type }
      }
    }
    /**
     * Change de order business
     */
    case ORDER_ACTIONS.CHANGE_BUSINESS: {
      if (!action.business?.id || !action.business?.slug) {
        throw new Error('The business must content `id` and `slug` attrubutes.')
      }
      const newState = {
        ...state,
        order: {
          ...state.order,
          business: action.business,
          products: []
        }
      }

      window.localStorage.setItem('order', JSON.stringify(newState.order))

      return newState
    }
    /**
     * Calcel waiting changes
     */
    case ORDER_ACTIONS.CANCEL_CHANGES:
      return {
        ...state,
        changing: false,
        changes: {},
        loading: false,
        error: null
      }
    /**
     * Change error status
     */
    case ORDER_ACTIONS.ERROR:
      return {
        ...state,
        error: action.error
      }
    /**
     * Add new product to cart
     * Will groupe if is possible
     */
    case ORDER_ACTIONS.ADD_PRODUCT:
      if (!state.order.business?.id || !state.order.business?.slug) {
        throw new Error('You must provide `business` with `id` and `slug` before add a product.')
      }
      if (action.product) {
        state.order.products.map(product => {
          return product
        })
        const index = state.order.products.findIndex(product => {
          return product.id === action.product.id
        })
        if (index >= 0) {
          state.order.products[index].quantity += action.product.quantity
        } else {
          state.order.products.push(action.product)
        }
      }
      window.localStorage.setItem('order', JSON.stringify(state.order))
      return {
        ...state
      }
    /**
     * Remove product from cart
     */
    case ORDER_ACTIONS.REMOVE_PRODUCT:
      if (action.productId) {
        state.order.products = state.order.products.filter(product => product.id !== action.productId)
      }
      window.localStorage.setItem('order', JSON.stringify(state.order))
      return {
        ...state
      }
    /**
     * Change loading cart status
     */
    case ORDER_ACTIONS.LOADING:
      return {
        ...state,
        loading: action.loading
      }

    default:
      return state
  }
}

/**
 * Custom provider to order manager
 * This provider has a reducer for manage order state
 * @param {props} props
 */
export const OrderProvider = ({ ordering, children, ConfirmComponent }) => {
  const [data, dispatcher] = useReducer(defaultReducer, defaultInitialState)
  const [confirm, serConfirm] = useState()

  useEffect(() => {
    if (data.changing && data.changes.type) {
      validateCart(data.changes)
    }
  }, [data.changing])

  /**
   * Check cart when there ir a product or more
   * @param {object} changes Changes of order
   */
  const validateCart = async (changes) => {
    try {
      dispatcher({ type: ORDER_ACTIONS.LOADING, loading: true })
      const response = await ordering.businesses.validateCart(data.order.business.id || 41, {
        query: {
          type: changes.type || data.order.type,
          products: data.order.products.map(product => product.id)
        }
      })
      dispatcher({ type: ORDER_ACTIONS.LOADING, loading: false })
      if (!response.content.error) {
        if (response.content.result.non_existent_products.length > 0) {
          response.content.result.non_existent_products.map(productId => {
            dispatcher({ type: ORDER_ACTIONS.REMOVE_PRODUCT, productId })
          })
        }
        if (response.content.result.valid || response.content.result.invalid_products.length === 0) {
          dispatcher({ type: ORDER_ACTIONS.APPLY_CHANGES, changes })
        } else {
          const products = response.content.result.invalid_products.map(product => product.name).join(', ')
          serConfirm({
            message: `If you change delivery type the products ${products} will remove.`,
            func: removeProducts,
            data: {
              products: response.content.result.invalid_products.map(product => product.id),
              changes: changes
            }
          })
        }
      } else {
        dispatcher({ type: ORDER_ACTIONS.CANCEL_CHANGES })
        dispatcher({ type: ORDER_ACTIONS.ERROR, error: response.content.result })
      }
    } catch (err) {
      console.log(err)
      dispatcher({ type: ORDER_ACTIONS.CANCEL_CHANGES })
      dispatcher({ type: ORDER_ACTIONS.ERROR, error: err.message })
    }
  }

  /**
   * Remove products from order beacause has conflics with menu
   * @param {object} param0 Products and changes to apply when accept confirm
   */
  const removeProducts = ({ products, changes }) => {
    products.map(productId => {
      dispatcher({ type: ORDER_ACTIONS.REMOVE_PRODUCT, productId })
    })
    dispatcher({ type: ORDER_ACTIONS.APPLY_CHANGES, changes })
    serConfirm()
  }

  /**
   * Function to cancel changes and close se confirm
   */
  const cancelConfirm = () => {
    dispatcher({ type: ORDER_ACTIONS.CANCEL_CHANGES })
    serConfirm()
  }

  return (
    <OrderContext.Provider value={[data, dispatcher]}>
      <>
        {
          confirm && !ConfirmComponent && (
            <div>
              <p>{confirm.message}</p>
              <button onClick={() => confirm.func(confirm.data)}>Yes</button>
              <button onClick={() => cancelConfirm()}>No</button>
            </div>
          )
        }
        {
          confirm && ConfirmComponent && (
            <ConfirmComponent message={confirm.message} onAccept={() => confirm.func(confirm.data)} onCancel={() => cancelConfirm()} />
          )
        }
        {data.changing && data.changes.type && data.error && (
          <div>
            <p>{data.error}</p>
          </div>
        )}
        {children}
      </>
    </OrderContext.Provider>
  )
}

/**
 * Hook to get and update order state
 */
export const useOrder = () => {
  const orderManager = useContext(OrderContext)
  return orderManager || [{}, () => {}]
}
