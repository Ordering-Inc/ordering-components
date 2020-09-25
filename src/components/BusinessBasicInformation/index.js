import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { CancelToken } from 'ordering-api-sdk'

export const BusinessBasicInformation = (props) => {
  const {
    UIComponent,
    businessParams
  } = props

  const [ordering] = useApi()
  const [business, setBusiness] = useState([])
  const requestsState = {}

  /**
   * Method to get business from SDK
   */
  const getBusiness = async () => {
    const source = CancelToken.source()
    requestsState.business = source
    return await ordering.businesses().select(businessParams).parameters({ location: '40.7539143,-73.9810162', type: 1 }).get({ cancelToken: source.token })
  }

  /**
   * Method to call business get method
   */
  const loadBusiness = async () => {
    try {
      const { response } = await getBusiness()
      setBusiness(response.data?.result[1])
    } catch (err) {
    }
  }

  useEffect(() => {
    loadBusiness()
    return () => {
      if (requestsState.business) {
        requestsState.business.cancel()
      }
    }
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
  businessParams: PropTypes.arrayOf(string),
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
  businessParams: ['header', 'logo', 'name', 'today', 'delivery_price', 'minimum', 'description', 'distance', 'delivery_time', 'pickup_time', 'reviews'],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
