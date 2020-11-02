import React, { createContext } from 'react'
import { ConfigProvider } from '../../../../src/contexts/ConfigContext'
import { SessionProvider } from '../../../../src/contexts/SessionContext'
import { WebsocketProvider } from '../../../../src/contexts/WebsocketContext'
import { OrderProvider } from '../../../../src/contexts/OrderContext'
import { BusinessProvider } from '../../../../src/contexts/BusinessContext'
import { LanguageProvider } from '../../../../src/contexts/LanguageContext'
import { ApiProvider } from '../../../../src/contexts/ApiContext'
import { EventProvider } from '../../../../src/contexts/EventContext'
import { UtilsProviders } from '../../../../src/contexts/UtilsContext'
import { NativeStrategy } from '../../NativeStrategy'

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
  const nativeStrategy = new NativeStrategy()
  return (
    <OrderingContext.Provider>
      <EventProvider>
        <ApiProvider settings={Object.assign(settings.api, { project: settings.project })}>
          <LanguageProvider strategy={nativeStrategy}>
            <ConfigProvider>
              <UtilsProviders>
                <SessionProvider strategy={nativeStrategy}>
                  <WebsocketProvider settings={Object.assign(settings.socket, { project: settings.project })}>
                    <OrderProvider strategy={nativeStrategy} Alert={Alert}>
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
