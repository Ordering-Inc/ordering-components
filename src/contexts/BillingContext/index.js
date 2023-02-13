import React, { createContext } from 'react'
import { ApiProvider } from '../ApiContext'
import { EventProvider } from '../EventContext'
import { ToastProvider } from '../ToastContext'
/**
 * Create BillingContext
 * Wrapper to use all context to ordering apps
 */
export const BillingContext = createContext()

/**
 * Custom provider to languages manager
 * This provider has a reducer for manage languages state
 * @param {props} props
 */
export const BillingProvider = ({ settings, children }) => {
  return (
    <BillingContext.Provider>
      <EventProvider>
        <ApiProvider settings={Object.assign(settings.api, { project: settings.project, appId: settings.app_id })}>
          <ToastProvider>
            {children}
          </ToastProvider>
        </ApiProvider>
      </EventProvider>
    </BillingContext.Provider>
  )
}
