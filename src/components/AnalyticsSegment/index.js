import React, { useEffect, useState } from 'react'
import { useEvent } from '../../contexts/EventContext'
import { AnalyticsBrowser } from '@segment/analytics-next'
import PropTypes from 'prop-types'

export const AnalyticsSegment = (props) => {
  const {
    writeKey,
    children
  } = props

  const [events] = useEvent()
  const [analytics, setAnalytics] = useState(undefined)

  const handleClickProduct = (product) => {
    analytics.track('Product Clicked', {
      id: product.id,
      name: product.name,
      category: product.category_id,
      price: product.price,
      featured: product.featured
    })
  }

  const handleProductAdded = (product) => {
    analytics.track('Product Added', {
      id: product.id,
      name: product.name,
      category: product.category_id,
      price: product.price,
      quantity: product.quantity
    })
  }

  const handleProductRemoved = (product) => {
    analytics.track('Product Removed', {
      id: product.id,
      name: product.name,
      category: product.category_id,
      price: product.price,
      quantity: product.quantity
    })
  }

  const handleOrderPlaced = (order) => {
    analytics.track('Order Placed', {
      id: order.id,
      affiliation: order.business?.name,
      revenue: order.total,
      tax: order.tax_total,
      shipping: order.delivery_zone_price
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
    analytics.track('Order Updated', {
      id: order.id,
      affiliation: order.business?.name,
      revenue: order.total,
      tax: order.tax_total,
      shipping: order.delivery_zone_price
    })
  }

  const handleAddOrder = (order) => {
    analytics.track('Order Added', {
      id: order.id,
      affiliation: order.business?.name,
      revenue: order.total,
      tax: order.tax_total,
      shipping: order.delivery_zone_price
    })
  }

  const handleLogin = (data) => {
    analytics.identify(data.id, {
      email: data.email,
      name: data.name
    })
  }

  const handleChangeView = (pageName) => {
    analytics.track('Page View', {
      page: pageName?.page
    })
  }

  useEffect(() => {
    if (analytics) {
      events.on('product_clicked', handleClickProduct)
      events.on('product_added', handleProductAdded)
      events.on('userLogin', handleLogin)
      events.on('order_placed', handleOrderPlaced)
      events.on('order_updated', handleUpdateOrder)
      events.on('order_added', handleAddOrder)
      events.on('cart_product_removed', handleProductRemoved)
      events.on('change_view', handleChangeView)
    }
    return () => {
      if (analytics) {
        events.off('product_clicked', handleClickProduct)
        events.off('product_added', handleProductAdded)
        events.off('userLogin', handleLogin)
        events.off('order_placed', handleOrderPlaced)
        events.off('order_updated', handleUpdateOrder)
        events.off('order_added', handleAddOrder)
        events.off('cart_product_removed', handleProductRemoved)
        events.off('change_view', handleChangeView)
      }
    }
  }, [analytics])

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
