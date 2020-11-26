import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const InputPhoneNumber = (props) => {
  const {
    value,
    UIComponent
  } = props

  const [countryData, setCountryData] = useState({ loading: !value, value: null })

  /**
   * Function to get country code based on user IP
   */
  const getCountryCode = async () => {
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()
    setCountryData({
      ...countryData,
      loading: false,
      value: data?.country_code ?? 'US'
    })
  }

  useEffect(() => {
    if (!value) {
      getCountryCode()
    }
  }, [value])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          countryData={countryData}
        />
      )}
    </>
  )
}

InputPhoneNumber.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * default value from parent component
   */
  value: PropTypes.any
}

InputPhoneNumber.defaultProps = {}
