import React from 'react'

import { useOrder } from '../../../src/contexts/OrderContext'

export const BusinessControllerUI = (props) => {
  const [{ order }] = useOrder()
  const {
    isBusinessFeatured,
    isBusinessClose,
    offerToShow,
    business,
    id,
    header,
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
    reviews,
    handleClick,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  return (
    <>
      {beforeElements.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}

      {beforeComponents.map(
        (BeforeComponent, i) => <BeforeComponent key={i} {...props} />
      )}

      {id ? (
        <div style={{ border: '1px solid gray', width: '300px', padding: '10px 20px' }} className='single-business-card' onClick={() => handleClick(business)}>
          <br />
          {isBusinessFeatured && (
            <span style={{ border: '1px solid green', width: '30px', background: 'green', color: 'white' }}>FEATURED</span>
          )}<br />
          {isBusinessClose && (
            <span style={{ border: '1px solid gray', width: '30px', background: 'gray' }}>CLOSE</span>
          )}<br />
          {offerToShow && (
            <span style={{ border: '1px solid gray', width: '30px', background: 'green' }}>{offerToShow}</span>
          )}
          <br />
          <br />
          <img
            src={header}
            alt='logo'
            width='285'
            height='125'
          />
          <img
            src={logo}
            alt='logo'
            width='70'
            height='70'
          />
          <h1>{name}</h1>
          <p>{timetoOpen} - {timeToclose}</p>
          <p>Minimun order: ${minimum}.00</p>
          <p>Delivery Fee: ${deliveryPrice}.00</p>
          <p>Description: {description}</p>
          <p>Distance: {distance} KM</p>
          {order.type === 1 ? (
            <p>Delivery time: {deliveryTime}</p>
          ) : (
            <p>Pickup time: {pickupTime}</p>
          )}
          {Array(parseInt(reviews)).fill(1).map((el, i) =>
            <i key={i}>⭐</i>
          )}
          &nbsp;{reviews} ratings
        </div>
      ) : (
        <div style={{ border: '1px solid gray', width: '300px', padding: '10px 20px' }} className='single-business-card'>
          &nbsp;
        </div>
      )}

      {afterComponents.map(
        (AfterComponent, i) => <AfterComponent key={i} {...props} />
      )}

      {afterElements.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}
