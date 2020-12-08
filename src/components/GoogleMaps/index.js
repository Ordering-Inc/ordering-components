import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { WrapperGoogleMaps } from '../WrapperGoogleMaps'

const getMarkerColor = (n) => {
  switch (n) {
    case 1:
      return 'red'
    case 2:
      return 'green'
    default:
      return 'blue'
  }
}

export const GoogleMaps = (props) => {
  const {
    googleReady,
    location,
    locations,
    mapControls,
    setErrors,
    handleChangeAddressMap,
    maxLimitLocation
  } = props

  const divRef = useRef()
  const [googleMap, setGoogleMap] = useState(null)
  const [markers, setMarkers] = useState([])
  const [boundMap, setBoundMap] = useState(null)

  const center = { lat: location.lat, lng: location.lng }

  /**
   * Function to generate multiple markers
   * @param {Google map} map
   */
  const generateMarkers = (map) => {
    const bounds = new window.google.maps.LatLngBounds()
    for (let i = 0; i < locations.length; i++) {
      const marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(locations[i].lat, locations[i].lng),
        map,
        icon: {
          url: `http://maps.google.com/mapfiles/ms/icons/${getMarkerColor(i)}-dot.png`
        }
      })
      bounds.extend(marker.position)
      setMarkers(markers => [...markers, marker])
    }
    map.fitBounds(bounds)
    setBoundMap(bounds)
  }

  /**
   * function to get all address information with a location
   * @param {google location} pos
   */
  const geocodePosition = (pos, map, marker) => {
    const geocoder = new window.google.maps.Geocoder()

    geocoder.geocode({ latLng: pos }, (results) => {
      let zipcode = null
      if (results && results.length > 0) {
        for (const component of results[0].address_components) {
          const addressType = component.types[0]
          if (addressType === 'postal_code') {
            zipcode = component.short_name
            break
          }
        }
        const address = {
          address: results[0].formatted_address,
          location: { lat: pos.lat(), lng: pos.lng() },
          zipcode
        }
        handleChangeAddressMap(address)

        center.lat = address.location.lat
        center.lng = address.location.lng
      } else {
        marker && marker.setPosition(center)
        setErrors && setErrors('ERROR_NOT_FOUND_ADDRESS')
      }
      map && map.panTo(new window.google.maps.LatLng(center.lat, center.lng))
    })
  }

  /**
   * Function to return distance between two locations
   * @param {google location} loc1
   * @param {*google location} loc2
   */
  const validateResult = (map, marker, curPos) => {
    const loc1 = new window.google.maps.LatLng(curPos.lat(), curPos.lng())
    const loc2 = new window.google.maps.LatLng(location.lat, location.lng)

    const distance = window.google.maps.geometry.spherical.computeDistanceBetween(loc1, loc2)

    if (!maxLimitLocation) {
      geocodePosition(curPos, map, marker)
      return
    }

    if (distance <= maxLimitLocation) {
      geocodePosition(curPos)
    } else {
      marker.setPosition(center)
      map.panTo(new window.google.maps.LatLng(center.lat, center.lng))
      setErrors && setErrors('ERROR_MAX_LIMIT_LOCATION')
    }
  }

  useEffect(() => {
    if (googleReady) {
      const map = new window.google.maps.Map(divRef.current, {
        zoom: location.zoom || mapControls.defaultZoom,
        center,
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

      let marker = null
      setGoogleMap(map)

      if (locations) {
        generateMarkers(map)
      } else {
        marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(center.lat, center.lng),
          map,
          draggable: true
        })

        window.google.maps.event.addListener(marker, 'dragend', () => validateResult(map, marker, marker.getPosition()))

        window.google.maps.event.addListener(map, 'drag', () => marker.setPosition(map.getCenter()))

        window.google.maps.event.addListener(map, 'dragend', () => {
          marker.setPosition(map.getCenter())
          validateResult(map, marker, map.getCenter())
        })
      }

      return () => {
        window.google.maps.event.clearListeners(marker, 'dragend')
        window.google.maps.event.clearListeners(map, 'drag')
        window.google.maps.event.clearListeners(map, 'dragend')
      }
    }
  }, [googleReady])

  useEffect(() => {
    const interval = setInterval(() => {
      if (googleReady) {
        const driverLocation = locations[0]
        const newLocation = new window.google.maps.LatLng(driverLocation.lat, driverLocation.lng)
        markers[0].setPosition(newLocation)
        markers.forEach(marker => boundMap.extend(marker.position))
        googleMap.fitBounds(boundMap)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [locations])

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
   * maxLimitLocation, max value to set position
   */
  maxLimitLocation: PropTypes.number,
  /**
   * handleChangeAddressMap, function to set address when pin is moved
   */
  handleChangeAddressMap: PropTypes.func,
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
