import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

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

  /**
   * loading script for the google's api
   */
  const insertGapiScript = () => {
    const js = window.document.createElement('script')
    js.id = 'google-login'
    js.src = 'https://apis.google.com/js/api.js'
    js.async = true
    js.defer = true
    js.onload = () => {
      initializeGoogleSignIn()
    }
    window.document.body.appendChild(js)
  }

  /**
   * Start Login google
   */
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

  /**
   * handling response of google
   * @param {EventTarget} e Click button event
   */
  const signIn = (e) => {
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

  /**
   * Function that return token of the user
   * @param {object} result from Google
   */
  const handleSigninSuccess = async (res) => {
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

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          signIn={signIn}
        />
      )}
    </>
  )
}

GoogleLoginButton.propTypes = {
  /**
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  ordering: PropTypes.object.isRequired,
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
    * property to get response code if type "code"
    */
  responseType: PropTypes.string,
  /**
     * Function to get login with google success event
     * @param {object} user User logged
     */
  handleSuccessGoogleLogin: PropTypes.func,
  /**
     * handling response of google
     * @param {Object} result google response when the result is success
     */
  onSuccess: PropTypes.func,
  /**
     * handling response of google
     * @param {Object} result google response when the result is error
     */
  onFailure: PropTypes.func,
  /**
     * handling response of google
     * google response when the user is logging
     */
  onRequest: PropTypes.func,
  /**
   * loading script for the google's api
   */
  insertGapiScript: PropTypes.func,
  /**
   * Start Login google
   */
  initializeGoogleSignIn: PropTypes.func,
  /**
   * handling response of google
   */
  signIn: PropTypes.func,
  /**
   * Function that return token of the user
   */
  handleSigninSuccess: PropTypes.func,
  /**
   * Components types before Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

GoogleLoginButton.defaultProps = {
  responseType: '',
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
