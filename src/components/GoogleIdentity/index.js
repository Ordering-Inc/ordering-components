import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'

export const GoogleIdentityButton = (props) => {
  const {
    UIComponent,
    handleSuccessGoogleLogin,
    handleGoogleLoginClick
  } = props

  const [ordering] = useApi()
  const [formState, setFormState] = useState({
    loading: false,
    result: { error: false }
  })

  useEffect(() => {
    const element = document.getElementById('google-identity')
    if (element) {
      element.parentNode.removeChild(element)
    }
    insertGapiScript()
  }, [])

  /**
   * loading script for the google's api
   */
  const insertGapiScript = () => {
    const js = window.document.createElement('script')
    js.id = 'google-identity'
    js.src = 'https://accounts.google.com/gsi/client'
    js.async = true
    js.defer = true
    window.document.body.appendChild(js)
  }

  /**
   * Function that return token of the user
   * @param {object} res from Google
   */
  const handleSigninSuccess = async (token) => {
    if (handleGoogleLoginClick) {
      handleGoogleLoginClick(token)
      return
    }
    // login with backend
    try {
      setFormState({ ...formState, loading: true })
      const response = await ordering
        .users()
        .authGoogle({ access_token: token })
      setFormState({
        result: response.content,
        loading: false
      })
      if (!response.content.error) {
        if (handleSuccessGoogleLogin) {
          handleSuccessGoogleLogin(response.content.result)
        }
      } else {
        setFormState({
          result: {
            error: true,
            result: response.content
          },
          loading: false
        })
      }
    } catch (err) {
      setFormState({
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          handleSigninSuccess={handleSigninSuccess}
        />
      )}
    </>
  )
}

GoogleIdentityButton.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * property to get response code if type "code"
   */
  handleSuccessGoogleLogin: PropTypes.func,
  /**
   * loading script for the google's api
   */
  insertGapiScript: PropTypes.func,
  /**
   * Function that return token of the user
   */
  handleSigninSuccess: PropTypes.func,
  /**
   * @param {google_response} res
   * handleCustomClick, function to get click event and return google response without default behavior
   */
  handleGoogleLoginClick: PropTypes.func,
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

GoogleIdentityButton.defaultProps = {
  responseType: '',
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
