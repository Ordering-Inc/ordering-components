import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'
import { useApi } from '../../contexts/ApiContext'
import { useUtils } from '../../contexts/UtilsContext'

export const BusinessController = (props) => {
  const {
    business,
    businessId,
    businessAttributes,
    onBusinessClick,
    handleCustomClick,
    UIComponent
  } = props

  const [ordering] = useApi()

  /**
   * This must be containt business object data
   */
  const [businessObject, setBusinessObject] = useState(business)
  /**
   * This must be containt local time for check if business is close
   */
  const [currentTime, setCurrentTime] = useState(null)
  /**
   * This must be containt a boolean to indicate if a business is close or not
   */
  const [isBusinessClose, setIsBusinessClose] = useState(false)
  /**
   * Order context data
   */
  const [orderState] = useOrder()
  /**
   * formatPrice function
   */
  const [{ parsePrice }] = useUtils()

  /**
   * time when business is going to close
   */
  const [timeToClose, setTimeToClose] = useState(null)

  /**
   * timer in minutes when the business is going to close
   */
  const [businessWillCloseSoonMinutes, setBusinessWillCloseSoonMinutes] = useState(null)

  /**
   * Method to get business from SDK
   */
  const getBusiness = async () => {
    const { content: { result } } = await ordering.businesses(businessId).select(businessAttributes).get()
    setBusinessObject(result)
  }
  /**
   * Method to return business offert to show
   * @param {object} offer
   */
  const getBusinessOffer = (offers) => {
    if (!offers || !offers.length) return null
    const maxOffer = offers.reduce((acc, cur) => (acc.rate > cur.rate) ? acc : cur)
    return maxOffer?.rate_type === 1 ? `${maxOffer?.rate}%` : parsePrice(maxOffer?.rate)
  }
  /**
   * Method to return business max offer to show
   * @param {object} max offer
   */
  const getBusinessMaxOffer = (offers) => {
    if (!offers || !offers.length) return null
    const maxOffer = offers.reduce((acc, cur) => (acc.rate > cur.rate) ? acc : cur)
    return maxOffer
  }
  /**
   * Method to format date
   * @param {object} time
   */
  const formatDate = (time) => {
    const formatHour = time?.hour < 10 ? `0${time?.hour}` : time?.hour
    const formatMinute = time?.minute < 10 ? `0${time?.minute}` : time?.minute
    return time ? `${formatHour}:${formatMinute}` : 'none'
  }

  /**
   * Method to format numbers (only 2 decimals)
   * @param {number} num
   */
  const formatNumber = (num) => {
    return Math.round(num * 1e2) / 1e2
  }

  useEffect(() => {
    const currentHour = currentTime?.split(':')[0]
    const currentMinute = currentTime?.split(':')[1]
    const hour = timeToClose?.split(':')[0]
    const minute = timeToClose?.split(':')[1]
    const result = currentHour > hour || (currentHour === hour && currentMinute >= minute)
    const timeDifference = (new Date(null, null, null, hour, minute) - new Date(null, null, null, currentHour, currentMinute)) / 60000
    setBusinessWillCloseSoonMinutes((timeDifference <= 30 && timeDifference > 0) ? timeDifference : null)
    if (timeToClose) {
      setIsBusinessClose(result)
    }
  }, [currentTime])

  useEffect(() => {
    const interval = setInterval(() => {
      const currentHour = new Date().getHours()
      const currentMinute = new Date().getMinutes()
      const currentDay = new Date().getDate()
      const currentMonth = new Date().getMonth()
      const currentYear = new Date().getFullYear()
      setCurrentTime(`${currentHour}:${currentMinute}`)
      for (let i = 0; i < businessObject?.today?.lapses?.length; i++) {
        const timeToOpenFormatted = formatDate(businessObject?.today?.lapses[i]?.open || null)
        const timeToCloseFormatted = formatDate(businessObject?.today?.lapses[i]?.close || null)
        const hourClose = timeToCloseFormatted?.split(':')[0]
        const minuteClose = timeToCloseFormatted?.split(':')[1]
        const hourOpen = timeToOpenFormatted?.split(':')[0]
        const minuteOpen = timeToOpenFormatted?.split(':')[1]
        // range of most recent open-close business lapses
        if (new Date() < new Date(currentYear, currentMonth, currentDay, hourClose, minuteClose) && new Date() > new Date(currentYear, currentMonth, currentDay, hourOpen, minuteOpen)) {
          setTimeToClose(formatDate(businessObject?.today?.lapses[i]?.close))
        }
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (business) {
      setBusinessObject(business)
    } else {
      getBusiness()
    }
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          orderState={orderState}
          isBusinessClose={isBusinessClose}
          business={businessObject}
          formatDate={formatDate}
          formatNumber={formatNumber}
          getBusinessOffer={getBusinessOffer}
          getBusinessMaxOffer={getBusinessMaxOffer}
          handleClick={handleCustomClick || onBusinessClick}
          businessWillCloseSoonMinutes={businessWillCloseSoonMinutes}
        />
      )}
    </>
  )
}

BusinessController.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Business, contains a object with all business properties
   */
  business: PropTypes.object,
  /**
   * businessId, this must be containt id or slug to get business from API
   */
  businessId: PropTypes.number,
  /**
   * businessAttributes, Array of attributes to get business from API
   */
  businessAttributes: PropTypes.arrayOf(PropTypes.string),
  /**
   * onBusinessClick, function to get click event and return business object after default behavior
   */
  onBusinessClick: PropTypes.func,
  /**
   * handleCustomClick, function to get click event and return business object without default behavior
   */
  handleCustomClick: PropTypes.func,
  /**
   * Components types before Business Controller
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Business Controller
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessController.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
