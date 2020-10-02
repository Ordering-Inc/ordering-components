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
export const OrderingContext = createContext()

/**
 * Custom provider to languages manager
 * This provider has a reducer for manage languages state
 * @param {props} props
 */
export const OrderingProvider = ({ Alert, settings, children }) => {
  return (
    <OrderingContext.Provider>
      <ApiProvider settings={Object.assign(settings.api, { project: settings.project })}>
        <ConfigProvider>
          <LanguageProvider>
            <SessionProvider>
              <WebsocketProvider settings={Object.assign(settings.socket, { project: settings.project })}>
                <OrderProvider Alert={Alert}>
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
