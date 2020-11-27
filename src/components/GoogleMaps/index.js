import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { WrapperGoogleMaps } from '../WrapperGoogleMaps'

export const GoogleMaps = (props) => {
  const {
    googleReady,
    location,
    locations,
    mapControls,
    handleChangePosition
  } = props

  const divRef = useRef()
  const [googleMap, setGoogleMap] = useState(null)

  const setMarkers = (map) => {
    for (let i = 0; i < locations.length; i++) {
      const marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(locations[i].lat, locations[i].lng),
        map
      })
    }
  }

  useEffect(() => {
    if (googleReady) {
      const coordinates = { lat: location.lat, lng: location.lng }
      const map = new window.google.maps.Map(divRef.current, {
        zoom: location.zoom || mapControls.defaultZoom,
        center: coordinates,
        zoomControl: mapControls?.zoomControl,
        streetViewControl: mapControls?.streetViewControl,
        fullscreenControl: mapControls?.fullscreenControl,
        mapTypeControl: mapControls?.mapTypeControl,
        mapTypeId: mapControls?.mapTypeId,
        mapTypeControlOptions: {
          style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: window.google.maps.ControlPosition.TOP_LEFT,
          ...mapControls?.mapTypeControlOptions
        }
      })

      setGoogleMap(map)

      let marker = null
      if (locations) {
        setMarkers(map)
      } else {
        marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(coordinates.lat, coordinates.lng),
          map,
          draggable: true
        })
        marker.addListener('mouseup', marker => {
          handleChangePosition(marker.latLng)
        })
      }
    }
  }, [googleReady])

  useEffect(() => {
    const interval = setInterval(() => {
      if (googleReady) {
        setMarkers(googleMap)
      }
    }, 2000)
    return () => clearInterval(interval)
  }, [])

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
