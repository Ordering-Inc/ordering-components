import React from 'react'
import AppleLogin from 'react-apple-login'

export const AppleLoginUI = () => {
  return (
    <>
    {<h2>AppleLogin</h2>}
      <AppleLogin clientId="com.react.apple.login" redirectURI="https://redirectUrl.com" />
    </>
  )
}
