import React, { createContext, useContext, useEffect } from 'react'
import { useConfig } from '../ConfigContext'
import { useLanguage } from '../LanguageContext'
import moment from 'moment'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'

dayjs.extend(utc)
dayjs.extend(relativeTime)
dayjs.extend(updateLocale)
/**
 * Create ConfigContext
 * This context will manage the current configs internally and provide an easy interface
 */

export const UtilsContext = createContext()

/**
 * Custom provider to utils manager
 * This provider has a reducer for manage utils functions
 * @param {props} props
 */
export const UtilsProviders = ({ children }) => {
  const [languageState, t] = useLanguage()
  const [configState] = useConfig()

  // const [localObject, setLocalObject] = useState({})

  const refreshLocalObject = () => {
    const weekdays = [
      t('DAY7', 'Sunday'),
      t('DAY1', 'Monday'),
      t('DAY2', 'Tuesday'),
      t('DAY3', 'Wednesday'),
      t('DAY4', 'Thursday'),
      t('DAY5', 'Friday'),
      t('DAY6', 'Saturday')
    ]
    const months = [
      t('MONTH1', 'January'),
      t('MONTH2', 'February'),
      t('MONTH3', 'March'),
      t('MONTH4', 'April'),
      t('MONTH5', 'May'),
      t('MONTH6', 'June'),
      t('MONTH7', 'July'),
      t('MONTH8', 'August'),
      t('MONTH9', 'September'),
      t('MONTH10', 'October'),
      t('MONTH11', 'November'),
      t('MONTH12', 'December')
    ]
    const localeObject = {
      name: 'auto', // name String
      weekdays: weekdays, // weekdays Array
      months: months, // months Array
      ordinal: n => `${n}º`, // ordinal Function (number) => return number + output
      relativeTime: {
        // relative time format strings, keep %s %d as the same
        future: t('RELATIVE_TIME_IN', 'in %s'), // e.g. in 2 hours, %s been replaced with 2hours
        past: t('RELATIVE_TIME_AGO', '%s ago'),
        s: t('RELATIVE_TIME_FEW_SECONDS ', 'a few seconds'),
        m: t('RELATIVE_TIME_MINUTE', 'a minute'),
        mm: t('RELATIVE_TIME_MINUTES', '%d minutes'),
        h: t('RELATIVE_TIME_HOUR', 'an hour'),
        hh: t('RELATIVE_TIME_HOURS', '%d hours'), // e.g. 2 hours, %d been replaced with 2
        d: t('RELATIVE_TIME_DAY', 'a day'),
        dd: t('RELATIVE_TIME_DAYS', '%d days'),
        M: t('RELATIVE_TIME_MONTH', 'a month'),
        MM: t('RELATIVE_TIME_MONTHS', '%d months'),
        y: t('RELATIVE_TIME_YEAR', 'a year'),
        yy: t('RELATIVE_TIME_YEARS', '%d years')
      },
      meridiem: (hour, minute, isLowercase) => {
        // OPTIONAL, AM/PM
        return hour > 12 ? t('PM', 'PM') : t('AM', 'AM')
      }
    }
    dayjs.locale('auto', localeObject)
    dayjs.updateLocale('auto', localeObject)
  }
  const parsePrice = (value, options = {}) => {
    const formatNumber = {
      decimal: options?.decimal || configState.configs.format_number_decimal_length?.value || 2,
      separator: options?.separator || configState.configs.format_number_decimal_separator?.value || ',',
      thousand: options?.thousand || configState.configs.format_number_thousand_separator?.value || '.',
      currency: options?.currency || configState.configs.format_number_currency?.value || '$',
      currencyPosition: options?.currencyPosition || configState.configs.currency_position?.value || 'left'
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
      decimal: options?.decimal || configState.configs.format_number_decimal_length?.value || 2,
      separator: options?.separator || configState.configs.format_number_decimal_separator?.value || ',',
      thousand: options?.thousand || configState.configs.format_number_thousand_separator?.value || '.'
    }
    let number = value.toFixed(formatNumber.decimal)
    number = number.toString()
    if (number.indexOf('.')) {
      number = number.replace('.', formatNumber.separator)
    } else if (number.indexOf(',')) {
      number = number.replace(',', formatNumber.separator)
    }
    const numberParts = number.split(formatNumber.separator)
    if (formatNumber.thousand === 'space') formatNumber.thousand = ' '
    numberParts[0] = numberParts[0].replace(/(.)(?=(\d{3})+$)/g, '$1' + formatNumber.thousand)
    number = numberParts.join(formatNumber.separator)
    return number
  }

  const parseDate = (date, options = {}) => {
    const formatTime = options?.formatTime || configState.configs.format_time?.value || '24'
    const formatDate = {
      inputFormat: options?.inputFormat || ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD hh:mm:ss A', 'YYYY-MM-DD hh:mm:ss'],
      outputFormat: options?.outputFormat || (formatTime === '24' ? 'YYYY-MM-DD HH:mm' : 'YYYY-MM-DD hh:mm A'),
      utc: typeof options?.utc === 'boolean' ? options?.utc : true
    }
    if (!moment(date, formatDate.inputFormat).isValid()) {
      return t('INVALID_FORMAT', 'invalid format')
    }
    const _date = formatDate.utc ? moment.utc(date, formatDate.inputFormat).local() : moment(date, formatDate.inputFormat)
    return _date.format(formatDate.outputFormat)
  }

  const parseTime = (time, options = {}) => {
    if (!time) return '00:00'
    const _formatTime = options?.formatTime || configState.configs.format_time?.value || '24'
    const formatTime = {
      inputFormat: options?.inputFormat || ['HH:mm', 'hh:mm A', 'hh:mm'],
      outputFormat: options?.outputFormat || (_formatTime === '24' ? 'HH:mm' : 'hh:mm A'),
      utc: typeof options?.utc === 'boolean' ? options?.utc : true
    }
    if (!dayjs(time, formatTime.inputFormat).isValid()) {
      return t('INVALID_FORMAT', 'invalid format')
    }
    const _date = formatTime.utc ? dayjs.utc(time, formatTime.inputFormat).local() : dayjs(time, formatTime.inputFormat)
    return _date.format(formatTime.outputFormat)
  }

  const parseShortenDistance = (distance, options = {}) => {
    if (distance >= 1000000000) {
      return `${(distance / 1000000000).toFixed(1).replace(/\.0$/, '')}${t('G', 'G')}`
    }
    if (distance >= 1000000) {
      return `${(distance / 1000000).toFixed(1).replace(/\.0$/, '')}${t('M', 'M')}`
    }
    if (distance >= 1000) {
      return `${(distance / 1000).toFixed(1).replace(/\.0$/, '')}${t('K', 'K')}`
    }
  }

  const parseDistance = (distance, options = {}) => {
    distance = parseFloat(distance) || 0
    let unit = options?.unit || 'KM'
    if (configState.configs.distance_unit_km?.value === '1') {
      unit = 'KM'
    }
    if (configState.configs.distance_unit?.value) {
      unit = configState.configs.distance_unit?.value
    }
    if (unit.toUpperCase() === 'MI') {
      const dist = distance * 0.621371 / 1000
      return `${parseNumber(dist, options)} ${t('MI', 'mi')}`
    } else {
      return `${parseNumber(distance / 1000, options)} ${t('KM', 'km')}`
    }
  }

  const getTimeAgo = (dateTime, options) => {
    if (!dateTime) return 'NN'
    const dateOptions = {
      inputFormat: options?.inputFormat || ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD hh:mm:ss A', 'YYYY-MM-DD hh:mm:ss'],
      utc: typeof options?.utc === 'boolean' ? options?.utc : true
    }
    if (!dayjs(dateTime, dateOptions.inputFormat).isValid()) {
      return t('INVALID_FORMAT', 'invalid format')
    }
    const _date = dateOptions.utc ? dayjs.utc(dateTime, dateOptions.inputFormat).local() : dayjs(dateTime, dateOptions.inputFormat)
    return _date.fromNow()
  }

  const getTimeTo = (dateTime, options) => {
    if (!dateTime) return 'NN'
    const dateOptions = {
      inputFormat: options?.inputFormat || ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD hh:mm:ss A', 'YYYY-MM-DD hh:mm:ss'],
      utc: typeof options?.utc === 'boolean' ? options?.utc : true
    }
    if (!dayjs(dateTime, dateOptions.inputFormat).isValid()) {
      return t('INVALID_FORMAT', 'invalid format')
    }
    const _date = dateOptions.utc ? dayjs.utc(dateTime, dateOptions.inputFormat).local() : dayjs(dateTime, dateOptions.inputFormat)
    return _date.toNow()
  }

  const optimizeImage = (url, params, fallback) => {
    if (!url && fallback) return fallback
    params = params && params.length > 0 ? `,${params}` : ''
    if (url != null && url.indexOf('res.cloudinary.com') !== -1) {
      var parts = url.split('upload')
      url = `${parts[0]}upload/f_auto,q_auto${params}${parts[1]}`
    }
    return url
  }

  const getOrderState = (num) => {
    switch (num) {
      case 0:
        return t('PENDING', 'Pending')
      case 1:
        return t('COMPLETED_BY_ADMIN', 'Completed by admin')
      case 2:
        return t('REJECTED_BY_ADMIN', 'Rejected by admin')
      case 3:
        return t('ORDER_STATUS_IN_BUSINESS', 'Driver arrived to business')
      case 4:
        return t('PREPARATION_COMPLETED', 'Preparation Completed')
      case 5:
        return t('REJECTED_BY_BUSINESS', 'Rejected by business')
      case 6:
        return t('REJECTED_BY_DRIVER', 'Rejected by driver')
      case 7:
        return t('ACCEPTED_BY_BUSINESS', 'Accepted by business')
      case 8:
        return t('ACCEPTED_BY_DRIVER', 'Accepted by driver')
      case 9:
        return t('PICK_UP_COMPLETED_BY_DRIVER', 'Pick up completed by driver')
      case 10:
        return t('PICK_UP_FAILED_BY_DRIVER', 'Pick up Failed by driver')
      case 11:
        return t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver')
      case 12:
        return t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by driver')
      case 13:
        return t('PREORDER', 'Preorder')
      case 14:
        return t('ORDER_NOT_READY', 'Order not ready')
      case 15:
        return t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', 'Pickup completed by customer')
      case 16:
        return t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', 'Cancelled by customer')
      case 17:
        return t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', 'Not picked by customer')
      case 18:
        return t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', 'Driver almost arrived to business')
      case 19:
        return t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', 'Driver almost arrived to customer')
      case 20:
        return t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', 'Customer almost arrived to business')
      case 21:
        return t('ORDER_CUSTOMER_ARRIVED_BUSINESS', 'Customer arrived to business')
      case 22:
        return t('ORDER_LOOKING_FOR_DRIVER', 'Looking for driver')
      case 23:
        return t('ORDER_DRIVER_ON_WAY', 'Driver on way')
      default:
        return 'N/A'
    }
  }

  const functions = {
    parsePrice,
    parseNumber,
    parseDate,
    parseTime,
    parseDistance,
    parseShortenDistance,
    getTimeAgo,
    getTimeTo,
    optimizeImage,
    getOrderState
  }

  useEffect(() => {
    if (!languageState.loading) {
      refreshLocalObject()
    }
  }, [languageState])
  return (
    <UtilsContext.Provider value={[functions]}>
      {children}
    </UtilsContext.Provider>
  )
}

/**
 * Hook to get utils functions
 */
export const useUtils = () => {
  const utilsManager = useContext(UtilsContext)
  return utilsManager || [{}, () => {}]
}
