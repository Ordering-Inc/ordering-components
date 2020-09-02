import React from 'react'

export const GoogleLoginUI = (props) => {
  const {
    Login,
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
      {<h2>Google Login</h2>}
      {<Login />}
      {afterComponents.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}
      {afterElements.map((AfterElement, i) => (
        <React.Fragment key={i}>{AfterElement}</React.Fragment>
      ))}
    </>
  )
}
