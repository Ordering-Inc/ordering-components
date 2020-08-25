import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { WrapperGoogleMaps } from '../WrapperGoogleMaps'

export const GoogleMaps = (props) => {
  const {
    googleReady,
    location,
    isZoomControl,
    isStreetViewControl
  } = props

  const divRef = useRef()

  useEffect(() => {
    if (googleReady) {
      const coordinates = { lat: location.lat, lng: location.lng }
      const map = new window.google.maps.Map(divRef.current, {
        zoom: location.zoom,
        center: coordinates,
        zoomControl: isZoomControl,
        streetViewControl: isStreetViewControl
      })
      const marker = new window.google.maps.Marker({
        position: coordinates,
        map,
        title: ''
      })
      console.log(marker)
    }
  }, [googleReady])

  return (
    googleReady && <div style={{ width: '70%', height: '50%', position: 'absolute' }} id='map' ref={divRef} />
  )
}

GoogleMaps.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

GoogleMaps.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export const GoogleMapsMap = WrapperGoogleMaps(GoogleMaps)

GoogleMapsMap.propTypes = {
  /**
   * You Google Maps api key
   * @see apiKey What is Api Key ? https://developers.google.com/maps/gmp-get-started
   */
  apiKey: PropTypes.string.isRequired,
  /**
   * Function to get address from GPS
   * @param {object} address New address
   */
  onAddress: PropTypes.func,
  /**
   * Function to get error from GPS
   * @param {object} address New address
   */
  onError: PropTypes.func
}
