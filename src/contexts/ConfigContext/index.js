import React, { createContext, useState, useContext, useEffect } from 'react'
import { useApi } from '../ApiContext'
import { useLanguage } from '../LanguageContext'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

/**
 * Create ConfigContext
 * This context will manage the current configs internally and provide an easy interface
 */
export const ConfigContext = createContext()

/**
 * Custom provider to configs manager
 * This provider has a reducer for manage configs state
 * @param {props} props
 */
export const ConfigProvider = ({ children }) => {
  const [state, setState] = useState({ loading: true, configs: {} })
  const [languageState] = useLanguage()
  const [ordering] = useApi()

  const customConfigs = {
    max_days_preorder: {
      key: 'max_days_preorder',
      value: 6
    },
    meters_to_change_address: {
      key: 'meters_to_change_address',
      value: 500
    },
    default_order_type: {
      key: 'default_order_type',
      value: 'delivery'
    },
    order_types_allowed: {
      key: 'order_types_allowed',
      value: '1|2|3|4|5'
    },
    google_autocomplete_selection_required: {
      key: 'google_autocomplete_selection_required',
      value: 'true'
    },
    google_maps_api_key: {
      key: 'google_maps_api_key',
      value: 'AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
    },
    country_autocomplete: {
      key: 'country_autocomplete',
      value: '*'
    },
    track_id_google_analytics: {
      key: 'track_id_google_analytics',
      value: 'UA-51635411-4'
    }
  }

  const refreshConfigs = async () => {
    try {
      !state.loading && setState({ ...state, loading: true })
      const { content: { error, result } } = await ordering.configs().asDictionary().get()
      const response = await fetch('https://ipapi.co/json/')
      const data = await response.json()
      const configsResult = {
        ...customConfigs,
        default_country_code: {
          value: data?.country_code || 'US',
          calling_number: data?.country_calling_code || '+1'
        },
        ...result
      }
      setState({
        ...state,
        loading: false,
        configs: error ? {} : configsResult
      })
    } catch (err) {
      setState({ ...state, loading: false })
    }
  }

  const functions = {
    refreshConfigs
  }

  useEffect(() => {
    if (!languageState.loading) {
      refreshConfigs()
    }
  }, [languageState])

  return (
    <ConfigContext.Provider value={[state, functions]}>
      {children}
    </ConfigContext.Provider>
  )
}

/**
 * Hook to get and update configs state
 */
export const useConfig = () => {
  const configManager = useContext(ConfigContext)
  return configManager || [{}, async () => {}]
}
