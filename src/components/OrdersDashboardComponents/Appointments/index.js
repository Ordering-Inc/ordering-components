import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../../contexts/SessionContext'
import { useApi } from '../../../contexts/ApiContext'

export const Appointments = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()

  const [selectedBusiness, setSelectedBusiness] = useState(null)
  const [businessCalendarEvents, setBusinessCalendarEvents] = useState({ loading: false, result: [], error: null })

  /**
   * Method to get the calendar events of business from API
   */
  const getBusinessCalendarEvents = async () => {
    try {
      setBusinessCalendarEvents({ ...businessCalendarEvents, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${selectedBusiness.id}/calendar_events`, requestOptions)
      const { result, error } = await response.json()
      setBusinessCalendarEvents({
        loading: false,
        result: error ? [] : result,
        error: error ? result : null
      })
    } catch (err) {
      setBusinessCalendarEvents({
        ...businessCalendarEvents,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    if (!selectedBusiness) return
    getBusinessCalendarEvents()
  }, [selectedBusiness])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            selectedBusiness={selectedBusiness}
            setSelectedBusiness={setSelectedBusiness}
            businessCalendarEvents={businessCalendarEvents}
          />
        )
      }
    </>
  )
}

Appointments.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}
