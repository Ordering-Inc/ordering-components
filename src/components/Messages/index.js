import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

export const Messages = (props) => {
  const {
    UIComponent,
    orderId,
    customHandleSend,
    messages,
    setMessages,
    notificationApp
  } = props

  const [ordering] = useApi()
  const socket = useWebsocket()
  const [{ token }] = useSession()
  const accessToken = props.accessToken || token
  const [canRead, setCanRead] = useState({ administrator: true, business: true, customer: true, driver: true })
  const [message, setMessage] = useState('')
  const [sendMessage, setSendMessages] = useState({ loading: false, error: null })
  const [image, setImage] = useState(null)
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
      if (canRead.administrator) {
        _canRead.push(0)
      }
      if (canRead.business) {
        _canRead.push(2)
      }
      if (canRead.customer) {
        _canRead.push(3)
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
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'X-App-X': ordering.appId,
        'X-Socket-Id-X': socket?.getId()
      }
      if (notificationApp) {
        headers.appType = notificationApp
      }
      const response = await fetch(`${ordering.root}/orders/${orderId}/messages`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
      })
      const { error, result } = await response.json()
      if (!error) {
        setMessages({
          ...messages,
          messages: [
            ...messages.messages,
            result
          ]
        })
      }
      setSendMessages({ loading: false, error: error ? result : null })
    } catch (error) {
      setSendMessages({ loading: false, error: [error.message] })
    }
  }

  useEffect(() => {
    if (messages.loading) return
    const handleNewMessage = (message) => {
      const actualChat = messages?.messages?.find(_message => _message?.order_id === message?.order?.id)
      const found = messages.messages.find(_message => _message.id === message.id)
      if (!found && actualChat) {
        setMessages({
          ...messages,
          messages: [...messages.messages, message]
        })
      }
    }
    socket.on('message', handleNewMessage)
    return () => {
      socket.off('message', handleNewMessage)
    }
  }, [messages, socket])

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
          setMessage={setMessage}
          setCanRead={setCanRead}
          sendMessage={sendMessage}
          setImage={setImage}
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
