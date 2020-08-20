import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const BusinessReviews = (props) => {
  const {
    ordering,
    reviews,
    UIComponent
  } = props

  const [reviewsToSend, setReviewsToSend] = useState(reviews)

  const getBusiness = async () => {
    const { response } = await ordering.businesses().select(['reviews']).parameters({ location: '40.7539143,-73.9810162', type: 1 }).get()
    const reviews = response.data?.result[0]?.reviews?.reviews
    reviews.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at)
    })
    setReviewsToSend(reviews)
  }

  useEffect(() => {
    getBusiness()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          reviews={reviewsToSend}
        />
      )}
    </>
  )
}

BusinessReviews.propTypes = {
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
   * Reviews, this array must be containt all info about business reviews
   */
  reviews: PropTypes.arrayOf(PropTypes.object),
  /**
   * Components types before business reviews
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business reviews
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business reviews
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business reviews
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessReviews.defaultProps = {
  reviews: [],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
