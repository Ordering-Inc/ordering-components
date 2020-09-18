import React from 'react'

export const ProductShareUI = (props) => {
  const {
    shareButton,
    show,
    url,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props
  return (
    <>
      {beforeElements.map((BeforeElement, i) => (
        <React.Fragment key={i}>{BeforeElement}</React.Fragment>
      ))}

      {beforeComponents.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}
      <button
        onClick={() => shareButton()}
        style={{
          borderRadius: '50%',
          outline: '0',
          border: '0',
          width: '2.5em',
          height: '2.5em',
          color: '#fff'
        }}
      >
        <div
          className='addthis_inline_share_toolbox'
          style={{
            visibility: show ? 'initial' : 'hidden',
            width: '10px',
            padding: '20px'
          }}
          data-url={url}
        />
      </button>
      {afterComponents.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}

      {afterElements.map((AfterElement, i) => (
        <React.Fragment key={i}>{AfterElement}</React.Fragment>
      ))}
    </>
  )
}
