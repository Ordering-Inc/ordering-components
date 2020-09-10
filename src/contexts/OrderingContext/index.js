import React, { createContext } from 'react'
import { ConfigProvider } from '../ConfigContext'
import { SessionProvider } from '../SessionContext'
import { WebsocketProvider } from '../WebsocketContext'
import { OrderProvider } from '../OrderContext'
import { LanguageProvider } from '../LanguageContext'
import { ApiProvider } from '../ApiContext'

/**
 * Create OrderingContext
 * Wrapper to use all context to ordering apps
 */
const OrderingContext = createContext()

/**
 * Custom provider to languages manager
 * This provider has a reducer for manage languages state
 * @param {props} props
 */
export const OrderingProvider = ({ settings, children }) => {
  return (
    <OrderingContext.Provider value={1}>
      <ApiProvider settings={Object.assign(settings.api, { project: settings.project })}>
        <ConfigProvider>
          <LanguageProvider>
            <SessionProvider>
              <WebsocketProvider settings={Object.assign(settings.socket, { project: settings.project })}>
                <OrderProvider>
                  {children}
                </OrderProvider>
              </WebsocketProvider>
            </SessionProvider>
          </LanguageProvider>
        </ConfigProvider>
      </ApiProvider>
    </OrderingContext.Provider>
  )
}
