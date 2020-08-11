import React from 'react'
import PropTypes from 'prop-types'

const BusinessCard = (props) => {
  const {
    name,
    openingHours,
    minimum,
    deliveryPrice,
    description,
    distance,
    deliveryTime,
    reviews
  } = props

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
    if (value < 10) return `0${value}`
    if (value.length >= 3) {
      return `${timeAdjust(value.split(':')[0])}:${timeAdjust(value.split(':')[1])}`
    };
    return value.toString()
  }

  return (
    <div className='biz-card'>
      <div className='card-body'>
        <h4 className='name'>{name}</h4>
        <ul className='opening-hours'>
          {openingHours.map((time, i) =>
            <li key={i}>
              {timeAdjust(time.open.hour)}:{timeAdjust(time.open.minute)} - {timeAdjust(time.close.hour)}:{timeAdjust(time.close.minute)}
            </li>
          )}
        </ul>
        <p className='minimum-order'> Minimum Order: ${minimum}</p>
        <p className='delivery-fee'> Delivery Fee: ${deliveryPrice}</p>
        <p className='description'> Description: {description}</p>
        <p className='distance'> Distance: {decimalAdjust(distance)} KM</p>
        <p className='delivery-time'> Delivery Time: {timeAdjust(deliveryTime)}</p>
        <p className='reviews'> Reviews: {reviews} ratings</p>
      </div>

    </div>
  )
}

BusinessCard.propTypes = {
  name: PropTypes.string,
  openingHours: PropTypes.array,
  minimum: PropTypes.number,
  deliveryPrice: PropTypes.number,
  description: PropTypes.string,
  deliveryTime: PropTypes.string,
  reviews: PropTypes.number
}

export default BusinessCard
