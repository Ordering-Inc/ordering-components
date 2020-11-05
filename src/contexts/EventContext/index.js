import React, { createContext, useContext } from 'react'
import { Emitter } from '../../components/Emitter'

/**
 * Create EventContext
 * This context will manage the app events and provide an interface
 */
export const EventContext = createContext()

/**
 * Custom provider to events manager
 * This provider has a reducer for manage event state
 * @param {props} props
 */
export const EventProvider = ({ children }) => {
  const events = new Emitter()

  return (
    <EventContext.Provider value={[events]}>
      {children}
    </EventContext.Provider>
  )
}

/**
 * Hook to get and update events state
 */
export const useEvent = () => {
  const configManager = useContext(EventContext)
  return configManager || [new Emitter()]
}
