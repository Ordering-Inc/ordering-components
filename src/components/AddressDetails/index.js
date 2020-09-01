import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../../src/contexts/OrderContext'
import { useSession } from '../../../src/contexts/SessionContext'

export const AddressDetails = (props) => {
  const {
    apiKey,
    ordering,
    UIComponent
  } = props
  const [orderState] = useOrder()
  const [{ user }] = useSession()

  const [location, setLocation] = useState(null)

  const getBusiness = async () => {
    const { content: { result } } = await ordering.businesses(props.businessId).select(['location']).get()
    setLocation(result.location)
  }

  const formatUrl = (location) => {
    return orderState.options.type === 1
      ? `https://maps.googleapis.com/maps/api/staticmap?size=500x190&center=${user?.location?.lat},${user?.location?.lng}&zoom=17&scale=2&maptype=roadmap&&markers=icon:https://res.cloudinary.com/ditpjbrmz/image/upload/f_auto,q_auto,w_45,q_auto:best,q_auto:best/v1564675872/marker-customer_kvxric.png%7Ccolor:white%7C${user?.location?.lat},${user?.location?.lng}&key=${apiKey}`
      : `https://maps.googleapis.com/maps/api/staticmap?size=500x190&scale=2&maptype=roadmap&markers=icon:https://res.cloudinary.com/ditpjbrmz/image/upload/f_auto,q_auto,w_45,q_auto:best,q_auto:best/v1564675872/marker-customer_kvxric.png%7Ccolor:white%7C${user?.location?.lat},${user?.location?.lng}&markers=icon:https://res.cloudinary.com/ordering2/image/upload/f_auto,q_auto,w_45,h_45,q_auto:best,q_auto:best,r_max,bo_3px_solid_gray/v1562277711/bk6kvzrnfkvqgav9qi7j.png%7Ccolor:white%7C${location?.lat},${location?.lng}&key=${apiKey}`
  }

  useEffect(() => {
    if (props.location) {
      setLocation(props.location)
    } else {
      getBusiness()
    }
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          googleMapsUrl={formatUrl(location)}
          location={location}
          userAddress={user?.address}
          orderType={orderState.options.type}
        />
      )}
    </>
  )
}

AddressDetails.propTypes = {
  /**
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  ordering: PropTypes.object.isRequired,
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * location, business location with lat, lng and zoom properties
   */
  business: PropTypes.object,
  /**
   * business, object with business info, should be contains address and locations property
   */
  businessId: PropTypes.number,
  /**
   * Components types before Address Details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Address Details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Address Details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Address Details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

AddressDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
