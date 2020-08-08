import React from 'react'
import PropTypes from 'prop-types'
import { useBusiness } from '../../../src/contexts/BusinessContext'

export const SingleBusinessCardUI = ({
  logo,
  name,
  timetoOpen,
  timeToclose,
  minimum,
  deliveryPrice,
  description,
  distance,
  deliveryTime,
  pickupTime,
  reviews
}) => {
  const [{ filterValues }] = useBusiness()

  return (
    <>
      <div className='single-business-card'>
        <br />
        {/* <span>{props.status}</span> */}
        <img
          src={logo}
          alt='logo'
          width='70'
          height='70'
        />
        <h1>{name}</h1>
        <p>{`${timetoOpen} - ${timeToclose}`}</p>
        <p>Minimun order: ${minimum}.00</p>
        <p>Delivery Fee: ${deliveryPrice}.00</p>
        <p>Description: {description}</p>
        <p>Distance: {distance} KM</p>
        {filterValues.business_type === 'delivery_time' ? (
          <p>Delivery time: {deliveryTime}</p>
        ) : (
          <p>Pickup time: {pickupTime}</p>
        )}
        <p>Reviews: {reviews.total}</p>
        <hr />
      </div>
    </>
  )
}

SingleBusinessCardUI.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
  timetoOpen: PropTypes.string,
  timeToclose: PropTypes.string,
  minimum: PropTypes.number,
  deliveryPrice: PropTypes.number,
  description: PropTypes.string,
  distance: PropTypes.number,
  deliveryTime: PropTypes.string,
  pickupTime: PropTypes.string,
  reviews: PropTypes.number
}
