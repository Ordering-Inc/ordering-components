import React, { createContext, useContext, useEffect } from 'react'
import { useSession } from '../SessionContext'
import { Socket } from './socket'

/**
 * Create SessionContext
 * This context will manage the socket conection and provide an easy interface
 */
export const WebsocketContext = createContext()

let socket = null

/**
 * Custom provider to session manager
 * This provider has a reducer for manage session state
 * @param {props} props
 */
export const WebsocketProvider = ({ url = 'https://socket.ordering.co', project = 'demo', children }) => {
  const [session] = useSession()

  useEffect(() => {
    if (session.auth) {
      socket = new Socket({ url, project, accessToken: session.token })
      socket.connect()
    }
  }, [session])

  useEffect(() => {
    return () => {
      socket.close()
    }
  })
  return (
    <WebsocketContext.Provider value={socket}>
      {children}
    </WebsocketContext.Provider>
  )
}

/**
 * Hook to get and update websocket state
 */
export const useWebsocket = () => {
  const sockerManager = useContext(WebsocketContext)
  return sockerManager || new Socket()
}
