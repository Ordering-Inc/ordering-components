import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useEvent } from '../../contexts/EventContext'

export const BusinessMap = (props) => {
  const { UIComponent, businessList, userLocation } = props

  const [events] = useEvent()
  const [activeMap, setActiveMap] = useState(false)
  const [businessLocations, setBusinessLocations] = useState([])

  const toggleMap = () => {
    setActiveMap(!activeMap)
  }

  const getBusinessListLocations = () => {
    setBusinessLocations(businessList.map(business => {
      return {
        lat: business.location.lat,
        lng: business.location.lng,
        icon: business.logo,
        slug: business.slug
      }
    }))
  }

  const onBusinessClick = (slug) => {
    events.emit('go_to_page', { page: 'business', params: { store: slug } })
  }

  useEffect(() => {
    getBusinessListLocations()
  }, [businessList])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          toggleMap={toggleMap}
          activeMap={activeMap}
          businessLocations={businessLocations}
          userLocation={userLocation}
          onBusinessClick={onBusinessClick}
        />
      )}
    </>
  )
}

BusinessMap.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   *  Business list must contain location
   */
  businessList: PropTypes.array.isRequired,
  /**
    * User location is used for place center of the map
    */
  userLocation: PropTypes.object,
  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after order details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessMap.defaultProps = {
  businessList: [],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
