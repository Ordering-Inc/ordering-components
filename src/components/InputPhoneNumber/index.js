import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useConfig } from '../../contexts/ConfigContext'

export const InputPhoneNumber = (props) => {
  const {
    value,
    UIComponent
  } = props

  const [{ configs }] = useConfig()
  const [countryData, setCountryData] = useState({
    loading: value !== null && (!value || (value && value?.includes('null'))),
    value: null,
    number: null
  })

  /**
   * Function to get country code based on user IP
   */
  const getCountryCode = async () => {
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()
    setCountryData({
      ...countryData,
      loading: false,
      value: data?.country_code || configs?.countryDefaultCode?.code || 'US',
      number: value && value?.includes('null')
        ? data?.country_calling_code || configs?.countryDefaultCode?.calling_number || '+1'
        : null
    })
  }

  useEffect(() => {
    if (value !== null && (!value || (value && value?.includes('null')))) {
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
