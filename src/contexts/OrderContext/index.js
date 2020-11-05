import React, { createContext, useContext, useState, useEffect } from 'react'
import { useSession } from '../SessionContext'
import { useApi } from '../ApiContext'
import { useWebsocket } from '../WebsocketContext'
import { useLanguage } from '../LanguageContext'
import { useEvent } from '../EventContext'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

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
export const OrderProvider = ({ Alert, children, strategy }) => {
  const [confirmAlert, setConfirm] = useState({ show: false })
  const [alert, setAlert] = useState({ show: false })
  const [ordering] = useApi()
  const [languageState, t] = useLanguage()
  const socket = useWebsocket()
  const [events] = useEvent()

  const [state, setState] = useState({
    loading: true,
    options: {
      type: 1,
      moment: null
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
      const { content: { error, result } } = await ordering.setAccessToken(session.token).orderOptions().get()
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
      const localOptions = await strategy.getItem('options', true)
      if (localOptions) {
        if (localOptions.address) {
          const conditions = [
            { attribute: 'address', value: localOptions?.address?.address }
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
        await strategy.removeItem('options')
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
      await strategy.setItem('options', options, true)
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
    const options = {
      ...state.options,
      type
    }
    await strategy.setItem('options', options, true)
    if (state.options.type === type) {
      return
    }

    updateOrderOptions({ type })
  }

  /**
   * Change order moment
   */
  const changeMoment = async (moment) => {
    const momentFormatted = dayjs.utc(moment, 'YYYY-MM-DD HH:mm:ss').local().unix() || 0

    const options = {
      ...state.options,
      moment: momentFormatted
    }
    setState({
      ...state,
      options
    })
    await strategy.setItem('options', options, true)
    if (state.options.moment === momentFormatted) {
      return
    }

    updateOrderOptions({ moment: momentFormatted })
  }

  /**
   * Update order option data
   * @param {object} changes Changes to update order options
   */
  // const _updateOrderOptions = async (changes) => {
  //   if (session.auth) {
  //     try {
  //       setState({ ...state, loading: true })
  //       const response = await fetch(`${ordering.root}/order_options/verify_changes`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.token}` }, body: JSON.stringify(changes) })
  //       const { error, result } = await response.json()
  //       if (!error) {
  //         return await applyChanges(changes)
  //       } else {
  //         setConfirm({
  //           show: true,
  //           content: result,
  //           onConfirm: () => {
  //             setConfirm({ show: false })
  //             applyChanges(changes)
  //           }
  //         })
  //       }
  //     } catch (err) {
  //       setState({ ...state, loading: false })
  //       return false
  //     }
  //   } else {
  //     const options = {
  //       ...state.options,
  //       ...changes
  //     }
  //     strategy.setItem('options', options, true)
  //     setState({
  //       ...state,
  //       options
  //     })
  //     return true
  //   }
  // }

  /**
   * Update order option data
   * @param {object} changes Changes to update order options
   */
  const updateOrderOptions = async (changes) => {
    if (session.auth) {
      try {
        setState({ ...state, loading: true })
        const { content: { error, result } } = await ordering.setAccessToken(session.token).orderOptions().save(changes, { headers: { 'X-Socket-Id-X': socket?.getId() } })
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
  }

  /**
   * Add product to cart
   */
  const addProduct = async (product) => {
    try {
      setState({ ...state, loading: true })
      const body = {
        product
      }
      const { content: { error, result } } = await ordering.setAccessToken(session.token).carts().addProduct(body, { headers: { 'X-Socket-Id-X': socket?.getId() } })
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
        events.emit('cart_product_added', product, result)
        events.emit('cart_updated', result)
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
      const body = {
        product: {
          id: product.id,
          code: product.code,
          business_id: product.business_id
        }
      }
      const { content: { error, result } } = await ordering.setAccessToken(session.token).carts().removeProduct(body, { headers: { 'X-Socket-Id-X': socket?.getId() } })
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
        events.emit('cart_product_removed', product, result)
        events.emit('cart_updated', result)
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
      const response = await fetch(`${ordering.root}/carts/clear`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Socket-Id-X': socket?.getId(), Authorization: `Bearer ${session.token}` }, body })
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
      const body = {
        product
      }
      const { content: { error, result } } = await ordering.setAccessToken(session.token).carts().updateProduct(body, { headers: { 'X-Socket-Id-X': socket?.getId() } })
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
        events.emit('cart_product_updated', product, result)
        events.emit('cart_updated', result)
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
      const body = {
        business_id: couponData.business_id,
        coupon: couponData.coupon
      }
      const { content: { error, result } } = await ordering.setAccessToken(session.token).carts().applyCoupon(body, { headers: { 'X-Socket-Id-X': socket?.getId() } })
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
        events.emit('cart_updated', result)
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
      const body = {
        business_id: businessId,
        driver_tip_rate: driverTipRate
      }
      const { content: { error, result } } = await ordering.setAccessToken(session.token).carts().changeDriverTip(body, { headers: { 'X-Socket-Id-X': socket?.getId() } })
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
        events.emit('cart_updated', result)
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
      const body = data
      const { content: { error, result, cart } } = await ordering.setAccessToken(session.token).carts(cardId).place(body, { headers: { 'X-Socket-Id-X': socket?.getId() } })
      if (!error) {
        if (result.status !== 1) {
          state.carts[`businessId:${result.business_id}`] = result
          events.emit('cart_updated', result)
        } else {
          delete state.carts[`businessId:${result.business_id}`]
        }
      } else {
        state.carts[`businessId:${cart.business_id}`] = cart
        events.emit('cart_updated', cart)
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
      const body = data
      const { content: { error, result, cart } } = await ordering.setAccessToken(session.token).carts(cardId).confirm(body, { headers: { 'X-Socket-Id-X': socket?.getId() } })
      if (!error) {
        if (result.status !== 1) {
          state.carts[`businessId:${result.business_id}`] = result
          events.emit('cart_updated', result)
        } else {
          delete state.carts[`businessId:${result.business_id}`]
        }
      } else if (cart) {
        state.carts[`businessId:${cart.business_id}`] = cart
        events.emit('cart_updated', cart)
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
   * Reorder an order and get cart
   */
  const reorder = async (orderId) => {
    try {
      setState({ ...state, loading: true })
      const { content: { error, result } } = await ordering.setAccessToken(session.token).orders(orderId).reorder({ headers: { 'X-Socket-Id-X': socket?.getId() } })
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
        events.emit('cart_added', result)
      } else {
        setAlert({ show: true, content: result })
      }
      setState({ ...state, loading: false })
      return { error, result }
    } catch (err) {
      setState({ ...state, loading: false })
      return { error: true, result: [err.message] }
    }
  }

  const [optionsLocalStorage, setOptionsLocalStorage] = useState(null)

  const getOptionFromLocalStorage = async () => {
    const options = await strategy.getItem('options', true)
    setOptionsLocalStorage(options)
  }

  useEffect(() => {
    if (session.loading) return
    if (session.auth) {
      if (!languageState.loading) {
        refreshOrderOptions()
      }
    } else {
      getOptionFromLocalStorage()
      setState({
        ...state,
        loading: false,
        options: {
          type: optionsLocalStorage?.type || 1,
          moment: optionsLocalStorage?.moment || null,
          address: optionsLocalStorage?.address || {}
        }
      })
    }
  }, [session, languageState])

  /**
   * Update carts from sockets
   */
  useEffect(() => {
    const handleCartUpdate = (cart) => {
      if (cart.status === 1) {
        if (state.carts[`businessId:${cart.business_id}`]) {
          delete state.carts[`businessId:${cart.business_id}`]
        }
      } else {
        state.carts[`businessId:${cart.business_id}`] = {
          ...state.carts[`businessId:${cart.business_id}`],
          ...cart
        }
      }
      setState({ ...state })
    }
    const handleOrderOptionUpdate = ({ carts, ...options }) => {
      const newCarts = {}
      carts.forEach(cart => {
        newCarts[`businessId:${cart.business_id}`] = cart
      })
      const newState = {
        ...state,
        options: {
          ...state.options,
          ...options
        },
        carts: {
          ...state.carts,
          ...newCarts
        }
      }
      setState({ ...newState })
    }
    socket.on('carts_update', handleCartUpdate)
    socket.on('order_options_update', handleOrderOptionUpdate)
    return () => {
      socket.off('carts_update', handleCartUpdate)
      socket.off('order_options_update', handleOrderOptionUpdate)
    }
  }, [state, socket])

  /**
   * Join to carts room
   */
  useEffect(() => {
    if (!session.auth || session.loading) return
    socket.join(`carts_${session?.user?.id}`)
    socket.join(`orderoptions_${session?.user?.id}`)
    return () => {
      socket.leave(`carts_${session?.user?.id}`)
      socket.leave(`orderoptions_${session?.user?.id}`)
    }
  }, [socket, session])

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
    reorder,
    setAlert,
    setConfirm
  }

  const copyState = JSON.parse(JSON.stringify(state))

  return (
    <OrderContext.Provider value={[copyState, functions]}>
      {
        Alert && (
          <Alert
            open={alert.show}
            title={t('CART_ERROR', 'Cart error')}
            onAccept={() => setAlert({ show: false })}
            onClose={() => setAlert({ show: false })}
            content={alert.content}
          />
        )
      }
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
    changeDriverTip: warningMessage,
    reorder: warningMessage
  }
  return orderManager || [{}, functionsPlaceholders]
}
