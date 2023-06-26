import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useEvent } from '../../contexts/EventContext'
import { useWebsocket } from '../../contexts/WebsocketContext'
import { useConfig } from '../../contexts/ConfigContext'

export const NewOrderNotification = (props) => {
  const {
    UIComponent
  } = props

  const [{ token, user }] = useSession()
  const socket = useWebsocket()
  const [events] = useEvent()
  const [{ configs }] = useConfig()
  const isLogisticActivated = configs?.logistic_module?.value

  const handleActionEvent = (event, value) => {
    const evts = {
      messages: 'message_added_notification',
      order_added: 'order_added_notification',
      order_updated: 'order_updated_notification',
      request_register: 'request_register_notification',
      request_update: 'request_update_notification'
    }
    events.emit(evts[event], value)
  }

  useEffect(() => {
    if (!token) return
    socket.on('message', (e) => handleActionEvent('messages', e))
    socket.on('orders_register', (e) => handleActionEvent('order_added', e))
    socket.on('update_order', (e) => handleActionEvent('order_updated', e))

    return () => {
      socket.off('message', (e) => handleActionEvent('messages', e))
      socket.off('orders_register', (e) => handleActionEvent('order_added', e))
      socket.off('update_order', (e) => handleActionEvent('order_updated', e))
    }
  }, [socket, user])

  useEffect(() => {
    if (isLogisticActivated) {
      socket.on('request_register', (e) => handleActionEvent('request_register', e))
      socket.on('request_update', (e) => handleActionEvent('request_update', e))
    }
    return () => {
      socket.off('request_register')
      socket.off('request_update')
    }
  }, [socket, user, isLogisticActivated])

  useEffect(() => {
    if (!token) return
    socket.on('disconnect', () => {
      socket.join(user?.level === 0 ? 'messages_orders' : `messages_orders_${user?.id}`)
      socket.join(user?.level === 0 ? 'orders' : `orders_${user?.id}`)
      socket.join(`requests_${user?.id}`)
      socket.join(`ordergroups_${user?.id}`)
    })

    const messagesOrdersRoom = user?.level === 0 ? 'messages_orders' : `messages_orders_${user?.id}`
    const ordersRoom = user?.level === 0 ? 'orders' : `orders_${user?.id}`
    const requestsRoom = `requests_${user?.id}`
    const groupsRoom = `ordergroups_${user?.id}`

    socket.join(messagesOrdersRoom)
    socket.join(ordersRoom)
    socket.join(requestsRoom)
    socket.join(groupsRoom)

    return () => {
      socket.leave(messagesOrdersRoom)
      socket.leave(ordersRoom)
      socket.leave(requestsRoom)
      socket.leave(groupsRoom)
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
