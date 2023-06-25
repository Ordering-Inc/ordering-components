import React, { createContext, useContext, useEffect, useState } from 'react'
import { useSession } from '../SessionContext'
import { Socket } from './socket'

/**
 * Create SessionContext
 * This context will manage the socket conection and provide an easy interface
 */
export const WebsocketContext = createContext()

// let socket = null

/**
 * Custom provider to session manager
 * This provider has a reducer for manage session state
 * @param {props} props
 */
export const WebsocketProvider = ({ settings, children, strategy }) => {
  const [session] = useSession()
  const [socket, setSocket] = useState()
  const [configs, setConfigs] = useState(settings)
  const [hashKey, setHashKey] = useState(null)

  useEffect(() => {
    if (session.loading) return
    if (configs.url && configs.project) {
      if (session.auth) {
        const _socket = new Socket({ ...configs, accessToken: session?.token })
        setSocket(_socket)
      } else if (hashKey && !session.auth) {
        const _socket = new Socket({ ...configs, hashKey })
        setSocket(_socket)
      }
    }
  }, [session, configs, hashKey])

  useEffect(() => {
    if (socket) {
      socket.connect()
    }
    return () => {
      socket && socket.close()
    }
  }, [socket, hashKey])

  useEffect(() => {
    if (session.auth) return
    const projectInputInterval = setInterval(async () => {
      let project = null
      if (configs.use_root_point) {
        project = await strategy.getItem('project_name', true)
      } else {
        await strategy.removeItem('project_name')
        clearInterval(projectInputInterval)
      }
      if (project) {
        setConfigs({ ...configs, project })
        configs.project = project
        clearInterval(projectInputInterval)
      }
    }, 1000)
    return () => clearInterval(projectInputInterval)
  }, [session])

  useEffect(() => {
    if (socket?.socket) {
      socket.socket.on('disconnect', (reason) => {
        if (reason === 'io server disconnect' && session.auth) {
          setTimeout(socket?.socket?.connect(), 1000)
        }
      })

      socket.socket.on('connect_error', () => {
        setTimeout(socket?.socket?.connect(), 1000)
      })
    }
  }, [socket?.socket, session, hashKey])

  const functions = {
    setHashKey
  }
  return (
    <WebsocketContext.Provider value={[socket, functions]}>
      {children}
    </WebsocketContext.Provider>
  )
}

/**
 * Hook to get and update websocket state
 */
export const useWebsocket = () => {
  const sockerManager = useContext(WebsocketContext)
  return sockerManager || new Socket({})
}
