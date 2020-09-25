import React from 'react'

export const AppleLoginUI = (props) => {
  const {
    beforeElements,
    beforeComponents,
    afterComponents,
    afterElements,
    initLoginApple
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
      {
        <div>
          <img src='https://appleid.cdn-apple.com/appleid/button' onClick={() => initLoginApple()} />
        </div>
      }
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
