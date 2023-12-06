import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useWebsocket } from '../../contexts/WebsocketContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useSession } from '../../contexts/SessionContext'

/**
 * Component to manage websocket status without UI component
 */
export const WebsocketStatus = (props) => {
  const {
    UIComponent,
    useReconnectByLogin
  } = props

  const [, t] = useLanguage()
  const socket = useWebsocket()
  const [{ auth }] = useSession()
  const [socketStatus, setSocketStatus] = useState(socket?.socket?.connected ? 1 : 2)
  const [connectedDate, setConnectedDate] = useState(new Date())
  const [reconnectAttemptCount, setReconnectAttemptCount] = useState(0)

  const getWebsocketStatus = (num) => {
    switch (num) {
      case 0:
        return t('CONNECTING', 'Connecting')
      case 1:
        return t('OK', 'Ok')
      case 2:
        return t('DISCONNECTED', 'Disconnected')
    }
  }

  useEffect(() => {
    if (socket?.socket) {
      socket.socket.on('connect', () => {
        setReconnectAttemptCount(0)
        setSocketStatus(1)
        setConnectedDate(new Date())
      })

      socket.socket.on('disconnect', (reason) => {
        setSocketStatus(2)
      })

      socket.socket.on('reconnect_attempt', () => {
        setReconnectAttemptCount(prev => prev + 1)
        setSocketStatus(0)
      })
    }
    if (auth && socket?.socket?.connected && !socket?.socket?.disconnected && useReconnectByLogin) {
      setReconnectAttemptCount(0)
      setSocketStatus(1)
      setConnectedDate(new Date())
    }
  }, [socket?.socket, auth])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          socketStatus={socketStatus}
          connectedDate={connectedDate}
          getWebsocketStatus={getWebsocketStatus}
          reconnectAttemptCount={reconnectAttemptCount}
        />
      )}
    </>
  )
}

WebsocketStatus.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}

WebsocketStatus.defaultProps = {}
