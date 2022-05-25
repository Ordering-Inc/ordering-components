import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'

export const Sessions = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ user, token }] = useSession()

  const [sessionsList, setSessionsList] = useState({ sessions: [], loading: true, error: null })
  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to get the sessions from API
   */
  const handleGetSessions = async () => {
    try {
      setSessionsList({
        ...sessionsList,
        loading: true
      })
      const response = await fetch(`${ordering.root}/users/${user.id}/sessions`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const { result, error } = await response.json()
      if (!error) {
        setSessionsList({
          loading: false,
          error: null,
          sessions: result
        })
      } else {
        setSessionsList({
          ...sessionsList,
          loading: false,
          error: result
        })
      }
    } catch (err) {
      setSessionsList({
        ...sessionsList,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to delete the session from API
   * @param {number} sessionId session id
   */
  const handleDeleteSession = async (sessionId) => {
    try {
      setActionState({ ...actionState, loading: true })
      const response = await fetch(`${ordering.root}/users/${user.id}/sessions/${sessionId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const { result, error } = await response.json()
      if (!error) {
        const sessions = sessionsList.sessions.filter(session => session.id !== sessionId)
        setSessionsList({
          ...sessionsList,
          sessions
        })
        setActionState({
          loading: false,
          error: null
        })
      } else {
        setActionState({
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setActionState({
        loading: false,
        error: [error.message]
      })
    }
  }

  /**
   * Method to delete all sessions
   */
  const handleDeleteAllSessions = async () => {
    try {
      setActionState({ ...actionState, loading: true })
      const response = await fetch(`${ordering.root}/users/${user.id}/sessions/all`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const { result, error } = await response.json()
      if (!error) {
        setSessionsList({
          ...sessionsList,
          sessions: []
        })
        setActionState({
          loading: false,
          error: null
        })
      } else {
        setActionState({
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setActionState({
        loading: false,
        error: [error.message]
      })
    }
  }

  useEffect(() => {
    handleGetSessions()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          sessionsList={sessionsList}
          actionState={actionState}
          handleDeleteSession={handleDeleteSession}
          handleDeleteAllSessions={handleDeleteAllSessions}
        />
      )}
    </>
  )
}

Sessions.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before Sessions list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Sessions list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Sessions list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Sessions list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

Sessions.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
