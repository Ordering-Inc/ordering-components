import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useConfig } from '../../contexts/ConfigContext'

/**
 * Component to manage logout behavior without UI component
 */
export const LogoutAction = (props) => {
  const {
    UIComponent,
    handleSuccessLogout,
    token,
    isNative,
    useDefualtSessionManager,
    handleCustomLogoutClick
  } = props

  const [ordering] = useApi()
  const [formState, setFormState] = useState({ loading: false, result: { error: false } })

  const [data, { logout }] = useSession()
  const [{ configs }] = useConfig()

  useEffect(() => {
    if (configs?.facebook_id?.value && !isNative) {
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: configs?.facebook_id?.value,
          cookie: true,
          xfbml: false,
          version: 'v7.0',
          status: true
        })
      }

      if (window.document.getElementById('facebook-jssdk')) {
        return
      }

      const js = window.document.createElement('script')
      const fjs = window.document.getElementsByTagName('script')[0]
      js.id = 'facebook-jssdk'
      js.async = true
      js.defer = true
      js.src = 'https://connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    }
  }, [configs?.facebook_id?.value])

  useEffect(() => {
    if (configs?.google_login_client_id?.value && !isNative) {
      const js = window.document.createElement('script')
      js.id = 'google-login'
      js.src = 'https://apis.google.com/js/api.js'
      js.async = true
      js.defer = true
      js.onload = () => {
        window.gapi.load('auth2', () => { })
      }
      window.document.body.appendChild(js)

      return () => {
        const element = document.getElementById('google-login')
        if (element) {
          element.parentNode.removeChild(element)
        }
      }
    }
  }, [configs?.google_login_client_id?.value])

  /**
   * Default fuction for logout workflow
   */
  const handleLogoutClick = async (bodyParams) => {
    if (handleCustomLogoutClick) {
      handleCustomLogoutClick && handleCustomLogoutClick()
    }
    try {
      setFormState({ ...formState, loading: true })
      const accessToken = token || data.token
      const body = bodyParams && bodyParams?.notification_token ? {
        notification_app: bodyParams?.notification_app,
        notification_token: bodyParams?.notification_token,
        token_notification: bodyParams?.notification_token,
      } : null
      const funtionFetch = body
        ? ordering.setAccessToken(accessToken).users().logout(body)
        : ordering.setAccessToken(accessToken).users().logout()
      const { content: { error, result } } = await funtionFetch
      if (!error) {
        setFormState({
          result: { error, result },
          loading: false
        })
        if (useDefualtSessionManager) {
          logout()
        }
        if (handleSuccessLogout) {
          handleSuccessLogout()
        }
        return true
      }
      setFormState({
        result: { error, result },
        loading: false
      })
      return false
    } catch (err) {
      setFormState({
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
      return false
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          handleLogoutClick={handleLogoutClick}
        />
      )}
    </>
  )
}

LogoutAction.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Function to get logout success event
   */
  handleSuccessLogout: PropTypes.func,
  /**
   * Function to get logout error event
   */
  handleErrorLogout: PropTypes.func,
  /**
   * Provide token if you use custom session manager
   */
  token: PropTypes.string,
  /**
   * Enable/Disable default session manager
   * Remove user and token with default session manager
   */
  useDefualtSessionManager: PropTypes.bool,
  /**
   * Custom function
   */
  handleCustomLogoutClick: PropTypes.func
}

LogoutAction.defaultProps = {
  useDefualtSessionManager: true
}
