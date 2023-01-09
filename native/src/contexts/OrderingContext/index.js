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
import { ValidationFieldsProvider } from '../../../../src/contexts/ValidationsFieldsContext'
import { ToastProvider } from '../../../../src/contexts/ToastContext'
import { CustomerProvider } from '../../../../src/contexts/CustomerContext'
import { OptimizationLoadProvider } from '../../../../src/contexts/OptimizationLoadContext'
import { OrderingThemeProvider } from '../../../../src/contexts/OrderingThemeContext'
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
export const OrderingProvider = ({ Alert, settings, children, isDisableToast, isDisabledDefaultOpts }) => {
  const nativeStrategy = new NativeStrategy()
  const restOfSettings = {
    project: settings.project,
    appId: settings.app_id,
    use_root_point: settings.use_root_point,
    countryCode: settings.countryCode,
    useOptimizeLoad: settings?.useOptimizeLoad
  }
  return (
    <OrderingContext.Provider>
      <EventProvider>
        <ApiProvider settings={Object.assign(settings.api, restOfSettings)}>
          <OptimizationLoadProvider settings={Object.assign(settings.api, restOfSettings)}>
            <LanguageProvider strategy={nativeStrategy}>
              <ConfigProvider strategy={nativeStrategy}>
                <OrderingThemeProvider settings={Object.assign(settings.api, restOfSettings)}>
                  <UtilsProviders>
                    <ToastProvider>
                      <ValidationFieldsProvider>
                        <SessionProvider strategy={nativeStrategy}>
                          <WebsocketProvider strategy={nativeStrategy} settings={Object.assign(settings.socket, restOfSettings)}>
                            <CustomerProvider strategy={nativeStrategy}>
                              <OrderProvider
                                isDisabledDefaultOpts={isDisabledDefaultOpts}
                                strategy={nativeStrategy}
                                Alert={Alert}
                                isDisableToast={isDisableToast}
                                franchiseId={settings?.franchiseSlug ?? settings?.franchiseId}
                                businessSlug={settings?.businessSlug}
                              >
                                <BusinessProvider
                                  businessId={settings?.businessSlug ?? settings?.businessId}
                                >
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
          </OptimizationLoadProvider>
        </ApiProvider>
      </EventProvider>
    </OrderingContext.Provider>
  )
}
