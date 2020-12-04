import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const ExportCSV = (props) => {
  const { UIComponent } = props
  const [tokenStatus, setTokenStatus] = useState({ token: null, error: null })
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })

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
      const response = await fetch('https://apiv4.ordering.co/v400/en/demo/orders.csv?mode=dashboard&orderBy=id', requestOptions)
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
