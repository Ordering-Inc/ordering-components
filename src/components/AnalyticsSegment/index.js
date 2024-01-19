import React, { useEffect, useState } from 'react'
import { useEvent } from '../../contexts/EventContext'
import { AnalyticsBrowser } from '@segment/analytics-next'
import PropTypes from 'prop-types'

export const AnalyticsSegment = (props) => {
  const {
    writeKey,
    children,
    customData,
    debugMode
  } = props

  const [events] = useEvent()
  const [analytics, setAnalytics] = useState(undefined)

  const handleClickProduct = (product) => {
    if (debugMode) console.log('Segment Product Clicked', product)
    analytics.track('Product Clicked', {
      id: product.id,
      name: product.name,
      category: product.category_id,
      price: product.price
    })
  }

  const handleClickPromotionProduct = (product, featured) => {
    if (debugMode) console.log('Promotion Clicked', product)
    analytics.track('Promotion Clicked', {
      id: product.id,
      name: product.name,
      category: product.category_id,
      price: product.price
    })
  }

  const handleProductAdded = (product) => {
    if (debugMode) console.log('Segment Product Added', product)
    analytics.track('Product Added', {
      id: product.id,
      name: product.name,
      category: product.category_id,
      price: product.price,
      quantity: product.quantity
    })
  }

  const handleProductRemoved = (product) => {
    if (debugMode) console.log('Segment Product Removed', product)
    analytics.track('Product Removed', {
      id: product.id,
      name: product.name,
      category: product.category_id,
      price: product.price,
      quantity: product.quantity
    })
  }

  const handleOrderPlaced = (order) => {
    if (debugMode) console.log('Segment Order Placed', order)
    analytics.track('Order Placed', {
      total: order?.total,
      business_id: order?.business_id,
      customer_email: order?.customer?.email,
      customer_phone: order?.customer?.cellphone,
      coupon: order?.coupon || 'NA',
      coupon_price: order?.offer || 'NA',
      marca: order?.app_id,
      nombre_de_la_tienda: order?.business?.name,
      order: order?.id,
      products: order?.products
    })
    analytics.track('Payment Info Entered', {
      order: order.id,
      business: order.business?.name,
      business_id: order.business_id,
      total: order.total,
      tax: order.tax_total,
      delivery: order.delivery_zone_price,
      paymethod: order.paymethod
    })
  }

  const handleUpdateOrder = (order) => {
    if (debugMode) console.log('Segment Order Updated', order)
    analytics.track('Order Updated', {
      id: order.id,
      affiliation: order.business?.name,
      revenue: order.total,
      tax: order.tax_total,
      shipping: order.delivery_zone_price
    })
  }

  const handleAddOrder = (order) => {
    if (debugMode) console.log('Segment Order Added', order)
    analytics.track('Order Added', {
      id: order.id,
      affiliation: order.business?.name,
      revenue: order.total,
      tax: order.tax_total,
      shipping: order.delivery_zone_price
    })
  }

  const handleLogin = (data) => {
    if (debugMode) console.log('Segment Login', data)
    analytics.identify(data.id, {
      email: data.email,
      name: data.name
    })
  }

  const handleCategorySelect = (data) => {
    if (debugMode) console.log('Category Clicked', data)
    analytics.track('Category Clicked', {
      category: data?.params?.category.name
    })
  }

  const handleInCheckout = (data) => {
    if (debugMode) console.log('Checkout Started', data)
    analytics.track('Checkout Started', {
      nombre_de_la_tienda: data?.business?.name,
      total: data?.total,
      products: data?.products
    })
  }

  const handleGoToBusiness = (storeData) => {
    if (storeData?.params?.store !== ':store' && storeData?.params?.store !== 'undefined') {
      if (debugMode) console.log('Abrir negocio', storeData)
      analytics.track('Abrir negocio', {
        restaurant: storeData?.params?.store
      })
    }
  }

  const handleDeUnaEvents = (deUna) => {
    if (debugMode) console.log(deUna)
    analytics.track(deUna.event, deUna?.data ?? 'NA')
  }

  useEffect(() => {
    if (analytics && !customData) {
      events.on('product_clicked', handleClickProduct)
      events.on('product_added', handleProductAdded)
      events.on('userLogin', handleLogin)
      events.on('order_placed', handleOrderPlaced)
      events.on('order_updated', handleUpdateOrder)
      // events.on('order_added', handleAddOrder)
      events.on('cart_product_removed', handleProductRemoved)
      events.on('category_selected', handleCategorySelect)
      events.on('product_promotion_clicked', handleClickPromotionProduct)
      events.on('in-checkout', handleInCheckout)
      events.on('go_to_business', handleGoToBusiness)
      events.on('deuna_checkout', handleDeUnaEvents)
      events.on('deuna_checkout_completed', handleDeUnaEvents)
      events.on('deuna_checkout_failed_launch', handleDeUnaEvents)
      events.on('deuna_checkout_callback_close', handleDeUnaEvents)
      events.on('deuna_checkout_tokenize_error', handleDeUnaEvents)
      events.on('deuna_vault_completed', handleDeUnaEvents)
      events.on('deuna_vault_failed', handleDeUnaEvents)
      events.on('deuna_vault_close', handleDeUnaEvents)
    }
    if (!customData || !analytics) return
    const { type, data } = customData
    switch (type) {
      case 'Aplicar Cupon':
        if (debugMode) console.log('Segment Aplicar Cupon', data)
        analytics.track('Aplicar Cupon', {
          id: data.id,
          name: data.name
        })
        break
      case 'Calificar Orden':
        if (debugMode) console.log('Segment Calificar Orden', data)
        analytics.track('Calificar Orden', {
          business_id: data.business_id,
          order_id: data.order_id,
          user_id: data.user_id
        })
        break
      case 'Abrir banner':
        if (debugMode) console.log('Segment Abrir banner', data)
        analytics.track('Abrir banner', {
          type: data.type,
          brand: data.brand
        })
        break
      case 'Abrir negocio':
        if (debugMode) console.log('Segment Abrir negocio', data)
        analytics.track('Abrir negocio', {
          id: data.id,
          name: data.name
        })
        break
      default:
        break
    }
    return () => {
      if (analytics) {
        events.off('product_clicked', handleClickProduct)
        events.off('product_added', handleProductAdded)
        events.off('userLogin', handleLogin)
        events.off('order_placed', handleOrderPlaced)
        events.off('order_updated', handleUpdateOrder)
        // events.off('order_added', handleAddOrder)
        events.off('cart_product_removed', handleProductRemoved)
        events.off('category_selected', handleCategorySelect)
        events.off('product_promotion_clicked', handleClickPromotionProduct)
        events.off('in-checkout', handleInCheckout)
        events.off('go_to_business', handleGoToBusiness)
        events.off('deuna_checkout', handleDeUnaEvents)
        events.off('deuna_checkout_completed', handleDeUnaEvents)
        events.off('deuna_checkout_failed_launch', handleDeUnaEvents)
        events.off('deuna_checkout_callback_close', handleDeUnaEvents)
        events.off('deuna_checkout_tokenize_error', handleDeUnaEvents)
        events.off('deuna_vault_completed', handleDeUnaEvents)
        events.off('deuna_vault_failed', handleDeUnaEvents)
        events.off('deuna_vault_close', handleDeUnaEvents)
      }
    }
  }, [analytics, customData])

  useEffect(() => {
    const loadAnalytics = async () => {
      const [response] = await AnalyticsBrowser.load({ writeKey })
      setAnalytics(response)
    }
    loadAnalytics()
  }, [writeKey])

  return (
    <>
      {children}
    </>
  )
}

AnalyticsSegment.propTypes = {
  /**
   * Your Segment Write Key
   * @see writeKey What is Write Key ? https://segment.com/docs/getting-started/02-simple-install/#find-your-write-key
   */
  writeKey: PropTypes.string.isRequired
}

AnalyticsSegment.defaultProps = {}
