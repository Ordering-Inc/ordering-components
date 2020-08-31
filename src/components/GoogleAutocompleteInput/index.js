import React, { useEffect, useRef } from 'react'
import PropTypes, { string } from 'prop-types'
import { pickBy } from 'lodash'
import { WrapperGoogleMaps } from '../WrapperGoogleMaps'

/**
 * Component to make an input with Google Autocomplete
 * @param {object} props Props of AutocompleteInput component
 */
const AutocompleteInput = (props) => {
  const {
    googleReady,
    onChangeAddress,
    types,
    fields,
    countryCode,
    childRef
  } = props

  const inputRef = useRef()

  const inputProps = pickBy(props, (value, key) => {
    return ['googleReady', 'apiKey', 'onChangeAddress', 'countryCode', 'childRef'].indexOf(key) === -1
  })

  const options = {
    types: types,
    fields: fields
  }

  if (countryCode !== '*') {
    options.componentRestrictions = {
      country: countryCode
    }
  }

  useEffect(() => {
    if (googleReady && onChangeAddress) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, options)
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace()
        onChangeAddress({
          address: place.formatted_address,
          location: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          },
          utc_offset: place.utc_offset_minutes,
          map_data: {
            library: 'google',
            place_id: place.place_id
          }
        })
      })
    }
  }, [googleReady])

  return (
    <input
      {...inputProps}
      disabled={!props.googleReady}
      ref={(e) => {
        inputRef.current = e
        childRef && childRef(e)
      }}
    />
  )
}

AutocompleteInput.propTypes = {
  /**
   * You Google Maps api key
   * @see apiKey What is Api Key ? https://developers.google.com/maps/gmp-get-started
   */
  apiKey: PropTypes.string.isRequired,
  /**
   * Fields for Google autocomplete
   * @see fields https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions.fields
   */
  fields: PropTypes.arrayOf(string),
  /**
   * types for Google autocomplete
   * @see types https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions.types
   */
  types: PropTypes.arrayOf(string),
  /**
   * types for Google autocomplete
   * @see countryCode https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#ComponentRestrictions.country
   */
  countryCode: PropTypes.string,
  /**
   * Function to get address when this changed
   * @param {object} address New address
   */
  onChangeAddress: PropTypes.func
}

AutocompleteInput.defaultProps = {
  types: [],
  fields: ['place_id', 'formatted_address', 'geometry', 'utc_offset_minutes'],
  countryCode: '*'
}

export const GoogleAutocompleteInput = WrapperGoogleMaps(AutocompleteInput)
