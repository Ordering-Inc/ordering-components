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
import { ValidationFieldsProvider } from '../ValidationsFieldsContext'
import { CustomerProvider } from '../CustomerContext'
import { ToastProvider } from '../ToastContext'
import { WebStrategy } from '../../webStrategy'
import { OrderingThemeProvider } from '../OrderingThemeContext'

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
export const OrderingProvider = ({ Alert, settings, isAlsea, children }) => {
  const webStrategy = new WebStrategy()
  return (
    <OrderingContext.Provider>
      <EventProvider>
        <ApiProvider settings={Object.assign(settings.api, { project: settings.project, appId: settings.app_id })}>
          <LanguageProvider strategy={webStrategy}>
            <ConfigProvider>
              <OrderingThemeProvider settings={Object.assign(settings.api, { project: settings.project, appId: settings.app_id })}>
                <UtilsProviders>
                  <ToastProvider>
                    <ValidationFieldsProvider>
                      <SessionProvider strategy={webStrategy}>
                        <WebsocketProvider
                          strategy={webStrategy}
                          settings={Object.assign(settings.socket, { project: settings.project, appId: settings.app_id })}
                        >
                          <CustomerProvider strategy={webStrategy}>
                            <OrderProvider strategy={webStrategy} Alert={Alert} isAlsea={isAlsea}>
                              <BusinessProvider>
                                {children}
                              </BusinessProvider>
                            </OrderProvider>
                          </CustomerProvider>
                        </WebsocketProvider>
                      </SessionProvider>
                    </ValidationFieldsProvider>
                  </ToastProvider>
                </UtilsProviders>
              </OrderingThemeProvider>
            </ConfigProvider>
          </LanguageProvider>
        </ApiProvider>
      </EventProvider>
    </OrderingContext.Provider>
  )
}
