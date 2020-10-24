import React, { createContext, useState, useContext, useEffect } from 'react'
import { useApi } from '../ApiContext'
import { useLanguage } from '../LanguageContext'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

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
  const [languageState, t] = useLanguage()
  const [ordering] = useApi()

  const refreshConfigs = async () => {
    try {
      !state.loading && setState({ ...state, loading: true })
      const { content: { error, result } } = await ordering.configs().asDictionary().get()
      setState({
        ...state,
        loading: false,
        configs: error ? {} : result
      })
    } catch (err) {
      setState({ ...state, loading: false })
    }
  }

  const parsePrice = (value, options = {}) => {
    const formatNumber = {
      decimal: options?.decimal || state.configs.format_number_decimal_length?.value || 2,
      separator: options?.separator || state.configs.format_number_decimal_separator?.value || ',',
      thousand: options?.thousand || state.configs.format_number_thousand_separator?.value || '.',
      currency: options?.currency || state.configs.format_number_currency?.value || '$',
      currencyPosition: options?.currencyPosition || state.configs.format_number_currency_position?.value || 'left'
    }
    let number = parseNumber(value, formatNumber)
    if (formatNumber.currencyPosition === 'left') {
      number = formatNumber.currency + ' ' + number
    } else {
      number = number + ' ' + formatNumber.currency
    }
    return number
  }

  const parseNumber = (value, options = {}) => {
    value = parseFloat(value) || 0
    const formatNumber = {
      decimal: options?.decimal || state.configs.format_number_decimal_length?.value || 2,
      separator: options?.separator || state.configs.format_number_decimal_separator?.value || ',',
      thousand: options?.thousand || state.configs.format_number_thousand_separator?.value || '.'
    }
    let number = value.toFixed(formatNumber.decimal)
    number = number.toString()
    if (number.indexOf('.')) {
      number = number.replace('.', formatNumber.separator)
    } else if (number.indexOf(',')) {
      number = number.replace(',', formatNumber.separator)
    }
    const numberParts = number.split(formatNumber.separator)
    numberParts[0] = numberParts[0].replace(/(.)(?=(\d{3})+$)/g, '$1' + formatNumber.thousand)
    number = numberParts.join(formatNumber.separator)
    return number
  }

  const parseDate = (date, options = {}) => {
    const formatTime = options?.formatTime || state.configs.format_time?.value || '24'
    console.log(formatTime)
    const formatDate = {
      inputFormat: options?.inputFormat || ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD hh:mm:ss A', 'YYYY-MM-DD hh:mm:ss'],
      outputFormat: options?.outputFormat || (formatTime === '24' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD hh:mm:ss A'),
      utc: true
    }
    if (!dayjs(date, formatDate.inputFormat).isValid()) {
      return t('INVALID_FORMAT', 'invalid format')
    }
    dayjs.extend(utc)
    if (options && typeof options === 'object' && options.hasOwnProperty('utc')) {
      formatTime.utc = options.utc
    }
    const _date = dayjs.utc(date, formatDate.inputFormat)
    if (!formatDate.utc) {
      _date.local()
    }
    return _date.format(formatDate.outputFormat)
  }

  const parseTime = (time, options = {}) => {
    if (!time) return '00:00'
    const format24 = options?.format24 || state.configs.format_time?.value || '24'
    const formatTime = {
      inputFormat: options?.inputFormat || ['HH:mm', 'hh:mm A', 'hh:mm'],
      outputFormat: options?.outputFormat || (format24 === '24' ? 'HH:mm' : 'hh:mm A'),
      utc: true
    }
    if (!dayjs(time, formatTime.inputFormat).isValid()) {
      return t('INVALID_FORMAT', 'invalid format')
    }
    dayjs.extend(utc)
    if (options && typeof options === 'object' && options.hasOwnProperty('utc')) {
      formatTime.utc = options.utc
    }
    const _date = dayjs.utc(time, formatTime.inputFormat)
    if (!formatTime.utc) {
      _date.local()
    }
    return _date.format(formatTime.outputFormat)
  }

  const parseDistance = (distance, options = {}) => {
    distance = parseFloat(distance) || 0
    let unitKm = true
    if (options && typeof options === 'object' && options.hasOwnProperty('unitKm')) {
      unitKm = options.unitKm
    } else if (state.configs?.distance_unit_km) {
      unitKm = state.configs.distance_unit_km?.value === '1'
    }
    if (unitKm) {
      return distance.toFixed(2) + ' ' + t('BUSINESS_LIST_OPTIONS_KM', 'KM')
    } else {
      return (distance * 0.621371).toFixed(2) + ' ' + t('BUSINESS_LIST_OPTIONS_MILES', 'MILES')
    }
  }

  const functions = {
    refreshConfigs,
    parsePrice,
    parseNumber,
    parseDate,
    parseTime,
    parseDistance
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
