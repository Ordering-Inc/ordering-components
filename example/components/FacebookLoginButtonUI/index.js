import React from 'react'

export const FacebookLoginButtonUI = (props) => {
  const {
    formState,
    facebookStatus,
    handleFacebookLogin,
    handleFacebookLogout,
    beforeComponents,
    afterComponents,
    beforeElements,
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
      {
        !facebookStatus.logged && <button type='button' onClick={handleFacebookLogin} disabled={!facebookStatus.ready || formState.loading}>Login with Facebook</button>
      }
      {
        facebookStatus.logged && <button type='button' onClick={handleFacebookLogout} disabled={!facebookStatus.ready || formState.loading}>Logout with Facebook</button>
      }
      {
        !formState.loading && formState.result && formState.result.error && <p style={{ color: '#c10000' }}>{formState.result.result}</p>
      }
      {
        afterComponents.map((AfterComponent, i) => <AfterComponent key={i} {...props} />)
      }
      {
        afterElements.map((AfterElement, i) => (
          <React.Fragment key={i}>
            {AfterElement}
          </React.Fragment>
        ))
      }
    </>
  )
}
