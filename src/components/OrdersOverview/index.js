import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components'

export const OrdersOverview = (props) => {
  const { UIComponent } = props

  const [ordering] = useApi()
  const requestsState = {}

  /**
   * Get token session
   */
  const [{ token }] = useSession()

  /**
   * Object to save pending orders
   */
  const [ordersOverviewStatus, setOrdersOverviewStatus] = useState({
    loading: true,
    overview: {},
    error: null
  })

  /**
   * Method to get total, pending, in progress, completed and cacelled orders quantity from Result
   */
  const getOrdersStatusQuantity = (result) => {
    let _totalQuantity = 0
    let _pendingQuantity = 0
    let _inProgressQuantity = 0
    let _completedQuantity = 0
    let _cancelledQuantity = 0
    for (const order of result) {
      _totalQuantity += order.quantity
      if (order.status === 0) {
        _pendingQuantity += order.quantity
      }
      if (
        order.status === 3 ||
        order.status === 4 ||
        order.status === 7 ||
        order.status === 8 ||
        order.status === 9
      ) {
        _inProgressQuantity += order.quantity
      }
      if (order.status === 1 || order.status === 11) {
        _completedQuantity += order.quantity
      }
      if (
        order.status === 2 ||
        order.status === 5 ||
        order.status === 6 ||
        order.status === 10 ||
        order.status === 12
      ) {
        _cancelledQuantity += order.quantity
      }
    }
    return {
      total: _totalQuantity,
      pending: _pendingQuantity,
      inProgress: _inProgressQuantity,
      completed: _completedQuantity,
      cancelled: _cancelledQuantity
    }
  }

  /**
   * Method to get orders of selected driver from API
   */
  const getOrdersOverview = async () => {
    try {
      const source = {}
      requestsState.ordersOverview = source
      const { content: { result } } = await ordering.setAccessToken(token).orders().summary({ cancelToken: source })
      const _result = getOrdersStatusQuantity(result)
      setOrdersOverviewStatus({
        ...ordersOverviewStatus,
        overview: _result,
        loading: false
      })
    } catch (error) {
      setOrdersOverviewStatus({
        ...ordersOverviewStatus,
        loading: false,
        error
      })
    }
  }

  useEffect(() => {
    getOrdersOverview()

    return () => {
      if (requestsState.ordersOverview) {
        requestsState.ordersOverview.cancel()
      }
    }
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent {...props} ordersOverviewList={ordersOverviewStatus} />
      )}
    </>
  )
}

OrdersOverview.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

OrdersOverview.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
