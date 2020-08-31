import React from 'react'

export const AddressDetailsUI = (props) => {
  const {
    userAddress,
    orderType,
    googleMapsUrl,
    location,
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

      <p className='title'><strong>Address</strong></p><br />
      <img src={googleMapsUrl} alt='google-maps-location' width='700' height='260' />
      <p>{userAddress}</p>
      {orderType === 1 && (
        <>
          <p>Other</p>
          <button>Change</button>
        </>
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
