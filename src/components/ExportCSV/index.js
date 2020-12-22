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
   * * @param {boolean} filter condition for filter apply
   */
  const getToken = async (filter) => {
    try {
      setTokenStatus({ ...tokenStatus, token: null })
      setFilterApply(filter)
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
          if (filterValues['statuses'] !== undefined) {
            if (filterValues.statuses.length > 0) {
              filterConditons.push({ attribute: 'status', value: filterValues.statuses })
            } else {
              filterConditons.push({ attribute: 'status', value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] })
            }
          }
          if (filterValues['deliveryFromDatetime'] !== undefined) {
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
          }
          if (filterValues['deliveryEndDatetime'] !== undefined) {
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
          }
          if (filterValues['businessIds'] !== undefined) {
            if (filterValues.businessIds.length !== 0) {
              filterConditons.push(
                {
                  attribute: 'business_id',
                  value: filterValues.businessIds
                }
              )
            }
          }
          if (filterValues['driverIds'] !== undefined) {
            if (filterValues.driverIds.length !== 0) {
              filterConditons.push(
                {
                  attribute: 'driver_id',
                  value: filterValues.driverIds
                }
              )
            }
          }
          if (filterValues['deliveryTypes'] !== undefined) {
            if (filterValues.deliveryTypes.length !== 0) {
              filterConditons.push(
                {
                  attribute: 'delivery_type',
                  value: filterValues.deliveryTypes
                }
              )
            }
          }
          if (filterValues['paymethodIds'] !== undefined) {
            if (filterValues.paymethodIds.length !== 0 && filterValues['paymethodIds'] !== undefined) {
              filterConditons.push(
                {
                  attribute: 'paymethod_id',
                  value: filterValues.paymethodIds
                }
              )
            }
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
    setActionStatus({ ...actionStatus, loading: true })
    getToken(false)
  }
  /**
   * Method to start csv downloading for filtered orders
   */
  const handleGetCsvFilteredExport = () => {
    setActionStatus({ ...actionStatus, loading: true })
    getToken(true)
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
