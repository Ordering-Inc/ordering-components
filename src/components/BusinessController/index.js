import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const BusinessController = (props) => {
  const {
    business,
    ordering,
    businessId,
    businessAttributes,
    onBusinessClick,
    handleCustomClick,
    UIComponent
  } = props

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
  const getBusinessOffert = (offer) => {
    if (!offer) return null
    return offer?.rate_type === 1 ? (offer?.rate * 10) / 100 : offer?.rate
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

  /**
   * Business time to close formatted
   */
  const timeToCloseFormatted = formatDate(businessObject?.today?.lapses[0]?.close || null)

  useEffect(() => {
    const currentHour = currentTime?.split(':')[0]
    const currentMinute = currentTime?.split(':')[1]
    const hour = timeToCloseFormatted?.split(':')[0]
    const minute = timeToCloseFormatted?.split(':')[1]
    const result = currentHour > hour || (currentHour === hour && currentMinute >= minute)
    if (timeToCloseFormatted) {
      setIsBusinessClose(result)
    }
  }, [currentTime])

  useEffect(() => {
    const interval = setInterval(() => {
      const currentHour = new Date().getHours()
      const currentMinute = new Date().getMinutes()
      setCurrentTime(`${currentHour}:${currentMinute}`)
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
          isBusinessClose={isBusinessClose}
          isBusinessFeatured={businessObject?.featured}
          offerToShow={getBusinessOffert(businessObject?.offers[0])}
          business={businessObject}
          id={businessObject?.id}
          logo={businessObject?.logo}
          header={businessObject?.header}
          name={businessObject?.name}
          timetoOpen={formatDate(businessObject?.today?.lapses[0]?.open) || '-'}
          timeToclose={formatDate(businessObject?.today?.lapses[0]?.close) || '-'}
          minimum={businessObject?.minimum}
          deliveryPrice={businessObject?.delivery_price}
          description={businessObject?.description || '-'}
          distance={formatNumber(businessObject?.distance) || 0}
          deliveryTime={businessObject?.delivery_time}
          pickupTime={businessObject?.pickup_time}
          reviews={businessObject?.reviews?.total}
          handleClick={handleCustomClick || onBusinessClick}
        />
      )}
    </>
  )
}

BusinessController.propTypes = {
  /**
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  ordering: PropTypes.object.isRequired,
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
