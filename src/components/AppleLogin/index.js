import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

export const AppleLogin = (props) => {
  const { UIComponent, initParams, onSuccess, onFailure } = props

  useEffect(() => {
    if (window.document.getElementById('apple-login')) {
      return
    }
    document.addEventListener('AppleIDSignInOnSuccess', (data) => {
      onSuccess(data)
    })
    document.addEventListener('AppleIDSignInOnFailure', (error) => {
      onFailure(error)
    })
    createScriptApple()

    return () => {
      document.removeEventListener('AppleIDSignInOnSuccess')
      document.removeEventListener('AppleIDSignInOnFailure')
    }
  }, [])

  /**
   * loading script of de Apple login sdk
   */
  const createScriptApple = () => {
    const js = window.document.createElement('script')
    js.id = 'apple-login'
    js.src =
      'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js'
    js.async = true
    js.defer = true

    window.document.body.appendChild(js)
    console.log(window.AppleID)
  }

  /**
   * start Login Apple
   */
  const initLoginApple = () => {
    window.AppleID.auth.init(initParams)

    handleLoginApple()
    console.log(window.AppleID)
  }

  /**
   * handilng the response of login apple when login
   */
  const handleLoginApple = async () => {
    try {
      const data = await window.AppleID.auth.signIn()
      console.log(data)
    } catch (err) {
      console.log('error', err)
    }
  }

  return <>{UIComponent && <UIComponent {...props} initLoginApple={initLoginApple} />}</>
}

AppleLogin.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * loading script of de Apple login sdk
   */
  createScriptApple: PropTypes.func,
  /**
   * start Login Apple
   */
  initLoginApple: PropTypes.func,
  /**
   * handilng the response of login apple when login
   */
  handleLoginApple: PropTypes.func,
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

AppleLogin.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
