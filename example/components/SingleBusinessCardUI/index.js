import React from 'react'
import { useBusiness } from '../../../src/contexts/BusinessContext'

export const SingleBusinessCardUI = (props) => {
  const [{ filterValues }] = useBusiness()

  return (
    <>
      <div className='single-business-card'>
        <br />
        {/* <span>{props.status}</span> */}
        <h1>{props.name}</h1>
        <p>{`${props.today.lapses[0].open.hour}: ${props.today.lapses[0].open.minute} - ${props.today.lapses[0].close.hour}: ${props.today.lapses[0].close.minute}`}</p>
        <p>Minimun order: ${props.minimum}.00</p>
        <p>Delivery Fee: ${props.delivery_price}.00</p>
        <p>Description: {props.description}</p>
        <p>Distance: {props.distance}</p>
        {filterValues.business_type === 'delivery_time' ? (
          <p>Delivery time: {props.delivery_time}</p>
        ) : (
          <p>Pickup time: {props.pickup_time}</p>
        )}
        <p>Reviews: {props.reviews.total}</p>
        <hr />
      </div>
    </>
  )
}
