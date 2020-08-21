import React from 'react'

const BusinessCardUI = (props) => {
  const {
    business,
    decimalAdjust,
    timeAdjust
  } = props

  return (
    <div className='biz-card'>
      <div className='card-body'>
        <h4 className='name'>{business.name}</h4>
        <ul className='opening-hours'>
          {business.today.lapses.map((time, i) =>
            <li key={i}>
              {timeAdjust(time.open.hour)}:{timeAdjust(time.open.minute)} - {timeAdjust(time.close.hour)}:{timeAdjust(time.close.minute)}
            </li>
          )}
        </ul>
        <p className='minimum-order'> Minimum Order: $ {business.minimum}</p>
        <p className='delivery-fee'> Delivery Fee: $ {business.delivery_price}</p>
        <p className='description'> Description: {business.description}</p>
        <p className='distance'> Distance: {decimalAdjust(business.distance)} KM</p>
        <p className='delivery-time'> Delivery Time: {timeAdjust(business.delivery_time)}</p>
        <p className='reviews'> Reviews: {business.reviews.total} ratings</p>
      </div>
    </div>
  )
}

export default BusinessCardUI
