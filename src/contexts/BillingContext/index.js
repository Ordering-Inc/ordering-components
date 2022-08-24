import React, { createContext } from 'react'
import { ConfigProvider } from '../ConfigContext'
import { SessionProvider } from '../SessionContext'
import { LanguageProvider } from '../LanguageContext'
import { ApiProvider } from '../ApiContext'
import { EventProvider } from '../EventContext'
import { ToastProvider } from '../ToastContext'
import { WebStrategy } from '../../webStrategy'
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
  const webStrategy = new WebStrategy()
  return (
    <BillingContext.Provider>
      <EventProvider>
        <ApiProvider settings={settings}>
          <LanguageProvider strategy={webStrategy}>
            <ConfigProvider strategy={webStrategy}>
              <ToastProvider>
                <SessionProvider strategy={webStrategy}>
                  {children}
                </SessionProvider>
              </ToastProvider>
            </ConfigProvider>
          </LanguageProvider>
        </ApiProvider>
      </EventProvider>
    </BillingContext.Provider>
  )
}
