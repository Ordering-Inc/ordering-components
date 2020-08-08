import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useBusiness } from '../../../src/contexts/BusinessContext'

export const SingleBusinessCardUI = ({
  currentTime,
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
  const [isBusinessClose, setIsBusinessClose] = useState(false)

  const formatDate = (time) => {
    const formatHour = time.hour < 10 ? `0${time.hour}` : time.hour
    const formatMinute = time.minute < 10 ? `0${time.minute}` : time.minute
    return `${formatHour}:${formatMinute}`
  }

  const formatTimeToClose = formatDate(timeToclose)

  useEffect(() => {
    const currentHour = currentTime.split(':')[0]
    const currentMinute = currentTime.split(':')[1]
    const hour = formatTimeToClose.split(':')[0]
    const minute = formatTimeToClose.split(':')[1]

    const result = currentHour > hour || (currentHour === hour && currentMinute >= minute)
    setIsBusinessClose(result)
  }, [currentTime])

  return (
    <>
      <div className='single-business-card'>
        <br />
        <span>{isBusinessClose && 'Close'}</span>
        <img
          src={logo}
          alt='logo'
          width='70'
          height='70'
        />
        <h1>{name}</h1>
        <p>{`${formatDate(timetoOpen)} - ${formatDate(timeToclose)}`}</p>
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
  currentTime: PropTypes.string,
  logo: PropTypes.string,
  name: PropTypes.string,
  timetoOpen: PropTypes.object,
  timeToclose: PropTypes.object,
  minimum: PropTypes.number,
  deliveryPrice: PropTypes.number,
  description: PropTypes.string,
  distance: PropTypes.number,
  deliveryTime: PropTypes.string,
  pickupTime: PropTypes.string,
  reviews: PropTypes.number
}
