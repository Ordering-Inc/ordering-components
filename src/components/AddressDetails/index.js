import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'
import { useApi } from '../../contexts/ApiContext'
import { useConfig } from '../../contexts/ConfigContext'

/**
 * Component to manage address details behavior without UI component
 */
export const AddressDetails = (props) => {
  const {
    apiKey,
    UIComponent,
    mapConfigs,
    isMultiCheckout,
    openCarts,
    cart,
    primaryColor
  } = props
  const [orderState] = useOrder()
  const [{ configs }] = useConfig()
  const GM_API_KEY = apiKey || configs?.google_maps_api_key?.value
  const requestsState = {}

  /**
   * This must be contains an object with business location
   */
  const [location, setLocation] = useState(null)
  const [formatUrl, setFormatUrl] = useState(null)
  const [logo, setLogo] = useState(null)
  const [ordering] = useApi()
  const businessId = props.uuid
    ? Object.values(orderState.carts).find(_cart => _cart?.uuid === props.uuid)?.business_id ?? {}
    : props.businessId
  /**
   * Method to format google url for business location
   */

  const formatUrlMethod = (businessLocation) => {
    const orderLocation = props.orderLocation || orderState?.options?.address?.location
    let businessesMarkers = ''
    let firstLetterBusinessName = ''
    if (isMultiCheckout) {
      openCarts.forEach(cart => {
        firstLetterBusinessName = cart?.business?.name?.charAt(0)?.toUpperCase?.() ?? 'S'
        businessesMarkers += `&markers=label:${firstLetterBusinessName}%7Ccolor:${primaryColor}%7C${cart.business?.location?.lat},${cart.business?.location?.lng}`
      })
    } else {
      firstLetterBusinessName = cart?.business?.name?.charAt(0)?.toUpperCase?.() ?? 'S'
      businessesMarkers = `&markers=label:${firstLetterBusinessName}%7Ccolor:${primaryColor}%7C${cart.business?.location?.lat ?? businessLocation?.location?.lat},${cart.business?.location?.lng ?? businessLocation?.location?.lng}`
    }
    const staticmapUrl = isMultiCheckout
      ? `https://maps.googleapis.com/maps/api/staticmap?size=${mapConfigs?.mapSize?.width || 500}x${mapConfigs?.mapSize?.height || 190}&scale=2&maptype=roadmap&markers=icon:%7Ccolor:red%7C${orderLocation?.lat},${orderLocation?.lng}${businessesMarkers}&key=${GM_API_KEY}`
      : `https://maps.googleapis.com/maps/api/staticmap?size=${mapConfigs?.mapSize?.width || 500}x${mapConfigs?.mapSize?.height || 190}&scale=2&maptype=roadmap&markers=color:red%7C${orderLocation?.lat},${orderLocation?.lng}${businessesMarkers}&key=${GM_API_KEY}`

    return staticmapUrl
  }
  /**
   * Method to get business location from API
   */
  const getBusiness = async () => {
    try {
      const source = {}
      requestsState.business = source
      const { content: { result } } = await ordering.businesses(businessId).select(['location', 'logo']).get({ cancelToken: source })
      setLogo(result.logo)
      setLocation(result.location)
    } catch (err) {
    }
  }

  useEffect(() => {
    if (isMultiCheckout) return
    if (props.location && props.businessLogo && !props.uuid) {
      setLocation(props.location)
      setLogo(props.businessLogo)
    } else {
      getBusiness()
    }
    return () => {
      if (requestsState.business) {
        requestsState.business.cancel()
      }
    }
  }, [businessId, isMultiCheckout, props.location])

  useEffect(() => {
    if (!logo || !location) return
    setFormatUrl(formatUrlMethod(location))
  }, [logo, JSON.stringify(location), JSON.stringify(orderState?.options?.address?.address)])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          googleMapsUrl={
            isMultiCheckout
              ? formatUrlMethod()
              : formatUrl
          }
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
  afterElements: [],
  primaryColor: 'red'
}
