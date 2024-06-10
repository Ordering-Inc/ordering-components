import React, { createContext, useContext, useState, useEffect } from 'react'
import { useSession } from '../SessionContext'
import { useApi } from '../ApiContext'
import { useWebsocket } from '../WebsocketContext'
import { useLanguage } from '../LanguageContext'
import { useEvent } from '../EventContext'
import { useConfig } from '../ConfigContext'
import { useCustomer } from '../CustomerContext'
import { ToastType, useToast } from '../ToastContext'
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
export const OrderProvider = ({ Alert, children, strategy, isAlsea, isDisableToast, franchiseId, isDisabledDefaultOpts, businessSlug, userAgent }) => {
  const [confirmAlert, setConfirm] = useState({ show: false })
  const [alert, setAlert] = useState({ show: false })
  const [ordering] = useApi()
  const socket = useWebsocket()
  const [languageState, t] = useLanguage()
  const [events] = useEvent()
  const [configState] = useConfig()
  const [session, { logout }] = useSession()
  const [customerState, { setUserCustomer }] = useCustomer()
  const [, { showToast }] = useToast()

  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)) || []

  const orderTypes = {
    delivery: 1,
    pickup: 2,
    eatin: 3,
    curbside: 4,
    drivethru: 5,
    catering_delivery: 7,
    catering_pickup: 8
  }

  const [state, setState] = useState({
    loading: true,
    options: isDisabledDefaultOpts
      ? { type: null, moment: null, city_id: null }
      : {
        type: orderTypes[configState?.configs?.default_order_type?.value],
        moment: null,
        city_id: null
      },
    carts: {},
    confirmAlert,
    alert
  })

  /**
   * Refresh order options and carts from API
   */
  const refreshOrderOptions = async () => {
    try {
      if (!state.loading) {
        setState({ ...state, loading: true })
      }
      const countryCodeFromLocalStorage = await strategy.getItem('country-code')
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const options = {}
      if (userCustomerId) {
        options.query = {
          user_id: userCustomerId
        }
      }
      if (franchiseId) {
        options.query = {
          ...options.query,
          franchise_id: franchiseId
        }
      }

      const countryCode = countryCodeFromLocalStorage && countryCodeFromLocalStorage !== state?.options?.address?.country_code
        ? countryCodeFromLocalStorage
        : state?.options?.address?.country_code

      if (countryCode) {
        options.headers = {
          'X-Socket-Id-X': socket?.getId(),
          'X-Country-Code-X': countryCode
        }
      }

      const res = await ordering.setAccessToken(session.token).orderOptions().get(options)
      const error = res?.content?.error
      const result = res?.content?.result

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

        if (!countryCodeFromLocalStorage && options?.address?.country_code) {
          await updateOrderOptions({ country_code: options?.address?.country_code })
        }
      }
      if (error) {
        setAlert({ show: true, content: result })
        if (res?.status === 401) {
          session.auth && logout()
        }
      }
      const localOptions = await strategy.getItem('options', true)
      if (localOptions) {
        const options = {}
        if (Object.keys(localOptions.address).length > 0) {
          const conditions = [
            { attribute: 'address', value: localOptions?.address?.address }
          ]
          const userId = userCustomerId || session.user.id
          const addressesResponse = await ordering.setAccessToken(session.token).users(userId).addresses().where(conditions).get()
          let address = addressesResponse.content.result.find(address => {
            localOptions.address.internal_number = localOptions.address?.internal_number || null
            localOptions.address.zipcode = localOptions.address?.zipcode || null
            localOptions.address.address_notes = localOptions.address?.address_notes || null

            return address?.location?.lat === localOptions?.address?.location.lat &&
              address?.location?.lng === localOptions?.address?.location?.lng &&
              address?.internal_number === localOptions?.address?.internal_number &&
              address?.zipcode === localOptions?.address?.zipcode &&
              address?.address_notes === localOptions?.address?.address_notes
          })
          if (!address) {
            Object.keys(localOptions.address).forEach(key => localOptions?.address?.[key] === null && delete localOptions?.address?.[key])
            const { content: { error, result } } = await ordering.setAccessToken(session.token).users(userId).addresses().save(localOptions.address)
            if (!error) {
              address = result
            }
          } else {
            await ordering.setAccessToken(session.token).users(userId).addresses(address.id).save({ default: true })
          }
          address && (options.address_id = address.id)
        }
        if (localOptions.type) {
          options.type = localOptions.type
        }
        if (localOptions.moment) {
          options.moment = dayjs.utc(localOptions.moment, 'YYYY-MM-DD HH:mm:ss').unix()
        }
        if (localOptions?.address_id) {
          options.address_id = localOptions?.address_id
        }
        if (localOptions?.city_id) {
          options.city_id = localOptions?.city_id
        }
        if (options && Object.keys(options).length > 0) {
          updateOrderOptions(options)
        } else {
          setState({ ...state, loading: false })
        }
        await strategy.removeItem('options')
      } else {
        setState({ ...state, loading: false })
      }
    } catch (err) {
      const message = err?.message?.includes('Internal error')
        ? 'INTERNAL_ERROR'
        : !err.message
          ? t('NETWORK_ERROR', 'Network error')
          : err.message
      setAlert({ show: true, content: [message] })
      setState({ ...state, loading: false })
    }
  }

  const checkAddress = (address) => {
    const props = ['address', 'address_notes', 'zipcode', 'location', 'internal_number']
    const values = []
    props.forEach(prop => {
      if (state.options?.address && state.options?.address?.[prop]) {
        if (prop === 'location') {
          values.push(address?.[prop]?.lat === state.options?.address?.[prop]?.lat &&
            address?.[prop]?.lng === state.options?.address?.[prop]?.lng)
        } else {
          values.push(address?.[prop] === state.options?.address?.[prop])
        }
      } else {
        values.push(!address?.[prop])
      }
    })
    return values.every(value => value)
  }

  /**
   * Change order address
   */
  const changeAddress = async (addressId, params) => {
    const isCountryCodeChanged = state.options?.address?.country_code !== params?.country_code
    if (typeof addressId === 'object') {
      const optionsStorage = await strategy.getItem('options', true)
      const options = {
        ...state.options,
        ...optionsStorage,
        address: {
          ...optionsStorage?.address,
          ...addressId
        }
      }
      if (!session.auth) {
        options.type = state?.options?.type
      }
      await strategy.setItem('options', options, true)
      setState({
        ...state,
        options
      })
      return
    }

    const _params = { country_code: params?.country_code }

    params?.type && (_params.type = params?.type)

    if (params && params?.address && !checkAddress(params?.address)) {
      _params.address_id = params?.address?.id
      await updateOrderOptions(_params)
      if (isCountryCodeChanged) {
        events.emit('country_code_changed', params?.country_code)
      }
      return
    }
    addressId && (_params.address_id = addressId)
    if (params && params?.isEdit) {
      if (addressId !== state.options.address_id) {
        return
      }
      await updateOrderOptions(_params)
      if (isCountryCodeChanged) {
        events.emit('country_code_changed', params?.country_code)
      }
      return
    }
    await updateOrderOptions(_params)
    if (isCountryCodeChanged) {
      events.emit('country_code_changed', params?.country_code)
    }
  }

  /**
   * Change order type
   */
  const changeType = async (type) => {
    const options = {
      ...state.options,
      type
    }
    if (state.options.type === type) {
      return
    }

    const cityId = state.options?.city_id
    const params = { type }

    if (cityId && type !== 2) {
      params.city_id = null
    }

    if (!session.auth) {
      const _options = { ...options, ...params }
      await strategy.setItem('options', _options, true)
      setState({
        ...state,
        options: _options
      })
    }

    updateOrderOptions(params)
  }

  /**
   * Change order moment
   */
  const changeMoment = async (moment) => {
    const momentUnix = moment ? moment.getTime() / 1000 : null
    const momentFormatted = momentUnix ? dayjs.unix(momentUnix).utc().format('YYYY-MM-DD HH:mm:ss') : null

    const options = {
      ...state.options,
      moment: momentFormatted
    }
    if (state.options.moment === momentFormatted) {
      return
    }

    if (!session.auth) {
      await strategy.setItem('options', options, true)
      setState({
        ...state,
        options
      })
    }

    updateOrderOptions({ moment: momentUnix })
  }

  /**
   * Change order city
   */
  const changeCityFilter = async (id) => {
    const options = {
      ...state.options,
      city_id: id
    }
    if (state.options.city_id === id) {
      return
    }

    if (!session.auth) {
      await strategy.setItem('options', options, true)
      setState({
        ...state,
        options
      })
    }

    updateOrderOptions({ city_id: id })
  }
  /**
   * Update order option data
   * @param {object} changes Changes to update order options
   */
  const updateOrderOptions = async (changes) => {
    if (session.auth) {
      const countryCodeFromLocalStorage = await strategy.getItem('country-code')
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const body = {
        ...changes,
        user_id: userCustomerId || session.user.id
      }
      try {
        setState({ ...state, loading: true })
        const options = {}
        state.loading = true
        options.headers = {
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        }
        const countryCode = changes?.country_code && changes?.country_code !== state?.options?.address?.country_code
          ? changes?.country_code
          : countryCodeFromLocalStorage ?? changes?.country_code ?? state?.options?.address?.country_code

        if (countryCode) {
          options.headers = {
            ...options.headers,
            'X-Country-Code-X': countryCode
          }
          await strategy.setItem('country-code', countryCode)
        }
        if (franchiseId) {
          options.query = {
            ...options.query,
            franchise_id: franchiseId
          }
        }
        if (body?.country_code) {
          delete body?.country_code
        }
        const { content: { error, result } } = await ordering
          .setAccessToken(session.token)
          .orderOptions()
          .save(body, options)
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
        state.loading = false
        return !error
      } catch (err) {
        const message = err?.message?.includes('Internal error')
          ? 'INTERNAL_ERROR'
          : err.message
        setAlert({ show: true, content: [message] })
        setState({ ...state, loading: false })
        state.loading = false
        return false
      }
    }
  }

  /**
   * Add product to cart
   * @param {object} product product for add
   * @param {object} cart cart of the product
   * @param {boolean} isQuickAddProduct option to add product when clicks
   */
  const addProduct = async (
    product,
    cart,
    isQuickAddProduct,
    isPlatformProduct = false
  ) => {
    try {
      setState({ ...state, loading: true })
      const countryCode = await strategy.getItem('country-code')
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      let body
      const headers = {
        'X-Socket-Id-X': socket?.getId(),
        'X-Country-Code-X': countryCode
      }
      if (!isPlatformProduct) {
        body = {
          product,
          business_id: cart.business_id,
          user_id: userCustomerId || session.user.id
        }
      } else {
        body = {
          platform_product: { ...product }
        }
      }

      const { content: { error, result } } = await ordering.setAccessToken(session.token).carts().addProduct(body, { headers })

      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
        events.emit('cart_product_added', product, result)
        if (product?.favorite) {
          events.emit('wishlist_product_added_to_cart', product, result)
        }
        events.emit('cart_updated', result)
        events.emit('product_added', product, result)
        isQuickAddProduct && !isDisableToast && showToast(ToastType.Success, t('PRODUCT_ADDED_NOTIFICATION', 'Product _PRODUCT_ added succesfully').replace('_PRODUCT_', product.name))
      } else {
        setAlert({ show: true, content: result })
      }
      setState({ ...state, loading: false })
      if (isPlatformProduct) {
        return { error, result }
      } else {
        return !error
      }
    } catch (err) {
      setState({ ...state, loading: false })
      if (isPlatformProduct) {
        return { error: true, result: err.message }
      } else {
        return false
      }
    }
  }

  /**
   * Add multi products to cart / (domino's)
   * @param {object} product product for add
   * @param {object} cart cart of the product
   * @param {boolean} isQuickAddProduct option to add product when clicks
   */
  const addMultiProduct = async (
    product,
    cart,
    isQuickAddProduct
  ) => {
    try {
      setState({ ...state, loading: true })
      const countryCode = await strategy.getItem('country-code')
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const headers = {
        'X-Socket-Id-X': socket?.getId(),
        'X-Country-Code-X': countryCode
      }
      const body = {
        products: JSON.stringify(product),
        business_id: cart.business_id,
        user_id: userCustomerId || session.user.id
      }
      const response = await fetch(`${ordering.root}/carts/multi_product`, {
        method: 'POST',
        body: JSON.stringify({
          ...body,
          products: JSON.stringify([product])
        }),
        headers: {
          ...headers,
          Authorization: `Bearer ${session.token}`,
          'Content-Type': 'application/json'
        }
      })
      const { result, error } = await response.json()
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
        events.emit('cart_product_added', product, result)
        if (product?.favorite) {
          events.emit('wishlist_product_added_to_cart', product, result)
        }
        events.emit('cart_updated', result)
        events.emit('product_added', product, result)
        isQuickAddProduct && !isDisableToast && showToast(ToastType.Success, t('PRODUCT_ADDED_NOTIFICATION', 'Product _PRODUCT_ added succesfully').replace('_PRODUCT_', product.name))
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
  const removeProduct = async (product, cart) => {
    try {
      setState({ ...state, loading: true })
      const countryCode = await strategy.getItem('country-code')
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const body = {
        product: {
          id: product.id,
          code: product.code,
          business_id: product.business_id
        },
        business_id: cart.business_id,
        user_id: userCustomerId || session.user.id
      }
      const { content: { error, result } } = await ordering.setAccessToken(session.token).carts().removeProduct(body, {
        headers: {
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId(),
          'X-Country-Code-X': countryCode
        }
      })
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
  const clearCart = async (uuid, configurations = {}) => {
    try {
      setState({ ...state, loading: !configurations?.disableLoading })
      const countryCode = await strategy.getItem('country-code')
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const body = JSON.stringify({
        uuid,
        user_id: userCustomerId || session.user.id
      })
      const response = await fetch(`${ordering.root}/carts/clear`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`,
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId(),
          'X-Country-Code-X': countryCode
        },
        body
      })
      const { error, result } = await response.json()
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
      } else {
        setAlert({ show: true, content: result })
      }
      setState({ ...state, loading: false })
      return { error, result }
    } catch (err) {
      setState({ ...state, loading: false })
      return false
    }
  }

  /**
   * Update product to cart
   */
  const updateProduct = async (product, cart, isQuickAddProduct) => {
    try {
      setState({ ...state, loading: true })
      const countryCode = await strategy.getItem('country-code')
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const body = {
        product,
        business_id: cart.business_id,
        user_id: userCustomerId || session.user.id
      }
      const { content: { error, result } } = await ordering.setAccessToken(session.token).carts().updateProduct(body, {
        headers: {
          'X-Socket-Id-X': socket?.getId(),
          'X-Country-Code-X': countryCode
        }
      })
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
        events.emit('cart_product_updated', product, result)
        events.emit('cart_updated', result)
        isQuickAddProduct && !isDisableToast && showToast(ToastType.Success, t('PRODUCT_UPDATED_NOTIFICATION', 'Product _PRODUCT_ updated succesfully').replace('_PRODUCT_', product.name))
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
  const applyCoupon = async (couponData, customParams) => {
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
      const countryCode = await strategy.getItem('country-code')
      if (customParams && isAlsea) {
        const response = await fetch('https://alsea-plugins.ordering.co/alseaplatform/vcoupon2.php', {
          method: 'POST',
          body: JSON.stringify({
            userId: customParams.userId,
            businessId: customParams.businessId,
            couponId: couponData.coupon
          }),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
            'X-App-X': ordering.appId,
            'X-Socket-Id-X': socket?.getId(),
            'X-Country-Code-X': countryCode
          }
        })
        const result = await response.json()

        if (result.message !== 'Cup\u00f3n v\u00e1lido') {
          setAlert({ show: true, content: result.message === 'Not found' ? ['ERROR_INVALID_COUPON'] : [result.message] })
          setState({ ...state, loading: false })
          return
        }
      }
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const body = {
        business_id: couponData.business_id,
        coupon: couponData.coupon,
        user_id: userCustomerId || session.user.id
      }
      const { content } = await ordering
        .setAccessToken(session.token)
        .carts()
        .applyCoupon(body, {
          headers: {
            'X-App-X': ordering.appId,
            'X-Socket-Id-X': socket?.getId(),
            'X-Country-Code-X': countryCode
          }
        })
      const result = content
      if (!result.error) {
        state.carts[`businessId:${result.result.business_id}`] = result.result
        events.emit('cart_updated', result.result)
      } else {
        setAlert({ show: true, content: result.result })
      }
      setState({ ...state, loading: false })
      return !result.error
    } catch (err) {
      setState({ ...state, loading: false })
      return false
    }
  }

  const applyOffer = async (offerData) => {
    if (!offerData.business_id) {
      throw new Error('`business_id` is required.')
    }
    if (typeof offerData.coupon === 'undefined') {
      throw new Error('`coupon` is required.')
    }
    try {
      setState({ ...state, loading: true })
      const countryCode = await strategy.getItem('country-code')
      const response = await fetch(`${ordering.root}/carts/add_offer`, {
        method: 'POST',
        body: JSON.stringify({
          user_id: offerData.userId,
          business_id: offerData.business_id,
          coupon: offerData.coupon,
          force: offerData.force ?? false
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`,
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId(),
          'X-Country-Code-X': countryCode
        }
      })
      const result = await response.json()
      if (!result.error) {
        state.carts[`businessId:${result.result.business_id}`] = result.result
        events.emit('cart_updated', result.result)
        events.emit('offer_applied', { ...result.result, ...offerData })
      } else {
        setAlert({ show: true, content: result.result })
        events.emit('offer_denied', { ...offerData, reason: result.result })
      }
      setState({ ...state, loading: false })
      return !result.error
    } catch (err) {
      setState({ ...state, loading: false })
      return false
    }
  }

  const removeOffer = async (offerData) => {
    if (!offerData.business_id) {
      throw new Error('`business_id` is required.')
    }
    if (typeof offerData.offer_id === 'undefined') {
      throw new Error('`offer_id` is required.')
    }
    try {
      const countryCode = await strategy.getItem('country-code')
      setState({ ...state, loading: true })
      const offerRemoveData = {
        business_id: offerData.business_id,
        offer_id: offerData.offer_id
      }
      if (offerData.user_id) offerRemoveData.user_id = offerData.user_id
      const response = await fetch(`${ordering.root}/carts/remove_offer`, {
        method: 'POST',
        body: JSON.stringify(offerRemoveData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`,
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId(),
          'X-Country-Code-X': countryCode
        }
      })
      const result = await response.json()
      if (!result.error) {
        state.carts[`businessId:${result.result.business_id}`] = result.result
        events.emit('cart_updated', result.result)
        events.emit('offer_removed', offerData)
      } else {
        setAlert({ show: true, content: result.result })
      }
      setState({ ...state, loading: false })
      return !result.error
    } catch (err) {
      setState({ ...state, loading: false })
      return false
    }
  }

  /**
   * Apply coupon to cart
   */
  const changeDriverTip = async (businessId, driverTipRate = 0, isFixedPrice) => {
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
      const countryCode = await strategy.getItem('country-code')
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const body = {
        business_id: businessId,
        [isFixedPrice ? 'driver_tip' : 'driver_tip_rate']: driverTipRate,
        user_id: userCustomerId || session.user.id
      }
      const { content: { error, result } } = await ordering.setAccessToken(session.token).carts().changeDriverTip(body, {
        headers: {
          'X-Socket-Id-X': socket?.getId(),
          'X-Country-Code-X': countryCode
        }
      })
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
   * Change payment method
   */
  const changePaymethod = async (businessId, paymethodId, paymethodData) => {
    if (!businessId) {
      throw new Error('`businessId` is required.')
    }
    if (!paymethodId) {
      throw new Error('`paymethodId` is required.')
    }
    if (!paymethodData) {
      throw new Error('`paymethodData` is required.')
    }
    if (!state.carts[`businessId:${businessId}`] || state.carts[`businessId:${businessId}`]?.paymethodId === paymethodId) {
      return
    }
    try {
      setState({ ...state, loading: true })
      const countryCode = await strategy.getItem('country-code')
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const body = {
        business_id: businessId,
        paymethod_id: paymethodId,
        paymethod_data: paymethodData,
        user_id: userCustomerId ?? session.user.id
      }
      const { content: { error, result } } = await ordering.setAccessToken(session.token).carts().changePaymethod(body, {
        headers: {
          'X-Socket-Id-X': socket?.getId(),
          'X-Country-Code-X': countryCode
        }
      })
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
        events.emit('cart_updated', result)
      }
      setState({ ...state, loading: false })
      return !error
    } catch (err) {
      refreshOrderOptions()
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
      const countryCode = await strategy.getItem('country-code')
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const body = {
        ...data,
        user_id: userCustomerId || session.user.id
      }
      let headers = {
        'X-Socket-Id-X': socket?.getId(),
        'X-Country-Code-X': countryCode
      }
      if (userAgent) {
        headers = { ...headers, 'User-Agent': userAgent }
      }
      const { content: { error, result } } = await ordering.setAccessToken(session.token).carts(cardId).place(body, { headers: headers })
      if (!error) {
        if (result.status !== 1) {
          state.carts[`businessId:${result.business_id}`] = result
          events.emit('cart_updated', result)
        } else {
          delete state.carts[`businessId:${result.business_id}`]
          const orderObject = {
            id: result.order.uuid,
            business: { name: result.business.name },
            total: result.total,
            tax_total: result.tax,
            delivery_zone_price: result.delivery_price,
            business_id: result.business_id,
            paymethod: result.paymethod_data.gateway
          }
          events.emit('order_placed', orderObject)
        }
      } else {
        setAlert({ show: true, content: result })
        setState({ ...state, loading: false })
        return
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
   * Place multi carts
   */
  const placeMultiCarts = async (data, cartUuid) => {
    try {
      setState({ ...state, loading: true })
      const countryCode = await strategy.getItem('country-code')
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const body = {
        ...data,
        user_id: userCustomerId || session.user.id
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${session.token}`,
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId(),
          'X-Country-Code-X': countryCode
        },
        body: JSON.stringify(body)
      }

      const response = await fetch(`${ordering.root}/cart_groups/${cartUuid}/place`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        result.carts.forEach(cart => {
          delete state.carts[`businessId:${cart.business_id}`]
          const orderObject = {
            id: cart.uuid,
            business: { name: cart.business.name },
            total: cart.total,
            tax_total: cart.tax,
            delivery_zone_price: cart.delivery_price,
            business_id: cart.business_id
          }
          events.emit('order_placed', orderObject)
        })
      } else {
        setAlert({ show: true, content: result })
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
      const countryCode = await strategy.getItem('country-code')
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const body = {
        ...data,
        user_id: userCustomerId || session.user.id
      }
      let fetchurl
      if (body.user_id === userCustomerId || data) {
        fetchurl = await ordering.setAccessToken(session.token).carts(cardId).confirmWithData(body, {
          headers: {
            'X-App-X': ordering.appId,
            'X-Socket-Id-X': socket?.getId(),
            'X-Country-Code-X': countryCode
          }
        })
      } else {
        fetchurl = await ordering.setAccessToken(session.token).carts(cardId).confirm(body, {
          headers: {
            'X-App-X': ordering.appId,
            'X-Socket-Id-X': socket?.getId(),
            'X-Country-Code-X': countryCode
          }
        })
      }
      const { content: { error, result, cart } } = fetchurl
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
 * Confirm multi carts
 */
  const confirmMultiCarts = async (cartUuid) => {
    try {
      setState({ ...state, loading: true })
      const countryCode = await strategy.getItem('country-code')
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${session.token}`,
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId(),
          'X-Country-Code-X': countryCode
        }
      }
      const response = await fetch(`${ordering.root}/cart_groups/${cartUuid}/confirm`, requestOptions)
      const { result, error } = await response.json()
      if (!error) {
        result.carts.forEach(cart => {
          if (result.status !== 'completed') {
            state.carts[`businessId:${cart.business_id}`] = result
            events.emit('cart_updated', result)
          } else {
            delete state.carts[`businessId:${cart.business_id}`]
          }
        })
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
  const reorder = async (orderId, offAlert, configurations = {}) => {
    try {
      setState({ ...state, loading: !configurations?.disableLoading })
      const countryCode = await strategy.getItem('country-code')
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const query = userCustomerId
        ? { user_id: userCustomerId }
        : null
      const options = {
        headers: {
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId(),
          'X-Country-Code-X': countryCode
        }
      }
      if (query) {
        options.query = query
      }
      const { content: { error, result } } = await ordering.setAccessToken(session.token).orders(orderId).reorder(options)
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
        events.emit('cart_added', result)
      } else if (!offAlert) {
        setAlert({ show: true, content: result })
      }
      setState({ ...state, loading: false })
      return { error, result }
    } catch (err) {
      setState({ ...state, loading: false })
      return { error: true, result: [err.message] }
    }
  }

  const setOptionFromLocalStorage = async () => {
    const optionsLocalStorage = await strategy.getItem('options', true)
    setState({
      ...state,
      loading: false,
      options: isDisabledDefaultOpts
        ? { type: null, moment: null }
        : {
          type: optionsLocalStorage?.type || orderTypes[configState?.configs?.default_order_type?.value],
          moment: optionsLocalStorage?.moment || null,
          address: optionsLocalStorage?.address || state?.options?.address || {},
          city_id: optionsLocalStorage?.city_id || null
        }
    })
  }

  /**
  * get Latest past Order that has no review
  */
  const getLastOrderHasNoReview = async () => {
    if (session?.token) {
      const pastOrderTypes = [1, 2, 5, 6, 10, 11, 12, 15, 16, 17]
      const where = [{ attribute: 'status', value: pastOrderTypes }]
      if (franchiseId) {
        where.push({
          attribute: 'ref_business',
          conditions: [
            {
              attribute: 'franchise_id',
              value: {
                condition: '=',
                value: franchiseId
              }
            }
          ]
        })
      }
      if (typeof businessSlug === 'number' && businessSlug) {
        where.push({
          attribute: 'ref_business',
          conditions: [
            {
              attribute: 'id',
              value: {
                condition: '=',
                value: businessSlug
              }
            }
          ]
        })
      }
      if (typeof businessSlug === 'string' && businessSlug) {
        where.push({
          attribute: 'ref_business',
          conditions: [
            {
              attribute: 'slug',
              value: {
                condition: '=',
                value: businessSlug
              }
            }
          ]
        })
      }
      const options = {
        query: {
          orderBy: '-delivery_datetime',
          page: 1,
          page_size: 10,
          where
        }
      }
      const { content: { result, error } } = await ordering.setAccessToken(session?.token).orders().get(options)

      if (!error && result?.length > 0) {
        const _noRviewOrder = result?.find(order => !order?.review)
        if (_noRviewOrder?.cart_group_id) {
          where.push({ attribute: 'cart_group_id', value: _noRviewOrder?.cart_group_id })
          const options = {
            query: {
              where,
              page: 1,
              page_size: 10
            }
          }
          const { content: { result, error } } = await ordering.setAccessToken(session?.token).orders().get(options)
          if (!error) {
            const noReviewOrders = result.filter(order => !order?.review)
            return noReviewOrders
          } else {
            return null
          }
        } else {
          return _noRviewOrder
        }
      } else {
        return null
      }
    } else {
      return null
    }
  }

  const setStateValues = (values) => {
    setState({ ...state, ...values })
  }

  const setUserCustomerOptions = async (params) => {
    setState({ ...state, loading: true })
    const options = params.options ?? {}
    await setUserCustomer(params.customer ?? {}, true)
    await updateOrderOptions(options)
    setState({ ...state, loading: false })
  }

  const handleOrderStateLoading = (loading) => {
    setState({
      ...state,
      loading
    })
  }

  const handleLogEvent = async (events) => {
    try {
      const countryCode = await strategy.getItem('country-code')
      const headers = {
        'X-Socket-Id-X': socket?.getId(),
        'X-Country-Code-X': countryCode
      }
      await fetch(`${ordering.root}/tracking_events`, {
        body: JSON.stringify({
          events
        }),
        headers: {
          ...headers,
          Authorization: `Bearer ${session.token}`,
          'Content-Type': 'application/json'
        }
      })
    } catch (err) {}
  }

  useEffect(() => {
    if (session.loading || languageState.loading) return
    if (session.auth) {
      refreshOrderOptions()
    }
  }, [session.auth, session.loading, languageState.loading])

  useEffect(() => {
    if (session.loading || configState.loading) return
    if (!session.auth) {
      setOptionFromLocalStorage()
    }
  }, [session.auth, session.loading, configState])

  useEffect(() => {
    if (configTypes?.length > 0 && state.options.type && !configTypes.includes(state.options.type)) {
      const validDefaultValue = configTypes.includes(configState?.configs?.default_order_type?.type)
      updateOrderOptions(validDefaultValue ? { type: configState?.configs?.default_order_type?.type } : { type: configTypes[0] })
      if (!session.auth && !state?.loading) {
        changeType(validDefaultValue ? configState?.configs?.default_order_type?.type : configTypes[0])
      }
    }
  }, [configTypes?.length, state.options.type])
  /**
   * Update carts from sockets
   */
  useEffect(() => {
    const handleCartUpdate = (cart) => {
      if (!isDisableToast) {
        showToast(ToastType.Info, t('UPDATING_CART_INFO', 'Updating cart information...'))
      }

      if (cart.status === 1) {
        if (state.carts[`businessId:${cart.business_id}`]) {
          delete state.carts[`businessId:${cart.business_id}`]
        }
      } else {
        const cartFinded = Object.values(state.carts).find(_cart => _cart?.uuid === cart?.uuid)
        const oldBusinessId = cartFinded?.business_id
        const newBusinessId = cart?.business_id

        if (!oldBusinessId || oldBusinessId === newBusinessId) {
          state.carts[`businessId:${cart.business_id}`] = {
            ...state.carts[`businessId:${cart.business_id}`],
            ...cart
          }
        } else {
          delete state.carts[`businessId:${oldBusinessId}`]
          state.carts[`businessId:${newBusinessId}`] = cart
        }
      }
    }
    const handleOrderOptionUpdate = ({ carts, ...options }) => {
      if (!isDisableToast) {
        showToast(ToastType.Info, t('UPDATING_ORDER_OPTIONS', 'Updating order options...'))
      }

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
      setState({ ...newState, loading: false })
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
    socket.join(`carts_${customerState?.user?.id || session?.user?.id}`)
    socket.join(`orderoptions_${customerState?.user?.id || session?.user?.id}`)
    return () => {
      socket.leave(`carts_${customerState?.user?.id || session?.user?.id}`)
      socket.leave(`orderoptions_${customerState?.user?.id || session?.user?.id}`)
    }
  }, [socket, session.auth, session.loading, customerState?.user?.id, session?.user?.id])

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
    applyOffer,
    removeOffer,
    changeDriverTip,
    placeCart,
    confirmCart,
    reorder,
    setAlert,
    setConfirm,
    changePaymethod,
    setUserCustomerOptions,
    setStateValues,
    placeMultiCarts,
    getLastOrderHasNoReview,
    changeCityFilter,
    confirmMultiCarts,
    addMultiProduct,
    handleOrderStateLoading,
    handleLogEvent
  }

  const copyState = JSON.parse(JSON.stringify(state))

  return (
    <OrderContext.Provider value={[copyState, functions]}>
      {
        Alert && (
          <Alert
            open={alert.show}
            title={alert.title || t('ERROR', 'Error')}
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
    reorder: warningMessage,
    changePaymethod: warningMessage,
    setStateValues: warningMessage,
    getLastOrderHasNoReview: warningMessage
  }
  return orderManager || [{}, functionsPlaceholders]
}
