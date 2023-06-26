import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

export const ProfessionalInfo = (props) => {
  const {
    userId,
    propsToFetch,
    UIComponent
  } = props

  const [ordering] = useApi()
  const socket = useWebsocket()
  const [{ token }] = useSession()
  const [userReviewState, setUserReviewState] = useState({ reviews: [], loading: false, error: null })
  const [userState, setUserState] = useState({ user: null, loading: false, error: null })

  /**
   * Method to get user from API
   */
  const getUser = async () => {
    try {
      setUserState({
        ...userState,
        loading: true
      })
      const fetchEndpoint = ordering.setAccessToken(token).users(userId).select(propsToFetch)
      const { content: { result } } = await fetchEndpoint.get()
      const user = Array.isArray(result) ? null : result
      setUserState({
        ...userState,
        loading: false,
        user
      })
    } catch (err) {
      setUserState({
        ...userState,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to get the user reviews from API
   */
  const getUserReviews = async () => {
    try {
      setUserReviewState({ ...userReviewState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        }
      }

      const response = await fetch(`${ordering.root}/users/${userId}/user_reviews`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setUserReviewState({ reviews: content.result, loading: false, error: null })
      }
    } catch (err) {
      setUserReviewState({
        ...userReviewState,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    if (props.user) {
      setUserState({
        ...userState,
        user: props.user
      })
    } else {
      getUser()
    }
    if (userId) getUserReviews()
  }, [userId])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            userState={userState}
            userReviewState={userReviewState}
          />
        )
      }
    </>
  )
}

ProfessionalInfo.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
  * This must be contains userId to fetch
  */
  userId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  /**
  * User, this must be contains an object with all user info
  */
  user: PropTypes.object,
  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
    * Components types after order details
    * Array of type components, the parent props will pass to these components
    */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
    * Elements before order details
    * Array of HTML/Components elements, these components will not get the parent props
    */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
    * Elements after order details
    * Array of HTML/Components elements, these components will not get the parent props
    */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ProfessionalInfo.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: [
    'name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'country_phone_code', 'city_id', 'city', 'address',
    'addresses', 'address_notes', 'driver_zone_restriction', 'dropdown_option_id', 'dropdown_option', 'location', 'loyalty_level',
    'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname', 'phone_verified', 'email_verified', 'schedule', 'timezone', 'max_days_in_future',
    'occupation_id', 'occupation', 'session'
  ]
}
