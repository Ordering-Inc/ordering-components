import React, { createContext, useContext, useState, useEffect } from 'react'
import { useSession } from '../SessionContext'
import { Popup } from '../../components/Popup'
import { AlertUI } from '../../../example/components/AlertUI'

/**
 * Create OrderContext
 * This context will manage the current order with options internally and provide an easy interface
 */
export const OrderContext = createContext()

/**
 * Custom provider to order manager
 * This provider has a reducer for manage order state
 * @param {props} props
 */
export const OrderProvider = ({ ordering, children }) => {
  const [confirm, setConfirm] = useState({ show: false })
  const [alert, setAlert] = useState({ show: false })

  const [state, setState] = useState({
    loading: false,
    options: {
      type: 1
    },
    carts: {},
    confirm,
    alert
  })

  const [{ token }] = useSession()

  /**
   * Refresh order options and carts from API
   */
  const refreshOrderOptions = async () => {
    try {
      setState({ ...state, loading: true })
      const response = await fetch(`${ordering.root}/order_options`, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } })
      const { error, result } = await response.json()
      if (!error) {
        const { carts, ...options } = result
        state.carts = {}
        carts.forEach(cart => {
          state.carts[`businessId:${cart.business_id}`] = cart
        })
        state.options = {
          ...state.options,
          ...options
        }
      }
      setState({ ...state, loading: false })
    } catch (err) {
      setState({ ...state, loading: false })
    }
  }

  /**
   * Change order address
   */
  const changeAddress = async (addressId) => {
    console.log(state.options.address_id, addressId)
    if (state.options.address_id === addressId) {
      return
    }

    updateOrderOptions({ address_id: addressId })
  }

  /**
   * Change order type
   */
  const changeType = async (type) => {
    if (state.options.type === type) {
      return
    }

    updateOrderOptions({ type })
  }

  /**
   * Change order moment
   */
  const changeMoment = async (moment) => {
    moment = !moment ? null : Math.floor(moment.getTime() / 1000)
    if (state.options.moment === moment) {
      return
    }

    updateOrderOptions({ moment })
  }

  /**
   * Update order option data
   * @param {object} changes Changes to update order options
   */
  const updateOrderOptions = async (changes) => {
    try {
      setState({ ...state, loading: true })
      const response = await fetch(`${ordering.root}/order_options/verify_changes`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(changes) })
      const { error, result } = await response.json()
      setState({ ...state, loading: false })
      if (!error) {
        return await applyChanges(changes)
      } else {
        setConfirm({
          show: true,
          content: result,
          onConfirm: () => {
            setConfirm({ show: false })
            applyChanges(changes)
          }
        })
      }
    } catch (err) {
      setState({ ...state, loading: false })
      return false
    }
  }

  /**
   * Update order option data
   * @param {object} changes Changes to update order options
   */
  const applyChanges = async (changes) => {
    try {
      setState({ ...state, loading: true })
      const response = await fetch(`${ordering.root}/order_options`, { method: 'PUT', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(changes) })
      const { error, result } = await response.json()
      if (!error) {
        const { carts, ...options } = result
        state.carts = {}
        carts.forEach(cart => {
          state.carts[`businessId:${cart.business_id}`] = cart
        })
        state.options = {
          ...state.options,
          ...options
        }
      } else {
        setAlert({ show: true, content: result })
      }
      setState({ ...state, loading: false })
      return !error
    } catch (err) {
      setState({ ...state, loading: false })
      return false
    }
  }

  /**
   * Add product to cart
   */
  const addProduct = async (product) => {
    try {
      setState({ ...state, loading: true })
      const body = JSON.stringify({
        product: JSON.stringify(product)
      })
      const response = await fetch(`${ordering.root}/carts/add_product`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body })
      const { error, result } = await response.json()
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
      } else {
        setAlert({ show: true, content: result })
      }
      setState({ ...state, loading: false })
      return !error
    } catch (err) {
      setState({ ...state, loading: false })
      return false
    }
  }

  /**
   * Remove product to cart
   */
  const removeProduct = async (product) => {
    try {
      setState({ ...state, loading: true })
      const body = JSON.stringify({
        product: JSON.stringify({
          id: product.id,
          code: product.code,
          business_id: product.business_id
        })
      })
      const response = await fetch(`${ordering.root}/carts/remove_product`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body })
      const { error, result } = await response.json()
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
      } else {
        setAlert({ show: true, content: result })
      }
      setState({ ...state, loading: false })
      return !error
    } catch (err) {
      setState({ ...state, loading: false })
      return false
    }
  }

  /**
   * Clear products of cart
   */
  const clearCart = async (uuid) => {
    try {
      setState({ ...state, loading: true })
      const body = JSON.stringify({
        uuid
      })
      const response = await fetch(`${ordering.root}/carts/clear`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body })
      const { error, result } = await response.json()
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
      } else {
        setAlert({ show: true, content: result })
      }
      setState({ ...state, loading: false })
      return !error
    } catch (err) {
      setState({ ...state, loading: false })
      return false
    }
  }

  /**
   * Update product to cart
   */
  const updateProduct = async (product) => {
    try {
      setState({ ...state, loading: true })
      const body = JSON.stringify({
        product: JSON.stringify(product)
      })
      const response = await fetch(`${ordering.root}/carts/update_product`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body })
      const { error, result } = await response.json()
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
      } else {
        setAlert({ show: true, content: result })
      }
      setState({ ...state, loading: false })
      return !error
    } catch (err) {
      setState({ ...state, loading: false })
      return false
    }
  }

  /**
   * Apply coupon to cart
   */
  const applyCoupon = async (couponData) => {
    if (!couponData.business_id) {
      throw new Error('`business_id` is required.')
    }
    if (!couponData.coupon) {
      throw new Error('`coupon` is required.')
    }
    if (state.carts[`businessId:${couponData.business_id}`]?.coupon === couponData.coupon) {
      return
    }
    try {
      setState({ ...state, loading: true })
      const body = JSON.stringify({
        business_id: couponData.business_id,
        coupon: couponData.coupon
      })
      const response = await fetch(`${ordering.root}/carts/apply_coupon`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body })
      const { error, result } = await response.json()
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
      } else {
        setAlert({ show: true, content: result })
      }
      setState({ ...state, loading: false })
      return !error
    } catch (err) {
      setState({ ...state, loading: false })
      return false
    }
  }

  useEffect(() => {
    refreshOrderOptions()
  }, [token])

  const functions = {
    refreshOrderOptions,
    changeAddress,
    changeType,
    changeMoment,
    addProduct,
    removeProduct,
    updateProduct,
    clearCart,
    applyCoupon,
    setAlert,
    setConfirm
  }

  const copyState = JSON.parse(JSON.stringify(state))

  return (
    <OrderContext.Provider value={[copyState, functions]}>
      <Popup
        UIComponent={AlertUI}
        open={confirm.show}
        title='Confirm'
        onAccept={() => confirm.onConfirm()}
        onCancel={() => setConfirm({ show: false })}
        onClose={() => setConfirm({ show: false })}
        content={confirm.content}
      />
      <Popup
        UIComponent={AlertUI}
        open={alert.show}
        title='Error'
        onAccept={() => setAlert({ show: false })}
        onClose={() => setAlert({ show: false })}
        content={alert.content}
      />
      {children}
    </OrderContext.Provider>
  )
}

/**
 * Hook to get and update order state
 */
export const useOrder = () => {
  const orderManager = useContext(OrderContext)
  const warningMessage = () => {
    console.warn('Must use OrderProvider to wrappe the app.')
  }
  /**
   * Functions to avoid fails
   */
  const functionsPlaceholders = {
    refreshOrderOptions: warningMessage,
    changeAddress: warningMessage,
    changeType: warningMessage,
    changeMoment: warningMessage,
    addProduct: warningMessage,
    removeProduct: warningMessage,
    updateProduct: warningMessage,
    clearCart: warningMessage,
    applyCoupon: warningMessage,
    setAlert: warningMessage,
    setConfirm: warningMessage
  }
  return orderManager || [{}, functionsPlaceholders]
}
