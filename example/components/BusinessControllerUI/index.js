import React from 'react'

export const BusinessControllerUI = (props) => {
  const {
    orderState,
    isBusinessClose,
    getBusinessOffer,
    business,
    formatDate,
    formatNumber,
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

      {business && business.id ? (
        <div style={{ border: '1px solid gray', width: '300px', padding: '10px 20px' }} className='single-business-card' onClick={() => handleClick(business)}>
          <br />
          {business.featured && (
            <span style={{ border: '1px solid green', width: '30px', background: 'green', color: 'white' }}>FEATURED</span>
          )}<br />
          {isBusinessClose && (
            <span style={{ border: '1px solid gray', width: '30px', background: 'gray' }}>CLOSE</span>
          )}<br />
          {getBusinessOffer(business.offers) && (
            <span style={{ border: '1px solid gray', width: '30px', background: 'green', color: 'white' }}>{getBusinessOffer(business.offers)}</span>
          )}
          <br />
          <br />
          <img
            src={business.header}
            alt='logo'
            width='285'
            height='125'
          />
          <img
            src={business.logo}
            alt='logo'
            width='70'
            height='70'
          />
          <h1>{business.name}</h1>
          <p>{formatDate(business?.today?.lapses[0]?.open)} - {formatDate(business?.today?.lapses[0]?.close)}</p>
          <p>Minimun order: ${business.minimum}.00</p>
          <p>Delivery Fee: ${business.deliveryPrice}.00</p>
          <p>Description: {business.description}</p>
          <p>Distance: {formatNumber(business.distance) || 0} KM</p>
          {orderState.options.type === 1 ? (
            <p>Delivery time: {business.delivery_time}</p>
          ) : (
            <p>Pickup time: {business.pickup_time}</p>
          )}
          {Array(parseInt(business.reviews?.total)).fill(1).map((el, i) =>
            <i key={i}>⭐</i>
          )}
          &nbsp;{business.reviews?.total} ratings
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
