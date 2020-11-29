import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

export const DriversList = (props) => {
  const {
    drivers,
    UIComponent,
    propsToFetch
  } = props

  const [ordering] = useApi()
  const requestsState = {}
  const [driverActionStatus, setDriverActionStatus] = useState({ loading: true, error: null })

  const socket = useWebsocket()
  /**
   * Get session
   */
  const [session] = useSession()

  /**
   * Array to save drivers
   */
  const [driversList, setDriversList] = useState({ drivers: [], loading: true, error: null })
  /**
   * Method to assign driver to order from API
   * @param {object} assign assigned order id and driver id
   */
  const handleAssignDriver = async (assign) => {
    try {
      setDriverActionStatus({ ...driverActionStatus, loading: true })

      const source = {}
      requestsState.assignDriver = source
      const { content } = await ordering.setAccessToken(session.token).orders(assign.orderId).save({ driver_id: assign.driverId }, { cancelToken: source })

      setDriverActionStatus({
        loading: false,
        error: content.error ? content.result : null
      })
    } catch (err) {
      setDriverActionStatus({ ...driverActionStatus, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to get drivers from API
   */
  const getDrivers = async () => {
    try {
      setDriversList({ ...driversList, loading: true })
      const source = {}
      requestsState.drivers = source
      const { content: { result } } = await ordering
        .setAccessToken(session.token)
        .users()
        .select(propsToFetch)
        .where([{ attribute: 'level', value: [4] }])
        .get({ cancelToken: source })

      setDriversList({
        ...driversList,
        loading: false,
        drivers: result
      })
    } catch (err) {
      setDriversList({
        ...driversList,
        loading: false,
        error: err.message
      })
    }
  }

  useEffect(() => {
    if (driversList.loading) return
    const handleUpdateDriver = (driver) => {
      const found = driversList.drivers.find(_driver => _driver.id === driver.id)
      let _drivers = []
      if (found) {
        _drivers = driversList.drivers.filter(_driver => {
          if (_driver.id === driver.id) {
            Object.assign(_driver, driver)
          }
        })
      } else {
        _drivers = [...driversList.drivers, driver]
      }
      setDriversList({
        ...driversList,
        drivers: _drivers
      })
    }
    const handleTrackingDriver = (driver) => {
      let _drivers = []
      _drivers = driversList.drivers.filter(_driver => {
        if (_driver.id === driver.id) {
          Object.assign(_driver, driver)
        }
      })
      setDriversList({
        ...driversList,
        drivers: _drivers
      })
    }
    socket.on('drivers_update', handleUpdateDriver)
    socket.on('tracking_driver', handleTrackingDriver)
    return () => {
      socket.off('drivers_update', handleUpdateDriver)
      socket.off('tracking_driver', handleTrackingDriver)
    }
  }, [socket])

  useEffect(() => {
    if (!session.user) return
    socket.join('drivers')
    return () => {
      socket.leave('drivers')
    }
  }, [socket, session])

  useEffect(() => {
    if (drivers) {
      setDriversList({ ...driversList, drivers: drivers, loading: false })
    } else {
      getDrivers()
    }

    return () => {
      if (requestsState.drivers) {
        requestsState.drivers.cancel()
      }
    }
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          drivers={driversList}
          driverActionStatus={driverActionStatus}
          handleAssignDriver={handleAssignDriver}
        />
      )}
    </>
  )
}

DriversList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

DriversList.defaultProps = {
  propsToFetch: ['id', 'name', 'lastname', 'assigned_orders_count', 'available', 'phone', 'cellphone', 'location', 'photo', 'qualification', 'last_order_assigned_at'],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
