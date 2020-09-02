import React, { useState, useEffect } from 'react'

export const GoogleLoginButton = (props) => {
  const {
    ordering,
    UIComponent,
    onSuccess,
    onFailure,
    onRequest,
    responseType,
    handleSuccessGoogleLogin
  } = props
  const [loaded, setLoaded] = useState(false)
  const [unmounted, setUnmounted] = useState(false)

  const handleSigninSuccess = async (res) => {
    /*
      offer renamed response keys to names that match use
    */
    const basicProfile = res.getBasicProfile()
    const authResponse = res.getAuthResponse()
    res.googleId = basicProfile.getId()
    res.tokenObj = authResponse
    res.tokenId = authResponse.id_token
    res.accessToken = authResponse.access_token
    res.profileObj = {
      googleId: basicProfile.getId(),
      imageUrl: basicProfile.getImageUrl(),
      email: basicProfile.getEmail(),
      name: basicProfile.getName(),
      givenName: basicProfile.getGivenName(),
      familyName: basicProfile.getFamilyName()
    }
    console.log('responseGoogle', res)
    const response = await ordering.users().auth(res)
    console.log('responseApi', response)
    handleSuccessGoogleLogin(basicProfile)
    onSuccess(res)
  }

  function signIn (e) {
    if (e) {
      e.preventDefault() // to prevent submit if used within form
    }
    if (loaded) {
      const GoogleAuth = window.gapi.auth2.getAuthInstance()
      const options = {
        apiKey: 'AIzaSyB-aDD3TIBR5tBCNM-lb1u0jadsaY-LIjs',
        client_id:
          '813628525689-v00sl2nrfdg1rnj79pqh994rvkkq0glt.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile'
      }
      onRequest()
      if (responseType === 'code') {
        GoogleAuth.grantOfflineAccess(options).then(
          (res) => onSuccess(res),
          (err) => onFailure(err)
        )
      } else {
        GoogleAuth.signIn(options).then(
          (res) => handleSigninSuccess(res),
          (err) => onFailure(err)
        )
      }
    }
  }

  useEffect(() => {
    insertGapiScript()
    return () => {
      setUnmounted(true)
      const element = document.getElementById('google-login')
      if (element) {
        element.parentNode.removeChild(element)
      }
    }
  }, [])

  const insertGapiScript = () => {
    const js = window.document.createElement('script')
    js.id = 'google-login'
    js.src = 'https://apis.google.com/js/api.js'
    js.async = true
    js.defer = true
    js.onload = () => {
      initializeGoogleSignIn()
    }
    window.document.head.appendChild(js)
  }

  const initializeGoogleSignIn = () => {
    window.gapi.load('auth2', () => {
      const GoogleAuth = window.gapi.auth2.getAuthInstance()
      if (!GoogleAuth) {
        window.gapi.auth2
          .init({
            apiKey: 'AIzaSyB-aDD3TIBR5tBCNM-lb1u0jadsaY-LIjs',
            client_id:
              '813628525689-v00sl2nrfdg1rnj79pqh994rvkkq0glt.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
            scope: 'profile'
          })
          .then(
            async (res) => {
              if (!unmounted) {
                setLoaded(true)
                const signedIn = res.isSignedIn.get()
                if (signedIn) {
                  handleSigninSuccess(res.currentUser.get())
                }
              }
            },
            (err) => {
              setLoaded(true)
              console.log(err)
            }
          )
      } else if (GoogleAuth.isSignedIn.get()) {
        setLoaded(true)
        handleSigninSuccess(GoogleAuth.currentUser.get())
      } else if (!unmounted) {
        setLoaded(true)
      }
    })
  }
  const GoogleButton = () => <button onClick={signIn}>Login</button>

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          Login={GoogleButton}
        />
      )}
    </>
  )
}
