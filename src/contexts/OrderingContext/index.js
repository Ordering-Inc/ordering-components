import React, { createContext } from 'react'
import { ConfigProvider } from '../ConfigContext'
import { SiteProvider } from '../SiteContext'
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
import { OptimizationLoadProvider } from '../OptimizationLoadContext'

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
  const webStrategy = new WebStrategy()
  const isAlsea = ['alsea', 'alsea-staging']?.includes(settings.project)
  const restOfSettings = {
    project: settings.project,
    appId: settings.app_id,
    countryCode: settings.countryCode,
    useOptimizeLoad: settings.useOptimizeLoad,
    use_root_point: settings.use_root_point,
    isAlsea
  }
  return (
    <OrderingContext.Provider>
      <EventProvider>
        <ApiProvider settings={Object.assign(settings.api, restOfSettings)}>
          <OptimizationLoadProvider settings={Object.assign(settings.api, restOfSettings)} strategy={webStrategy}>
            <LanguageProvider settings={Object.assign(settings.api, restOfSettings)} strategy={webStrategy}>
              <ConfigProvider strategy={webStrategy}>
                <OrderingThemeProvider settings={Object.assign(settings.api, restOfSettings)}>
                  <SiteProvider appId={settings.app_id}>
                    <UtilsProviders>
                      <ToastProvider>
                        <ValidationFieldsProvider appId={settings.app_id}>
                          <SessionProvider strategy={webStrategy}>
                            <WebsocketProvider
                              isAlsea={isAlsea}
                              strategy={webStrategy}
                              settings={Object.assign(settings.socket, restOfSettings)}
                            >
                              <CustomerProvider strategy={webStrategy}>
                                <OrderProvider
                                  strategy={webStrategy}
                                  Alert={Alert}
                                  isAlsea={isAlsea}
                                  franchiseId={settings?.franchiseSlug ?? settings?.franchiseId}
                                  businessSlug={settings?.businessSlug}
                                >
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
                  </SiteProvider>
                </OrderingThemeProvider>
              </ConfigProvider>
            </LanguageProvider>
          </OptimizationLoadProvider>
        </ApiProvider>
      </EventProvider>
    </OrderingContext.Provider>
  )
}
