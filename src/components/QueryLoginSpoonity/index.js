import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useEvent } from '../../contexts/EventContext'
import { useOrder } from '../../contexts/OrderContext'

/**
 * Component to manage query login behavior without UI component
 */
export const QueryLoginSpoonity = (props) => {
  const {
    UIComponent,
    token
  } = props

  const [ordering] = useApi()
  const [{ auth }, { login }] = useSession()
  const [events] = useEvent()
  const [, { setStateValues }] = useOrder()
  let querylat
  let querylng
  const [userState, setUserState] = useState({ loading: true, user: {}, error: null })

  if (location.search) {
    const query = new URLSearchParams(location.search)
    querylat = query.get('lat')
    querylng = query.get('lng')
  }
  /**
   * Method to get the user from token
   */
  const handleGetUser = async () => {
    try {
      setUserState({ ...userState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          spoonity_token: token
        })
      }
      const response = await fetch(`${ordering.root}/auth/spoonity`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        login({
          user: result,
          token: result?.session?.access_token
        })
        setUserState({
          ...userState,
          loading: false,
          error: result
        })
      } else {
        setUserState({
          ...userState,
          loading: false,
          error: result
        })
        handleGoToLogin()
      }
    } catch (error) {
      setUserState({
        ...userState,
        loading: false,
        error: [error.message]
      })
      handleGoToLogin()
    }
  }

  /**
   * Method to redirect login page
   */
  const handleGoToLogin = () => {
    events.emit('go_to_page', { page: 'login' })
  }

  useEffect(() => {
    if (token && !auth) {
      handleGetUser()
    }
  }, [token, auth])

  useEffect(() => {
    if (auth) {
      if (querylat && querylng) {
        setStateValues({ location: { lat: querylat, lng: querylng } })
      }
      events.emit('go_to_page', { page: 'search' })
    }
  }, [auth])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          userState={userState}
        />
      )}
    </>
  )
}

QueryLoginSpoonity.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before login
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after login
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before login
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after login
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

QueryLoginSpoonity.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
