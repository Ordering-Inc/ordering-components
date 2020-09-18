import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'

export const BusinessBasicInformation = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [business, setBusiness] = useState([])

  /**
   * Method to get business from SDK
   */
  const getBusiness = async () => {
    const params = ['header', 'logo', 'name', 'today', 'delivery_price', 'minimum', 'description', 'distance', 'delivery_time', 'pickup_time', 'reviews']
    return await ordering.businesses().select(params).parameters({ location: '40.7539143,-73.9810162', type: 1 }).get()
  }

  /**
   * Method to call business get method
   */
  const loadBusiness = async () => {
    const { response } = await getBusiness()
    setBusiness(response.data?.result[1])
  }

  useEffect(() => {
    loadBusiness()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          business={business}
        />
      )}
    </>
  )
}

BusinessBasicInformation.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Contain basic information for a business
   */
  business: PropTypes.object,
  /**
   * Components types before Business basic information
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Business basic information
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Business basic information
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Business basic information
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessBasicInformation.defaultProps = {
  business: {},
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
