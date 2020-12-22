import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'

export const Logistics = (props) => {
  const {
    orderId,
    UIComponent
  } = props
  const [tokenStatus, setTokenStatus] = useState({ token: null, error: null })
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })
  /**
   * Array to save logistics
   */
  const [logisticList, setLogisticList] = useState({ logs: [], loading: true, error: null })
  /**
   * Method to get token from API
   */
  const getToken = async () => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      setTokenStatus({ ...tokenStatus, token: null })
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'superadmin@ordering.co', password: 'super' })
      }
      const response = await fetch('https://apiv4.ordering.co/v400/en/demologistic/auth', requestOptions)
      const { result } = await response.json()
      setTokenStatus({ ...tokenStatus, token: result.session.access_token })
    } catch (err) {
      setTokenStatus({ ...tokenStatus, error: err })
      setActionStatus({ loading: false, error: err })
    }
  }
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
          Authorization: `Bearer ${tokenStatus.token}`
        }
      }
      const response = await fetch(`https://apiv4.ordering.co/v400/en/demologistic/orders/${orderId}/logs?order_id=${orderId}`, requestOptions)
      const { result } = await response.json()
      setLogisticList({ ...logisticList, loading: false, logs: result })
      setActionStatus({ ...actionStatus, loading: false })
    } catch (err) {
      setLogisticList({ ...logisticList, loading: false, error: err.message })
      setActionStatus({ ...actionStatus, loading: false })
    }
  }

  useEffect(() => {
    if (tokenStatus.token === null) return
    getLogistics()
  }, [tokenStatus])

  useEffect(() => {
    getToken()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          actionStatus={actionStatus}
          logisticList={logisticList}
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
