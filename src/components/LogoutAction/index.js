import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'

/**
 * Component to manage logout behavior without UI component
 */
export const LogoutAction = (props) => {
  const {
    ordering,
    UIComponent,
    handleSuccessLogout,
    token,
    useDefualtSessionManager
  } = props

  const [formState, setFormState] = useState({ loading: false, result: { error: false } })

  const [data, dispatchSession] = useSession()

  /**
   * Default fuction for logout workflow
   */
  const handleLogoutClick = async () => {
    try {
      setFormState({ ...formState, loading: true })
      const accessToken = token || data.token
      console.log(accessToken)
      const response = await ordering.users.logout({}, {
        accessToken
      })
      console.log(response)
      setFormState({
        result: response.content,
        loading: false
      })
      if (!response.content.error) {
        if (useDefualtSessionManager) {
          dispatchSession({ type: 'logout' })
        }
        if (handleSuccessLogout) {
          handleSuccessLogout()
        }
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
          handleLogoutClick={handleLogoutClick}
        />
      )}
    </>
  )
}

LogoutAction.propTypes = {
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
  useDefualtSessionManager: PropTypes.bool
}

LogoutAction.defaultProps = {
  useDefualtSessionManager: true
}
