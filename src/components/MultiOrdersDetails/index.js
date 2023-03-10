import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'

/**
 * Component to manage Multi orders page behavior without UI component
 */
export const MultiOrdersDetails = (props) => {
  const {
    orderId,
    userId,
    onRedirectPage,
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [ordersList, setOrdersList] = useState({ loading: true, error: null, orders: [] })
  const [ordersSummary, setOrdersSummary] = useState({})

  const formatPaymentEvents = (payments) => {
    const list = [].concat(...payments)

    const uniqueArr = []
    const uniqueObj = {}

    list.forEach((item) => {
      if (!uniqueObj[item?.wallet_event?.id]) {
        uniqueObj[item?.wallet_event?.id] = true
        uniqueArr.push(item)
      }
    })

    return uniqueArr ?? []
  }

  /**
   * Get orders from API
   */
  const getOrders = async () => {
    try {
      setOrdersList({
        ...ordersList,
        loading: true
      })
      const options = {
        query: {
          orderBy: '-',
          where: [{ attribute: 'cart_group_id', value: orderId }]
        }
      }
      if (userId) {
        options.query.mode = 'dashboard'
      }
      const { content: { error, result } } = await ordering.setAccessToken(token).orders().get(options)
      setOrdersList({
        loading: false,
        orders: error ? [] : result,
        error: error ? result : null
      })
      if (!error) {
        const _total = result.reduce((total, order) => { return total + order?.summary?.total }, 0)
        const _subtotal = result.reduce((subtotal, order) => { return subtotal + order?.summary?.subtotal }, 0)
        const _tax = result.reduce((tax, order) => { return tax + order?.summary?.tax }, 0)
        setOrdersSummary({
          total: _total,
          subtotal: _subtotal,
          tax: _tax
        })
      }
    } catch (err) {
      setOrdersList({
        ...ordersList,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    if (orderId) {
      getOrders()
    } else {
      onRedirectPage && onRedirectPage()
    }
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          ordersList={ordersList}
          customer={ordersList.orders[0]?.customer}
          paymentEvents={formatPaymentEvents(ordersList.orders.map(order => order?.payment_events) || [])}
          ordersSummary={ordersSummary}
        />
      )}
    </>
  )
}

MultiOrdersDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}
