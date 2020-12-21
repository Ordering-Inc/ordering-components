import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const ExportCSV = (props) => {
  const {
    UIComponent,
    filterValues
  } = props
  const [tokenStatus, setTokenStatus] = useState({ token: null, error: null })
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })
  const [filterApply, setFilterApply] = useState(false)
  /**
   * Method to get token from API
   */
  const getToken = async () => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'superadmin@ordering.co', password: 'super' })
      }
      const response = await fetch('https://apiv4.ordering.co/v400/en/demo/auth', requestOptions)
      const { result } = await response.json()
      setTokenStatus({ ...tokenStatus, token: result.session.access_token })
    } catch (err) {
      setTokenStatus({ ...tokenStatus, error: err })
      setActionStatus({ loading: false, error: err })
    }
  }

  /**
   * Method to get csv from API
   */
  const getCSV = async () => {
    try {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenStatus.token}`
        }
      }

      const filterConditons = []

      if (filterApply) {
        if (Object.keys(filterValues).length) {
          if (filterValues.statuses.length > 0) {
            filterConditons.push({ attribute: 'status', value: filterValues.statuses })
          } else {
            filterConditons.push({ attribute: 'status', value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] })
          }
          if (filterValues.deliveryFromDatetime !== null) {
            filterConditons.push(
              {
                attribute: 'delivery_datetime',
                value: {
                  condition: '>=',
                  value: encodeURI(filterValues.deliveryFromDatetime)
                }
              }
            )
          }
          if (filterValues.deliveryEndDatetime !== null) {
            filterConditons.push(
              {
                attribute: 'delivery_datetime',
                value: {
                  condition: '<=',
                  value: filterValues.deliveryEndDatetime
                }
              }
            )
          }
          if (filterValues.businessIds.length !== 0) {
            filterConditons.push(
              {
                attribute: 'business_id',
                value: filterValues.businessIds
              }
            )
          }
          if (filterValues.driverIds.length !== 0) {
            filterConditons.push(
              {
                attribute: 'driver_id',
                value: filterValues.driverIds
              }
            )
          }
          if (filterValues.deliveryTypes.length !== 0) {
            filterConditons.push(
              {
                attribute: 'delivery_type',
                value: filterValues.deliveryTypes
              }
            )
          }
          if (filterValues.paymethodIds.length !== 0) {
            filterConditons.push(
              {
                attribute: 'paymethod_id',
                value: filterValues.paymethodIds
              }
            )
          }
        }
      }

      const functionFetch = filterApply
        ? `https://apiv4.ordering.co/v400/en/demo/orders.csv?mode=dashboard&orderBy=id&where=${JSON.stringify(filterConditons)}`
        : 'https://apiv4.ordering.co/v400/en/demo/orders.csv?mode=dashboard&orderBy=id'

      const response = await fetch(functionFetch, requestOptions)
      const fileSuffix = new Date().getTime()
      await response.blob().then(blob => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `orders_${fileSuffix}.csv`
        a.click()
      })
      setActionStatus({ ...actionStatus, loading: false })
    } catch (err) {
      setActionStatus({ loading: false, error: err })
    }
  }

  /**
   * Method to start csv downloading
   */
  const handleGetCsvExport = () => {
    setFilterApply(false)
    setActionStatus({ ...actionStatus, loading: true })
    if (tokenStatus.token === null) {
      getToken()
    } else {
      getCSV()
    }
  }
  /**
   * Method to start csv downloading for filtered orders
   */
  const handleGetCsvFilteredExport = () => {
    setFilterApply(true)
    setActionStatus({ ...actionStatus, loading: true })
    if (tokenStatus.token === null) {
      getToken()
    } else {
      getCSV()
    }
  }

  useEffect(() => {
    if (tokenStatus.token === null) return
    getCSV()
  }, [tokenStatus])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          actionStatus={actionStatus}
          handleGetCsvExport={handleGetCsvExport}
          handleGetCsvFilteredExport={handleGetCsvFilteredExport}
        />
      )}
    </>
  )
}

ExportCSV.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
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

ExportCSV.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
