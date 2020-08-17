import React from 'react'

export const BusinessBasicInformationUI = (props) => {
  const {
    business,
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
      <div className='bus-basic'>
        <div className='header'>
          <img src={business.header} alt='header' /><br />
          <img src={business.logo} alt='logo' />
        </div>
        <div className='information-block'>
          <h1>{business.name}</h1>
          <p>{business.today}</p>
          <p>{business.delivery_price}</p>
          <p>{business.minimum}</p>
          <p>{business.description}</p>
          <p>{business.distance}</p>
          <p>{business.delivery_time} || {business.pickup_time}</p>
          <p>{business.reviews?.total}</p>
        </div>
      </div>

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
