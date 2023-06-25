import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../../contexts/SessionContext'
import { useApi } from '../../../contexts/ApiContext'
import { useWebsocket } from '../../../contexts/WebsocketContext'
import { useConfig } from '../../../contexts/ConfigContext'
import { useLanguage } from '../../../contexts/LanguageContext'
import { useUtils } from '../../../contexts/UtilsContext'

export const Messages = (props) => {
  const {
    UIComponent,
    orderId,
    customHandleSend,
    messages: orderMessages,
    setMessages: setOrderMessages,
    asDashboard,
    order,
    handleUpdateOrderForUnreadCount
  } = props

  const [, t] = useLanguage()
  const [ordering] = useApi()
  const [configState] = useConfig()
  const [{ getOrderState }] = useUtils()
  const [{ user, token }] = useSession()
  const accessToken = props.accessToken || token

  const [canRead, setCanRead] = useState({ business: true, administrator: true, driver: true, customer: true })
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState({ loading: true, error: null, messages: [] })
  const [sendMessage, setSendMessages] = useState({ loading: false, error: null })
  const [readMessages, setReadMessages] = useState({ loading: true, error: null, messages: [] })
  const [image, setImage] = useState(null)
  const [socket] = useWebsocket()

  const googleMapsApiKey = configState?.configs?.google_maps_api_key?.value
  const getStaticMapByLocation = (location, size) => {
    if (!size) {
      size = '250x100'
    }
    var url = 'https://maps.googleapis.com/maps/api/staticmap?center=' + location.lat + ',' + location.lng + '&zoom=14&size=' + size + '&markers=color:red%7C' + location.lat + ',' + location.lng + '&key=' + googleMapsApiKey
    return url
  }

  const getLogisticTagStatus = (status) => {
    switch (status) {
      case 0:
        return t('PENDING', 'Pending')
      case 1:
        return t('IN_PROGRESS', 'In Progress')
      case 2:
        return t('IN_QUEUE', 'In Queue')
      case 3:
        return t('EXPIRED', 'Logistic expired')
      case 4:
        return t('RESOLVED', 'Resolved')
      default:
        return status
    }
  }

  const getVehicleSmmary = (vehicle) => {
    return vehicle?.type + ' ' + vehicle?.model + ' ' + vehicle?.car_registration + ' ' + vehicle?.color
  }

  const getHistoryComment = (message) => {
    let comment = ''
    const changeAttribute = message?.change?.attribute
    if (changeAttribute === 'distance') {
      comment = t('THE_DRIVER_IS_CLOSE') + ' <b>(' + message.driver.name + (message.driver.lastname ? ' ' + message.driver.lastname : '') + ')</b>'
    } else if (changeAttribute === 'status') {
      if (message.change.new === 8 && message.change.estimated) {
        const estimatedDelivery = message.change.estimated
        comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO')
          .replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>')
          .replace('_from_', '<b>' + getOrderState(message.change.old * 1) + '</b>')
          .replace('_to_', '<b>' + getOrderState(message.change.new * 1) + '</b>') + '<br>' + t('ESTIMATED_DELIVERY_TIME')
          .replace('_min_', estimatedDelivery)
      } else if (message.change.new === 7 && message.change.estimated) {
        const estimatedPreparation = message.change.estimated
        comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO')
          .replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>')
          .replace('_from_', '<b>' + getOrderState(message.change.old * 1) + '</b>')
          .replace('_to_', '<b>' + getOrderState(message.change.new * 1) + '</b>') + '<br>' + t('ESTIMATED_PREPARATION_TIME')
          .replace('_min_', estimatedPreparation)
      } else {
        comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO')
          .replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>')
          .replace('_from_', '<b>' + getOrderState(message.change.old * 1) + '</b>')
          .replace('_to_', '<b>' + getOrderState(message.change.new * 1) + '</b>')
      }
      if (message?.change?.comment) {
        comment += '<br>' + '<b>' + t('COMMENT', '') + '</b>: ' + message.change.comment + '.'
      }
    } else if (changeAttribute === 'driver_id') {
      if (message.driver) {
        comment = t('DRIVER_ASSIGNED_AS_DRIVER')
          .replace('_driver_', '<b>' + message.driver.name + ' ' + (message.driver.lastname ? message.driver.lastname : '') + '</b>')
      } else {
        comment = t('DRIVER_UNASSIGNED')
      }
    } else if (['prepared_in', 'delivered_in', 'delivery_datetime'].includes(changeAttribute)) {
      comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO')
        .replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>')
        .replace('_from_', '<b>' + (message.change.old || 0) + '</b>')
        .replace('_to_', '<b>' + message.change.new + '</b>')
    } else if (changeAttribute === 'logistic_status') {
      comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO')
        .replace('_attribute_', '<b>' + t('LOGISTIC_STATUS', 'logistic status') + '</b>')
        .replace('_from_', '<b>' + getLogisticTagStatus(parseInt(message.change.old, 10)) + '</b>')
        .replace('_to_', '<b>' + getLogisticTagStatus(parseInt(message.change.new, 10)) + '</b>')
    } else if (changeAttribute === 'vehicle') {
      comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO')
        .replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>')
        .replace('_from_', '<b>' + getVehicleSmmary(message.change.old) + '</b>')
        .replace('_to_', '<b>' + getVehicleSmmary(message.change.new) + '</b>')
    } else if (changeAttribute === 'reject_reason') {
      comment = t('ORDER_REJECT_REASON_IS', 'Order <b>reject reason</b> is _reject_reason_.')
        .replace('_reject_reason_', '<b>' + t(`REJECT_REASON_${message.change.new.toUpperCase()}`) + '</b>')
    } else if (changeAttribute !== 'comment') {
      if (message.change.old) {
        comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO')
          .replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>')
          .replace('_from_', '<b>' + message.change.old + '</b>')
          .replace('_to_', '<b>' + message.change.new + '</b>')
      } else {
        comment = t('ORDER_ATTRIBUTE_CHANGED_TO')
          .replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>')
          .replace('_to_', '<b>' + message.change.new + '</b>')
      }
    }
    if (['status', 'reject_reason'].includes(changeAttribute)) {
      if (user.level === 0 || user.level === 2) {
        comment += '<br>-'
        if (message.app_id) comment += '<br><strong>' + t('APP_ID') + ':</strong> ' + message.app_id
        comment += '<br><strong>' + t('AUTHOR') + ':</strong> ' + ((message.author) ? (message.author.name + (message.author.lastname ? ' ' + message.author.lastname : '')) : t('GUEST_USER'))
        if (message.user_agent) comment += '<br><strong>' + t('USER_AGENT') + ':</strong> ' + message.user_agent
        if (message.location) comment += '<br><strong>' + t('LOCATION') + ':</strong> <img src="' + getStaticMapByLocation(message.location, '250x100') + '" />'
        comment += '<br><strong>' + t('IP') + ':</strong> ' + message.ip
      }
    }
    return comment
  }

  /**
   * Method to send message
   */
  const handleSend = async () => {
    if (customHandleSend) {
      return customHandleSend(message)
    }
    try {
      setSendMessages({ loading: true, error: null })
      const _canRead = []
      if (canRead.customer) {
        _canRead.push(3)
      }
      if (canRead.administrator) {
        _canRead.push(0)
      }
      if (canRead.business) {
        _canRead.push(2)
      }
      if (canRead.driver) {
        _canRead.push(4)
      }
      const body = {
        comment: message,
        type: 2,
        can_see: _canRead.join(',')
      }
      if (image) {
        body.type = 3
        body.file = image
      }
      const response = await fetch(`${ordering.root}/orders/${orderId}/messages`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` }, body: JSON.stringify(body) })
      const { error, result } = await response.json()
      if (!error) {
        if (setOrderMessages && orderMessages) {
          setOrderMessages({
            ...orderMessages,
            messages: [
              ...orderMessages.messages,
              result
            ]
          })
        } else {
          setMessages({
            ...messages,
            messages: [
              ...messages.messages,
              result
            ]
          })
        }
      }
      setSendMessages({ loading: false, error: error ? result : null })
    } catch (error) {
      setSendMessages({ loading: false, error: [error.Messages] })
    }
  }

  /**
   * Method to Load message for first time
   */
  const loadMessages = async () => {
    try {
      setMessages({ ...messages, messages: [], loading: true })
      const functionFetch = asDashboard
        ? `${ordering.root}/orders/${orderId}/messages?mode=dashboard`
        : `${ordering.root}/orders/${orderId}/messages`
      const response = await fetch(functionFetch, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` } })
      const { error, result } = await response.json()
      if (!error) {
        setMessages({
          messages: result,
          loading: false,
          error: null
        })
      } else {
        setMessages({
          ...messages,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setMessages({ ...messages, loading: false, error: [error.Messages] })
    }
  }

  /**
   * Method to Load message for first time
   * @param {number} messageId order message Id
   */
  const handleReadMessages = async (messageId) => {
    if (orderMessages && setOrderMessages) return
    try {
      setReadMessages({ ...readMessages, loading: true })
      const functionFetch = `${ordering.root}/orders/${orderId}/messages/${messageId}/read?order_id=${orderId}&order_message_id=${messageId}`
      const response = await fetch(functionFetch, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` } })
      const { error, result } = await response.json()
      if (!error) {
        setReadMessages({
          messages: result,
          loading: false,
          error: null
        })
        if (messages.messages.length > 0) {
          const _messages = messages.messages.filter(message => {
            if (message.id === messageId) {
              message.read = true
            }
            return true
          })
          setMessages({ ...messages, messages: _messages })
        }
        handleUpdateOrderForUnreadCount && handleUpdateOrderForUnreadCount(null)
        handleUpdateOrderForUnreadCount && handleUpdateOrderForUnreadCount(orderId)
      } else {
        setReadMessages({
          ...readMessages,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setReadMessages({ ...readMessages, loading: false, error: [error.Messages] })
    }
  }

  useEffect(() => {
    if (orderMessages && setOrderMessages) return
    loadMessages()
  }, [orderId])

  useEffect(() => {
    if (messages.loading || (orderMessages && setOrderMessages)) return
    const handleNewMessage = (message) => {
      if (message.order?.id === orderId) {
        const found = messages.messages.find(_message => _message.id === message.id)
        if (!found) {
          setMessages(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message]
          }))
        }
      }
    }
    socket?.on('message', handleNewMessage)
    return () => {
      socket?.off('message', handleNewMessage)
    }
  }, [messages, socket, order?.status])

  useEffect(() => {
    if (!socket?.socket) return
    if (asDashboard) {
      socket?.join(`messages_orders_${orderId}_${user?.level}`)
    } else {
      socket?.join(`messages_orders_${user?.id}`)
    }
    socket?.socket?.on('connect', () => {
      if (asDashboard) {
        socket?.join(`messages_orders_${orderId}_${user?.level}`)
      } else {
        socket?.join(`messages_orders_${user?.id}`)
      }
    })
    return () => {
      if (asDashboard) {
        socket?.leave(`messages_orders_${orderId}_${user?.level}`)
      } else {
        socket?.leave(`messages_orders_${user?.id}`)
      }
    }
  }, [socket?.socket, orderId])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          messages={messages}
          image={image}
          canRead={canRead}
          handleSend={handleSend}
          message={message}
          handleReadMessages={handleReadMessages}
          setMessage={setMessage}
          setCanRead={setCanRead}
          sendMessage={sendMessage}
          setImage={setImage}
          getHistoryComment={getHistoryComment}
        />
      )}
    </>
  )
}

Messages.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Custom Send messageS
   * @param {object} message Message to send
   */
  handleClickSetDefault: PropTypes.func,
  /**
   * @param {object} message
   * handleCustomClick, function to get click event and return message without default behavior
   */
  customHandleSend: PropTypes.func,
  /**
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

Messages.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
