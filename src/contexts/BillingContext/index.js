import React, { createContext } from 'react'
import { ConfigProvider } from '../ConfigContext'
import { SessionProvider } from '../SessionContext'
import { LanguageProvider } from '../LanguageContext'
import { ApiProvider } from '../ApiContext'
import { EventProvider } from '../EventContext'
import { ToastProvider } from '../ToastContext'
import { WebStrategy } from '../../webStrategy'
import { OrderProvider } from '../OrderContext'
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
export const BillingProvider = ({ Alert, settings, children }) => {
  const webStrategy = new WebStrategy()
  return (
    <BillingContext.Provider>
      <EventProvider>
        <ApiProvider settings={Object.assign(settings.api, { project: settings.project, appId: settings.app_id })}>
          <LanguageProvider strategy={webStrategy}>
            <ConfigProvider strategy={webStrategy}>
              <ToastProvider>
                <SessionProvider strategy={webStrategy}>
                  <OrderProvider
                    strategy={webStrategy}
                    Alert={Alert}
                  >
                    {children}
                  </OrderProvider>
                </SessionProvider>
              </ToastProvider>
            </ConfigProvider>
          </LanguageProvider>
        </ApiProvider>
      </EventProvider>
    </BillingContext.Provider>
  )
}
