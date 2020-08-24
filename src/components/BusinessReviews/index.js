import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const BusinessReviews = (props) => {
  const {
    ordering,
    reviews,
    UIComponent
  } = props

  /**
   * BusinessRevies, this must be contain a reviews array to send UIComponent
   */
  const [businessReviews, setBusinessReviews] = useState(reviews)

  /**
   * ReviewsList, this must be contain an original array of business reviews
   */
  const [reviewsList, setReviewsList] = useState([])

  /**
   * Method to change filter value for business reviews
   * @param {Number} val
   */
  const onChangeOption = (val = null) => {
    const reviewsFiltered = val
      ? reviewsList.filter(review => review.total >= val && review.total < val + 1)
      : reviewsList
    setBusinessReviews(reviewsFiltered)
  }

  /**
   * Method to get business from SDK
   */
  const getBusiness = async () => {
    const { response } = await ordering.businesses().select(['reviews']).parameters({ location: '40.7539143,-73.9810162', type: 1 }).get()
    const list = response.data?.result[0]?.reviews?.reviews
    reviews.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at)
    })
    setReviewsList(list)
    setBusinessReviews(list)
  }

  useEffect(() => {
    if (!reviews.length) {
      getBusiness()
    }
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          reviews={businessReviews}
          handleClickOption={onChangeOption}
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
