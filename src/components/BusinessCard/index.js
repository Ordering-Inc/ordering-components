import React from 'react'
import PropTypes from 'prop-types'

const BusinessCard = (props) => {
  const {
    name,
    todayOpenHour,
    todayOpenMinutes,
    todayCloseHour,
    todayCloseMinutes,
    minimum,
    deliveryPrice,
    description,
    distance,
    deliveryTime,
    reviews
  } = props

  return (
    <div className='biz-card'>
      <div className='card-body'>
        <h4 className='name'>{name}</h4>
        <p className='opening-hours'>{`${todayOpenHour}:${todayOpenMinutes} - ${todayCloseHour}:${todayCloseMinutes}`}</p>
        <p className='minimum-order'> Minimum Order: ${minimum}</p>
        <p className='delivery-fee'> Delivery Fee: ${deliveryPrice}</p>
        <p className='description'> Description: {description}</p>
        <p className='distance'> Distance: {distance} KM</p>
        <p className='delivery-time'> Delivery Time: {deliveryTime}</p>
        <p className='reviews'> Reviews: {reviews} ratings</p>
      </div>

    </div>
  )
}

BusinessCard.propTypes = {
  name: PropTypes.string,
  todayOpenHour: PropTypes.string,
  todayOpenMinutes: PropTypes.string,
  todayCloseHour: PropTypes.string,
  todayCloseMinutes: PropTypes.string,
  minimum: PropTypes.number,
  deliveryPrice: PropTypes.number,
  description: PropTypes.string,
  deliveryTime: PropTypes.string,
  reviews: PropTypes.number
}

export default BusinessCard
