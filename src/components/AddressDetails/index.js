import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'
import { useApi } from '../../contexts/ApiContext'

/**
 * Component to manage address details behavior without UI component
 */
export const AddressDetails = (props) => {
  const {
    apiKey,
    UIComponent,
    mapConfigs
  } = props
  const [orderState] = useOrder()
  const requestsState = {}

  /**
   * This must be contains an object with business location
   */
  const [location, setLocation] = useState(null)
  const [ordering] = useApi()
  /**
   * Method to format google url for business location
   */
  const formatUrl = (location) => {
    const orderLocation = orderState?.options?.address?.location
    return orderState.options.type === 1
      ? `https://maps.googleapis.com/maps/api/staticmap?size=${mapConfigs?.mapSize?.width || 500}x${mapConfigs?.mapSize?.height || 190}&center=${orderLocation?.lat},${orderLocation?.lng}&zoom=${mapConfigs?.mapZoom || 15}&scale=2&maptype=roadmap&markers=color:red%7Ccolor:red%7C${orderLocation?.lat},${orderLocation?.lng}&key=${apiKey}`
      : `https://maps.googleapis.com/maps/api/staticmap?size=${mapConfigs?.mapSize?.width || 500}x${mapConfigs?.mapSize?.height || 190}&scale=2&maptype=roadmap&markers=color:blue%7Ccolor:blue%7C${orderLocation?.lat},${orderLocation?.lng}&markers=icon:https://res.cloudinary.com/ordering2/image/upload/f_auto,q_auto,w_90,h_90,q_auto:best,q_auto:best,r_max,bo_3px_solid_gray/v1562277711/bk6kvzrnfkvqgav9qi7j.png%7Ccolor:white%7C${location?.lat},${location?.lng}&key=${apiKey}`
  }
  /**
   * Method to get business location from API
   */
  const getBusiness = async () => {
    try {
      const source = {}
      requestsState.business = source
      const { content: { result } } = await ordering.businesses(props.businessId).select(['location']).get({ cancelToken: source })
      setLocation(result.location)
    } catch (err) {
    }
  }

  useEffect(() => {
    if (props.location) {
      setLocation(props.location)
    } else {
      getBusiness()
    }
    return () => {
      if (requestsState.business) {
        requestsState.business.cancel()
      }
    }
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          googleMapsUrl={formatUrl(location)}
          userAddress={orderState?.options?.address?.address}
          orderType={orderState?.options.type}
        />
      )}
    </>
  )
}

AddressDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * location, business location with lat, lng and zoom properties
   */
  business: PropTypes.object,
  /**
   * business, object with business info, should be contains address and locations property
   */
  businessId: PropTypes.number,
  /**
   * Components types before Address Details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Address Details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Address Details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Address Details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

AddressDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
