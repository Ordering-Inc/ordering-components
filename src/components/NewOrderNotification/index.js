import React, { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useEvent } from '../../contexts/EventContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

export const NewOrderNotification = (props) => {
  const {
    UIComponent
  } = props

  const [{ token, user }] = useSession()
  const socket = useWebsocket()
  const [events] = useEvent()

  useEffect(() => {
    if (!token) return

    const messagesOrdersRoom =
      user?.level === 0 ? 'messages_orders' : `messages_orders_${user?.id}`
    const ordersRoom = user?.level === 0 ? 'orders' : `orders_${user?.id}`

    socket.on('disconnect', (reason) => {
      socket.join(
        user?.level === 0 ? 'messages_orders' : `messages_orders_${user?.id}`
      )
      socket.join(user?.level === 0 ? 'orders' : `orders_${user?.id}`)
    })

    socket.join(messagesOrdersRoom)
    socket.join(ordersRoom)

    return () => {
      socket.leave(messagesOrdersRoom)
      socket.leave(ordersRoom)
    }
  }, [socket, user])

  const handleMessage = useCallback(async (message) => {
    events.emit('message_added_noification', message)
  }, [])

  const handleOrder = useCallback(async (order) => {
    events.emit('order_added_noification', order)
  }, [])

  const handleUpdateOrder = useCallback(async (order) => {
    events.emit('order_updated_noification', order)
  }, [])

  useEffect(() => {
    socket.on('message', handleMessage)
    socket.on('orders_register', handleOrder)
    socket.on('update_order', handleUpdateOrder)

    return () => {
      socket.off('message', handleMessage)
      socket.off('update_order', handleUpdateOrder)
      socket.on('orders_register', handleOrder)
    }
  }, [socket, user])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
        />
      )}
    </>
  )
}

NewOrderNotification.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before Payment Options
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
    * Components types after Payment Options
    * Array of type components, the parent props will pass to these components
    */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
    * Elements before Payment Options
    * Array of HTML/Components elements, these components will not get the parent props
    */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
    * Elements after Payment Options
    * Array of HTML/Components elements, these components will not get the parent props
    */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

NewOrderNotification.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
