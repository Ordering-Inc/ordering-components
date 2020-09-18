import React from 'react'

export const SingleProductCardUI = (props) => {
  const {
    isSoldOut,
    images,
    name,
    description,
    price,
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

      <div style={{ border: '1px solid gray', width: '300px', padding: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', marginRight: '10px' }}>
        {isSoldOut && <span style={{ background: 'black', color: 'white' }}>Sold Out</span>}<br />
        <img src={images} alt={name} height='60' width='60' />
        <span>{name}</span>
        <span>{description}</span>
        <span style={{ color: 'green' }}>${price}</span>
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
