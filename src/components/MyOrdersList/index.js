import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'

export const MyOrdersList = (props) => {
  const {
    status,
    ordering,
    UIComponent
  } = props

  /**
   * Get token from context
   */
  const [{ token }] = useSession()
  /**
   * Variable to save orders array
   */
  const [orders, setOrders] = useState([])

  /**
   * Method to get orders from API
   */
  const getOrders = async () => {
    const { content: { result } } = await ordering.setAccessToken(token).orders().where([
      { attribute: 'status', value: status }
    ]).get()
    setOrders(result)
  }

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          orders={orders}
        />
      )}
    </>
  )
}

MyOrdersList.propTypes = {
  /**
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  ordering: PropTypes.object.isRequired,
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Flag to change order card type [active, past]
   */
  orderType: PropTypes.oneOf(['active', 'previous']).isRequired,
  /**
   * array that must be containt order status
   */
  status: PropTypes.arrayOf(PropTypes.number).isRequired,
  /**
   * This must be contain array of orders
   */
  orders: PropTypes.arrayOf(PropTypes.object),
  /**
   * Components types before my orders list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after my orders list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before my orders list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after my orders list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

MyOrdersList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
