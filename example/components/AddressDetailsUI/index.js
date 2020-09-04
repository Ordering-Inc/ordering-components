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
      <div style={{ display: 'flex' }}>
        <h3 style={{ margin: '0px 5px 10px 0px' }}>
          <strong>{userAddress}</strong>
        </h3>
        <div>
          {orderType === 1 && <button>✏️</button>}
        </div>
      </div>
      <img src={googleMapsUrl} alt='google-maps-location' width='700' height='260' />

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
