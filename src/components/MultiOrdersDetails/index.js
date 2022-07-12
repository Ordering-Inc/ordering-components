import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'

/**
 * Component to manage Multi orders page behavior without UI component
 */
export const MultiOrdersDetails = (props) => {
  const {
    orderUuids,
    onRedirectPage,
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [ordersList, setOrdersList] = useState({ loading: true, error: null, orders: [] })
  const [totalPrice, setTotalPrice] = useState(null)

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
          where: [{ attribute: 'uuid', value: orderUuids }]
        }
      }
      const { content: { error, result } } = await ordering.setAccessToken(token).orders().get(options)
      setOrdersList({
        loading: false,
        orders: error ? [] : result,
        error: error ? result : null
      })
      if (!error) {
        const _totalPrice = result.reduce((total, order) => { return total + order?.summary?.total }, 0)
        setTotalPrice(_totalPrice)
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
    if (orderUuids.length) {
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
          paymentEvents={ordersList.orders[0]?.payment_events || []}
          totalPrice={totalPrice}
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
