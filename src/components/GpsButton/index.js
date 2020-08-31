import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { WrapperGoogleMaps } from '../WrapperGoogleMaps'

/**
 * Component to get information from GPS
 * @param {object} props Props of GpsButton component
 */
export const GpsButton = (props) => {
  const {
    googleReady,
    onData,
    onError,
    onAddress
  } = props

  const [loading, setLoading] = useState(false)
  const isGoogleButton = typeof googleReady !== 'undefined'

  /**
   * Function to get location from GPS
   */
  const handleGPS = () => {
    if ((isGoogleButton && !googleReady) || loading) {
      return
    }
    setLoading(true)
    navigator.geolocation.getCurrentPosition((geo) => {
      const location = {
        lat: geo.coords.latitude,
        lng: geo.coords.longitude
      }
      if (isGoogleButton && onAddress) {
        const geocoder = new window.google.maps.Geocoder()
        geocoder.geocode({ location }, (results, status) => {
          setLoading(false)
          if (status === 'OK') {
            onAddress({
              address: results[0].formatted_address,
              location,
              utc_offset: (new Date()).getTimezoneOffset(),
              map_data: {
                library: 'google',
                place_id: results[0].place_id
              }
            })
          } else {
            onError(new Error('Error to get reault'))
          }
        })
      } else {
        setLoading(false)
        onData && onData({
          location,
          utc_offset: (new Date()).getTimezoneOffset()
        })
      }
    }, (err) => {
      setLoading(false)
      onError(new Error(err.message))
    }, {
      timeout: 5000,
      enableHighAccuracy: true
    })
  }

  return (
    navigator.geolocation && <button type='button' onClick={handleGPS} disabled={(isGoogleButton && !googleReady) || loading}>GPS</button>
  )
}

GpsButton.propTypes = {
  /**
   * Function to get data from GPS
   * @param {object} data New address
   */
  onData: PropTypes.func,
  /**
   * Function to get error from GPS
   * @param {object} address New address
   */
  onError: PropTypes.func
}

export const GoogleGpsButton = WrapperGoogleMaps(GpsButton)

GoogleGpsButton.propTypes = {
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
