import React from 'react'

export const AppleLoginUI = (props) => {
  const {
    beforeElements,
    beforeComponents,
    afterComponents,
    afterElements
  } = props
  return (
    <>
      {
        beforeElements.map((BeforeElement, i) => (
          <React.Fragment key={i}>
            {BeforeElement}
          </React.Fragment>
        ))
      }
      {
        beforeComponents.map((BeforeComponent, i) => <BeforeComponent key={i} {...props} />)
      }
      {<h2>AppleLogin</h2>}
      {<div id='appleid-signin' data-color='black' data-border='true' data-type='sign in' data-height='30' data-width='140' />}
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
