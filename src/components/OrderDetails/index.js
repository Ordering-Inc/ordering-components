import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

export const OrderDetails = (props) => {
  const {
    orderId,
    asDashboard,
    UIComponent
  } = props

  const [{ user, token, loading }] = useSession()
  const [ordering] = useApi()
  const [orderState, setOrderState] = useState({ order: null, loading: !props.order, error: null })
  const [messageErrors, setMessageErrors] = useState({ status: null, loading: false, error: null })
  const socket = useWebsocket()

  /**
   * Method to format a price number
   * @param {Number} price
   */
  const formatPrice = price => `$ ${price.toFixed(2)}`

  /**
   * Method to send a message
   * @param {string} spot
   */
  const sendMessage = async (spot) => {
    try {
      setMessageErrors({
        ...messageErrors,
        loading: true
      })
      const { status } = await fetch(`${ordering.root}/orders/${orderState.order?.id}/messages`, {
        method: 'post',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          can_see: '0,2,3',
          comment: `I am on the parking number: ${spot}`,
          order_id: orderState.order?.id,
          type: 2
        })
      })
      setMessageErrors({
        ...messageErrors,
        loading: false,
        status
      })
    } catch (e) {
      setMessageErrors({
        ...messageErrors,
        loading: false,
        error: [e.message]
      })
    }
  }

  /**
   * handler send message with spot info
   * @param {number} param0
   */
  const handlerSubmitSpotNumber = ({ spot }) => {
    sendMessage(spot)
  }

  /**
   * Method to get order from API
   */
  const getOrder = async () => {
    try {
      const functionFetch = asDashboard
        ? ordering.setAccessToken(token).orders(orderId).asDashboard()
        : ordering.setAccessToken(token).orders(orderId)
      const { content: { result } } = await functionFetch.get()
      const order = Array.isArray(result) ? null : result
      setOrderState({
        ...orderState,
        loading: false,
        order
      })
    } catch (e) {
      setOrderState({
        ...orderState,
        loading: false,
        error: [e.message]
      })
    }
  }

  useEffect(() => {
    if (props.order) {
      setOrderState({
        ...orderState,
        order: props.order
      })
    } else {
      getOrder()
    }
  }, [])

  useEffect(() => {
    if (orderState.loading || loading) return
    const handleUpdateOrder = (order) => {
      if (order.id !== orderState.order.id) return
      delete order.total
      delete order.subtotal
      setOrderState({
        ...orderState,
        order: Object.assign(orderState.order, order)
      })
    }
    socket.join(`orders`)
    socket.on('update_order', handleUpdateOrder)
    return () => {
      socket.leave(`orders_${user.id}`)
      socket.off('update_order', handleUpdateOrder)
    }
  }, [orderState.order, socket, loading])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          order={orderState}
          messageErrors={messageErrors}
          formatPrice={formatPrice}
          handlerSubmit={handlerSubmitSpotNumber}
        />
      )}
    </>
  )
}

OrderDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * This must be contains orderId to fetch
   */
  orderId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  /**
   * Order, this must be contains an object with all order info
   */
  order: PropTypes.object,
  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after order details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

OrderDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
