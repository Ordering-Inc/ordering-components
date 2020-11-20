import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const InputPhoneNumber = (props) => {
  const {
    UIComponent
  } = props

  const [countryData, setCountryData] = useState({ loading: true, value: null })

  /**
   * Function to get country code based on user IP
   */
  const getCountryCode = async () => {
    const response = await fetch('http://ip-api.com/json/?fields=status,countryCode')
    const { status, countryCode } = await response.json()
    setCountryData({
      ...countryData,
      loading: false,
      value: status === 'success' ? countryCode : 'US'
    })
  }

  useEffect(() => {
    getCountryCode()
  }, [])

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
   * Components types before input phone number
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after input phone number
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before input phone number
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after input phone number
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

InputPhoneNumber.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
