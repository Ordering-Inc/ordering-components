import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
import { useSession } from '../../../contexts/SessionContext'
import { useApi } from '../../../contexts/ApiContext'
import { useLanguage } from '../../../contexts/LanguageContext'
import { useUtils } from '../../../contexts/UtilsContext'

export const Logistics = (props) => {
  const {
    orderId,
    UIComponent
  } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const [, t] = useLanguage()
  const [{ getOrderState, parseDistance }] = useUtils()

  /**
   * Array to save logistics
   */
  const [logisticList, setLogisticList] = useState({ logs: [], loading: true, error: null })

  /**
   * Method to get logistics from API
   */
  const getLogistics = async () => {
    try {
      setLogisticList({ ...logisticList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`
        }
      }
      const response = await fetch(`${ordering.root}/orders/${orderId}/logs?order_id=${orderId}`, requestOptions)
      const { result } = await response.json()
      setLogisticList({ ...logisticList, loading: false, logs: result })
    } catch (err) {
      setLogisticList({ ...logisticList, loading: false, error: err.message })
    }
  }

  const parseLog = (log) => {
    const driverEvents = [
      'logistic_driver_found',
      'logistic_driver_found_group',
      'logistic_driver_not_found',
      'logistic_driver_not_found_group',
      'logistic_driver_found_in_coverage',
      'logistic_driver_found_in_coverage_group',
      'logistic_driver_found_out_coverage',
      'logistic_driver_found_out_coverage_group',
      'logistic_driver_autoaccepted',
      'logistic_driver_autoaccepted_group',
      'logistic_request_autorejected',
      'logistic_request_autorejected_group',
      'logistic_assign_request_accepted',
      'logistic_assign_request_accepted_group',
      'logistic_assign_request_rejected',
      'logistic_assign_request_rejected_group',
      'logistic_manual_driver_assignment',
      'logistic_manual_driver_unassignment',
      'logistic_driver_autoassigned_group'
    ]
    const generalEvents = [
      'logistic_started',
      'logistic_finished',
      'logistic_expired',
      'logistic_resolved',
      'logistic_reset',
      'logistic_grouped',
      'logistic_cancelled',
      'logistic_not_grouped',
      'logistic_order_queued',
      'logistic_order_out_queued',
      'logistic_driver_company_not_found'
    ]

    const parseLogData = (eventName, data) => {
      let message = t('LOG_' + eventName.toUpperCase())
      for (let key in data) {
        let replaceBy = data[key]
        if (key === 'distance' || key === 'coverage') {
          replaceBy = parseDistance(data[key])
        } else if (key === 'with_orders') {
          replaceBy = data[key].join(', ')
          key = 'orders'
        } else if (key === 'status') {
          replaceBy = getOrderState(data[key])
        }

        message = message.replace('_' + key + '_', replaceBy)
      }
      return message
    }

    const logData = log.data ? log.data : {}

    if (driverEvents.indexOf(log.event) !== -1 || log.driver_id) {
      if (log.driver) {
        logData.driver = log.driver.name + (log.driver.lastname ? log.driver.lastname : '')
      }
      return parseLogData(log.event, logData)
    } else if (log.driver_company_id || log.external_driver_id) {
      if (log.driver_company) {
        logData.driver_company = log.driver_company.name
      }
      if (log.external_driver) {
        logData.external_driver = log.external_driver.name
      }
      return parseLogData(log.event, logData)
    } else if (generalEvents.indexOf(log.event) !== -1) {
      return parseLogData(log.event, logData)
    }
    return t(log.event.toUpperCase()) + '<br />' + JSON.stringify(log.data)
  }

  useEffect(() => {
    getLogistics()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          logisticList={logisticList}
          parseLog={parseLog}
          getLogistics={getLogistics}
        />
      )}
    </>
  )
}

Logistics.propTypes = {
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

Logistics.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
