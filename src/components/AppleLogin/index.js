import React, { useEffect } from 'react'

export const AppleLogin = (props) => {
  const { UIComponent } = props

  useEffect(() => {
    console.log(window.AppleID)
    window.AppleID.auth.init({
      clientId: 'co.ordering.logintest',
      redirectURI: 'https://example-app.com/redirect',
      scope: 'email',
      usePopup: true
    })

    fetchData()
  })

  const fetchData = async () => {
    try {
      const data = await window.AppleID.auth.signIn()
      console.log(data)
    } catch (err) {
      console.log('error', err)
    }
  }

  /* const createScript = () => {
    const js = window.document.createElement('script')
    js.src = "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"
    js.async = true
    js.defer = true
    window.document.body.appendChild(js)
    console.log(window.AppleID)
  } */

  return (
    <>
      {UIComponent && <UIComponent {...props} />}
    </>
  )
}
