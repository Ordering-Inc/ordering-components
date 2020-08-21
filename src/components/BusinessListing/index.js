import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * Component to show the businesses list without UI component
 */
export const BusinessListing = (props) => {
  const { UIComponent } = props
  const [businesses, setBusinesses] = useState([])

  useEffect(() => {
    const getBusinesses = async () => {
      try {
        const resource = await window.fetch('https://apiv4.ordering.co/v400/en/demo/business?type=1&location=40.7539143,-73.9810162&params=name,slug,logo,header,location,description,food,alcohol,groceries,laundry,zones,delivery_price,minimum,schedule,featured,reviews,about,delivery_time,pickup_time,offers')
        const businesses = await resource.json()
        setBusinesses(businesses.result)
      } catch (error) {
        console.log(error)
      }
    }
    getBusinesses()
  }, [])
  return (
    <>
      {UIComponent && (
        <UIComponent {...{ businesses }} />
      )}
    </>
  )
}

BusinessListing.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}
