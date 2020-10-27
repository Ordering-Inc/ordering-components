import React, { createContext } from 'react'
import { ConfigProvider } from '../ConfigContext'
import { SessionProvider } from '../SessionContext'
import { WebsocketProvider } from '../WebsocketContext'
import { OrderProvider } from '../OrderContext'
import { BusinessProvider } from '../BusinessContext'
import { LanguageProvider } from '../LanguageContext'
import { ApiProvider } from '../ApiContext'
import { EventProvider } from '../EventContext'
import { UtilsProviders } from '../UtilsContext'

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
      <EventProvider>
        <ApiProvider settings={Object.assign(settings.api, { project: settings.project })}>
          <LanguageProvider>
            <ConfigProvider>
              <UtilsProviders>
                <SessionProvider>
                  <WebsocketProvider settings={Object.assign(settings.socket, { project: settings.project })}>
                    <OrderProvider Alert={Alert}>
                      <BusinessProvider>
                        {children}
                      </BusinessProvider>
                    </OrderProvider>
                  </WebsocketProvider>
                </SessionProvider>
              </UtilsProviders>
            </ConfigProvider>
          </LanguageProvider>
        </ApiProvider>
      </EventProvider>
    </OrderingContext.Provider>
  )
}
