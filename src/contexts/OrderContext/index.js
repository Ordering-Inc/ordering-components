import React, { createContext, useContext, useState, useEffect } from 'react'
import { useSession } from '../SessionContext'
import { Popup } from '../../components/Popup'
// import { AlertUI } from '../../../example/components/AlertUI'
import { useApi } from '../ApiContext'
import { useWebsocket } from '../WebsocketContext'

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
export const OrderProvider = ({ children }) => {
  const [confirmAlert, setConfirm] = useState({ show: false })
  const [alert, setAlert] = useState({ show: false })
  const [ordering] = useApi()
  const socket = useWebsocket()

  const [state, setState] = useState({
    loading: true,
    options: {
      type: 1
    },
    carts: {},
    confirmAlert,
    alert
  })

  const [session] = useSession()

  /**
   * Refresh order options and carts from API
   */
  const refreshOrderOptions = async () => {
    try {
      if (!state.loading) {
        setState({ ...state, loading: true })
      }
      const response = await fetch(`${ordering.root}/order_options`, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.token}` } })
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
      const localOptions = JSON.parse(window.localStorage.getItem('options'))
      if (localOptions) {
        if (localOptions.address) {
          const conditions = [
            { attribute: 'address', value: localOptions.address.address }
          ]
          const addressesResponse = await ordering.setAccessToken(session.token).users(session.user.id).addresses().where(conditions).get()
          let address = addressesResponse.content.result.find(address => {
            return address.address_notes === localOptions.address.address_notes && address.internal_number === localOptions.address.internal_number
          })
          if (!address) {
            const addressResponse = await ordering.setAccessToken(session.token).users(session.user.id).addresses().save(localOptions.address)
            if (!addressResponse.content.error) {
              address = addressResponse.content.result
            }
          }
          if (address) {
            localOptions.address_id = address.id
          }
        }
        updateOrderOptions(localOptions)
        window.localStorage.removeItem('options')
      }
    } catch (err) {
      setState({ ...state, loading: false })
    }
  }

  /**
   * Change order address
   */
  const changeAddress = async (addressId) => {
    if (typeof addressId === 'object') {
      const options = {
        ...state.options,
        address: addressId
      }
      window.localStorage.setItem('options', JSON.stringify(options))
      setState({
        ...state,
        options
      })
      return
    }
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
    if (session.auth) {
      try {
        setState({ ...state, loading: true })
        const response = await fetch(`${ordering.root}/order_options/verify_changes`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.token}` }, body: JSON.stringify(changes) })
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
    } else {
      const options = {
        ...state.options,
        ...changes
      }
      localStorage.setItem('options', JSON.stringify(options))
      setState({
        ...state,
        options
      })
      return true
    }
  }

  /**
   * Update order option data
   * @param {object} changes Changes to update order options
   */
  const applyChanges = async (changes) => {
    try {
      setState({ ...state, loading: true })
      const response = await fetch(`${ordering.root}/order_options`, { method: 'PUT', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.token}` }, body: JSON.stringify(changes) })
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
      const response = await fetch(`${ordering.root}/carts/add_product`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.token}` }, body })
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
      const response = await fetch(`${ordering.root}/carts/remove_product`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.token}` }, body })
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
      const response = await fetch(`${ordering.root}/carts/clear`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.token}` }, body })
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
    console.log(product)
    try {
      setState({ ...state, loading: true })
      const body = JSON.stringify({
        product: JSON.stringify(product)
      })
      const response = await fetch(`${ordering.root}/carts/update_product`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.token}` }, body })
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
    if (typeof couponData.coupon === 'undefined') {
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
      const response = await fetch(`${ordering.root}/carts/apply_coupon`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.token}` }, body })
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
  const changeDriverTip = async (businessId, driverTipRate) => {
    if (!businessId) {
      throw new Error('`businessId` is required.')
    }
    if (!driverTipRate && driverTipRate !== 0) {
      throw new Error('`driverTipRate` is required.')
    }
    if (!state.carts[`businessId:${businessId}`] || state.carts[`businessId:${businessId}`]?.driver_tip_rate === driverTipRate) {
      return
    }
    try {
      setState({ ...state, loading: true })
      const body = JSON.stringify({
        business_id: businessId,
        driver_tip_rate: driverTipRate
      })
      const response = await fetch(`${ordering.root}/carts/change_driver_tip`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.token}` }, body })
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
   * Place cart
   */
  const placeCart = async (cardId, data) => {
    try {
      setState({ ...state, loading: true })
      data.paymethod_data = JSON.stringify(data.paymethod_data)
      const body = JSON.stringify(data)
      const response = await fetch(`${ordering.root}/carts/${cardId}/place`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.token}` }, body })
      const { error, result, cart } = await response.json()
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
      } else {
        state.carts[`businessId:${cart.business_id}`] = cart
      }
      setState({ ...state, loading: false })
      return { error, result }
    } catch (err) {
      setState({ ...state, loading: false })
      return {
        error: true,
        result: [err.message]
      }
    }
  }

  /**
   * Confirm cart
   */
  const confirmCart = async (cardId, data) => {
    try {
      setState({ ...state, loading: true })
      const body = JSON.stringify(data)
      const response = await fetch(`${ordering.root}/carts/${cardId}/confirm`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.token}` }, body })
      const { error, result, cart } = await response.json()
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
      } else {
        state.carts[`businessId:${cart.business_id}`] = cart
      }
      setState({ ...state, loading: false })
      return { error, result }
    } catch (err) {
      setState({ ...state, loading: false })
      return {
        error: true,
        result: [err.message]
      }
    }
  }

  useEffect(() => {
    if (session.auth) {
      refreshOrderOptions()
    } else {
      const options = JSON.parse(localStorage.getItem('options'))
      setState({
        ...state,
        loading: false,
        options: {
          type: options?.type || 1,
          moment: options?.type || null,
          address: options?.address || {}
        }
      })
    }
  }, [session])

  /**
   * Update carts from sockets
   */
  useEffect(() => {
    const handleCartUpdate = (cart) => {
      state.carts[`businessId:${cart.business_id}`] = {
        ...state.carts[`businessId:${cart.business_id}`],
        ...cart
      }
      setState({ ...state })
    }
    socket.on('carts_update', handleCartUpdate)
    return () => {
      socket.off('carts_update', handleCartUpdate)
    }
  }, [state, socket])

  /**
   * Join to carts room
   */
  useEffect(() => {
    socket.join(`carts_${session.user.id}`)
    return () => {
      socket.leave(`carts_${session.user.id}`)
    }
  }, [socket])

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
    changeDriverTip,
    placeCart,
    confirmCart,
    setAlert,
    setConfirm
  }

  const copyState = JSON.parse(JSON.stringify(state))

  return (
    <OrderContext.Provider value={[copyState, functions]}>
      <Popup
        // UIComponent={AlertUI}
        open={confirmAlert.show}
        title='Confirm'
        onAccept={() => confirmAlert.onConfirm()}
        onCancel={() => setConfirm({ show: false })}
        onClose={() => setConfirm({ show: false })}
        content={confirmAlert.content}
      />
      <Popup
        // UIComponent={AlertUI}
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
    placeCart: warningMessage,
    confirmCart: warningMessage,
    setAlert: warningMessage,
    setConfirm: warningMessage,
    changeDriverTip: warningMessage
  }
  return orderManager || [{}, functionsPlaceholders]
}
