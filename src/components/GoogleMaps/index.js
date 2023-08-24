import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { WrapperGoogleMaps } from '../WrapperGoogleMaps'

import { useEvent } from '../../contexts/EventContext'
import { useUtils } from '../../contexts/UtilsContext'

export const GoogleMaps = (props) => {
  const {
    googleReady,
    locations,
    mapControls,
    setErrors,
    isSetInputs,
    fixedLocation,
    handleChangeAddressMap,
    maxLimitLocation,
    businessMap,
    onBusinessClick,
    setNearBusinessList,
    noDistanceValidation,
    businessZones,
    fillStyle,
    useMapWithBusinessZones,
    deactiveAlerts
  } = props

  const [{ optimizeImage }] = useUtils()
  const [events] = useEvent()
  const divRef = useRef()
  const [googleMap, setGoogleMap] = useState(null)
  const [markers, setMarkers] = useState([])
  const [googleMapMarker, setGoogleMapMarker] = useState(null)
  const [boundMap, setBoundMap] = useState(null)
  const [userActivity, setUserActivity] = useState(false)
  const markerRef = useRef()

  const location = fixedLocation || props.location
  const center = { lat: location?.lat, lng: location?.lng }

  const units = {
    mi: 1609,
    km: 1000
  }

  /**
   * Function to generate multiple markers
   * @param {Google map} map
   */
  const generateMarkers = (map) => {
    const bounds = new window.google.maps.LatLngBounds()
    let businessesNear = 0
    const locationMarkers = []
    for (let i = 0; i < locations.length; i++) {
      let formatUrl = null
      if (i === 1 || businessMap) {
        formatUrl = optimizeImage(locations[i]?.icon, 'r_max')
      }
      const marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(locations[i]?.lat, locations[i]?.lng),
        map,
        title: locations[i]?.slug,
        icon: locations[i]?.icon ? {
          url: formatUrl || locations[i]?.icon,
          scaledSize: new window.google.maps.Size(35, 35)
        } : null
      })
      if (businessMap && !noDistanceValidation) {
        const isNear = validateResult(googleMap, marker, marker.getPosition())
        if (isNear) {
          if (i === 0 && locations[0]?.markerPopup) {
            const infowindow = new window.google.maps.InfoWindow()
            infowindow.setContent(locations[0]?.markerPopup)
            infowindow.open(map, marker)
            markerRef.current = infowindow
          }
          marker.addListener('click', () => {
            if (locations[i]?.markerPopup) {
              const infowindow = new window.google.maps.InfoWindow()
              infowindow.setContent(locations[i]?.markerPopup)
              infowindow.open(map, marker)
            } else {
              onBusinessClick(locations[i]?.slug)
            }
          })
          bounds.extend(marker.position)
          locationMarkers.push(marker)
          businessesNear = businessesNear + 1
        } else {
          marker.setMap(null)
        }
      } else {
        bounds.extend(marker.position)
        locationMarkers.push(marker)
      }
    }
    if (locationMarkers.length > 0) {
      setMarkers(locationMarkers)
    }
    if (setNearBusinessList) {
      const franchiseSlugs = []
      for (const locationMarker of locationMarkers) {
        franchiseSlugs.push(locationMarker?.title)
      }
      setNearBusinessList(franchiseSlugs)
    }
    if (!deactiveAlerts) {
      businessesNear === 0 && setErrors && setErrors('ERROR_NOT_FOUND_BUSINESSES')
    }
    if (useMapWithBusinessZones) {
      bounds.extend(center)
    }
    map.fitBounds(bounds)
    setBoundMap(bounds)
  }
  /**
   * function to get all address information with a location
   * @param {google location} pos
   */
  const geocodePosition = (pos) => {
    if (isSetInputs) {
      const geocoder = new window.google.maps.Geocoder()

      geocoder.geocode({ latLng: pos }, (results) => {
        let zipcode = null
        if (results && results.length > 0 && results?.[0]?.address_components) {
          for (const component of results[0].address_components) {
            const addressType = component.types[0]
            if (addressType === 'postal_code') {
              zipcode = component.short_name
              break
            }
          }
          const address = {
            address: results[0].formatted_address,
            location: { lat: pos?.lat(), lng: pos?.lng() }
          }
          if (zipcode) address.zipcode = zipcode

          handleChangeAddressMap && handleChangeAddressMap(address)

          center.lat = address.location?.lat
          center.lng = address.location?.lng
        } else {
          googleMapMarker && googleMapMarker.setPosition(center)
          setErrors && setErrors('ERROR_NOT_FOUND_ADDRESS')
        }
        googleMap && googleMap.panTo(new window.google.maps.LatLng(center?.lat, center?.lng))
      })
    } else {
      const location = { lat: pos?.lat(), lng: pos?.lng() }
      handleChangeAddressMap && handleChangeAddressMap({ location })
      center.lat = location?.lat
      center.lng = location?.lng
      googleMap && googleMap.panTo(new window.google.maps.LatLng(location?.lat, location?.lng))
    }
  }

  /**
   * Function to return distance between two locations
   * @param {google location} loc1
   * @param {*google location} loc2
   */
  const validateResult = (map, marker, curPos) => {
    const loc1 = new window.google.maps.LatLng(curPos?.lat(), curPos?.lng())
    const loc2 = new window.google.maps.LatLng(location?.lat, location?.lng)

    const distance = window.google.maps.geometry.spherical.computeDistanceBetween(loc1, loc2)

    if (businessMap) {
      const minimumBusinessDistance = 20000
      if (distance <= minimumBusinessDistance) return true
      return false
    }

    if (!maxLimitLocation) {
      geocodePosition(curPos)
      return
    }

    if (distance <= maxLimitLocation) {
      geocodePosition(curPos)
    } else {
      marker.setPosition(center)
      map.panTo(new window.google.maps.LatLng(center?.lat, center?.lng))
      setErrors && setErrors('ERROR_MAX_LIMIT_LOCATION')
    }
  }

  const createDeliveryZone = (deliveryZone, map, bounds) => {
    if (deliveryZone.type === 1 && deliveryZone?.data?.center && deliveryZone?.data?.radio) {
      const newCircleZone = new window.google.maps.Circle({
        ...fillStyle,
        editable: false,
        center: deliveryZone?.data.center,
        radius: deliveryZone?.data.radio * 1000
      })
      newCircleZone.setMap(map)
      bounds.union(newCircleZone.getBounds())
      map.fitBounds(bounds)
    }
    if (deliveryZone.type === 5 && deliveryZone?.data?.distance) {
      const newCircleZone = new window.google.maps.Circle({
        ...fillStyle,
        editable: false,
        center: center,
        radius: deliveryZone?.data.distance * units[deliveryZone?.data?.unit]
      })
      newCircleZone.setMap(map)
      bounds.union(newCircleZone.getBounds())
      map.fitBounds(bounds)
    }
    if (deliveryZone?.type === 2 && Array.isArray(deliveryZone?.data)) {
      const newPolygonZone = new window.google.maps.Polygon({
        ...fillStyle,
        editable: false,
        paths: deliveryZone?.data
      })
      newPolygonZone.setMap(map)
      if (Array.isArray(deliveryZone?.data)) {
        for (const position of deliveryZone?.data) {
          bounds.extend(position)
        }
        map.fitBounds(bounds)
      }
    }
  }

  useEffect(() => {
    if (googleReady) {
      const map = new window.google.maps.Map(divRef.current, {
        zoom: location.zoom ?? mapControls.defaultZoom,
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
        if (locations.length > 0) {
          generateMarkers(map)
        }
        if (businessMap) {
          marker = new window.google.maps.Marker({
            position: new window.google.maps.LatLng(center.lat, center.lng),
            map
          })
          map.panTo(new window.google.maps.LatLng(center?.lat, center?.lng))
        } else {
          marker = new window.google.maps.Marker({
            position: new window.google.maps.LatLng(center?.lat, center?.lng),
            map,
            draggable: useMapWithBusinessZones,
            zIndex: 9999,
            icon: useMapWithBusinessZones ? undefined : {
              url: locations[0]?.icon,
              scaledSize: new window.google.maps.Size(35, 35)
            }
          })
        }
        setGoogleMapMarker(marker)
      } else {
        marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(center?.lat, center?.lng),
          map,
          draggable: !!mapControls?.isMarkerDraggable
        })
        setGoogleMapMarker(marker)
      }

      if (businessZones?.length > 0) {
        const bounds = new window.google.maps.LatLngBounds()
        for (const deliveryZone of businessZones) {
          if (deliveryZone?.id) {
            createDeliveryZone(deliveryZone, map, bounds)
          } else if (deliveryZone?.length > 0) {
            for (const deliveryZoneBusiness of deliveryZone) {
              createDeliveryZone(deliveryZoneBusiness, map, bounds)
            }
          }
        }
      }
    }
  }, [googleReady, locations])

  useEffect(() => {
    if (!businessMap) {
      if (googleReady && googleMap && googleMapMarker) {
        window.google.maps.event.addListener(googleMapMarker, 'dragend', () => {
          validateResult(googleMap, googleMapMarker, googleMapMarker.getPosition())
        })

        window.google.maps.event.addListener(googleMapMarker, 'drag', () => {
          events.emit('map_is_dragging', true)
        })

        if (mapControls?.isMarkerDraggable && !useMapWithBusinessZones) {
          window.google.maps.event.addListener(googleMap, 'drag', () => {
            googleMapMarker.setPosition(googleMap.getCenter())
            events.emit('map_is_dragging', true)
          })

          window.google.maps.event.addListener(googleMap, 'dragend', () => {
            googleMapMarker.setPosition(googleMap.getCenter())
            validateResult(googleMap, googleMapMarker, googleMap.getCenter())
          })
        }

        return () => {
          window.google.maps.event.clearListeners(googleMapMarker, 'dragend')
          window.google.maps.event.clearListeners(googleMap, 'drag')
          window.google.maps.event.clearListeners(googleMap, 'dragend')
        }
      }
    }
  }, [googleMapMarker, googleMap, location])

  useEffect(() => {
    if (googleReady && location) {
      if (businessMap && googleMap) {
        if (markerRef?.current) {
          markerRef?.current?.close && markerRef.current.close()
        }
        markers.forEach(marker => {
          marker.setMap(null)
        })
        generateMarkers(googleMap)
      }
      center.lat = location?.lat
      center.lng = location?.lng
      const newPos = new window.google.maps.LatLng(center?.lat, center?.lng)
      googleMapMarker && googleMapMarker.setPosition(newPos)
      !useMapWithBusinessZones && markers?.[0] && markers[0].setPosition(newPos)
      googleMap && googleMap.panTo(new window.google.maps.LatLng(center?.lat, center?.lng))
    }
  }, [location, locations])

  useEffect(() => {
    if (!businessMap) {
      const interval = setInterval(() => {
        if (googleReady && !userActivity) {
          const driverLocation = useMapWithBusinessZones ? center : locations?.[0]
          if (driverLocation) {
            const newLocation = new window.google.maps.LatLng(driverLocation?.lat, driverLocation?.lng)
            useMapWithBusinessZones ? boundMap.extend(newLocation) : markers?.[0] && markers[0].setPosition(newLocation)
            markers?.length > 0 && markers.forEach(marker => boundMap.extend(marker.position))
            googleMap.fitBounds(boundMap)
          }
        }
        setUserActivity(false)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [locations, userActivity])

  useEffect(() => {
    if (boundMap && businessMap) {
      boundMap.extend(center)
      googleMap.fitBounds(boundMap)
    }
  }, [boundMap])

  return (
    googleReady && (
      <div
        onMouseOver={() => setUserActivity(true)}
        id='map'
        ref={divRef}
        style={{ width: '70%', height: '50%', position: 'absolute' }}
      />
    )
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
