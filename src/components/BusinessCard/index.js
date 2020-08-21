import React from 'react'
import PropTypes from 'prop-types'
import BusinessCardUI from '../../../example/components/BusinessCardUI'

/**
 * Component to show every business card without UI component
 */
const BusinessCard = (business) => {
  /**
  * Function for showing only 2 decimal numbers of a float number. It is used for rendering the distances correctly.
  */
  const decimalAdjust = (value) => {
    const integer = value.toString().split('.')[0]
    const decimal = value.toString().split('.')[1].substring(0, 2)
    return parseFloat(`${integer}.${decimal}`)
  }
  /**
  * Function for rendering time values correctly, adding a 0 when the recieved value is minor than 10.
  */
  const timeAdjust = (value) => {
    if (value !== undefined) {
      if (value < 10) return `0${value}`
      if (value.length >= 3) {
        return `${timeAdjust(value.split(':')[0])}:${timeAdjust(value.split(':')[1])}`
      };
      return value.toString()
    }
  }

  const props = {
    business,
    decimalAdjust,
    timeAdjust
  }

  return (
    <>
      {BusinessCardUI && (
        <BusinessCardUI {...props} />
      )}
    </>
  )
}
export default BusinessCard

BusinessCard.propTypes = {
  /**
 * Object that contains all the information about each business
 */
  business: PropTypes.object
}
