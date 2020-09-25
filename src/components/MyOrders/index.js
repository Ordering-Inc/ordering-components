import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { CancelToken } from 'ordering-api-sdk'

export const MyOrders = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const requestsState = {}

  /**
   * Get token session
   */
  const [{ token }] = useSession()
  /**
   * Array to save active orders
   */
  const [activeOrders, setActiveOrders] = useState([])
  /**
   * Array to save previous orders
   */
  const [previousOrders, setPreviousOrders] = useState([])
  /**
   * Method to get active orders from API
   */
  const getActiveOrders = async () => {
    try {
      const source = CancelToken.source()
      requestsState.activeOrders = source
      const { content: { result } } = await ordering.setAccessToken(token).orders().where([
        { attribute: 'status', value: [0, 3, 4, 7, 8, 9] }
      ]).get({ cancelToken: source.token })
      setActiveOrders(result)
    } catch (err) {
    }
  }
  /**
   * Method to get previous orders from API
   */
  const getPreviousOrders = async () => {
    try {
      const source = CancelToken.source()
      requestsState.previousOrders = source
      const { content: { result } } = await ordering.setAccessToken(token).orders().where([
        { attribute: 'status', value: [1, 2, 5, 6, 10, 11, 12] }
      ]).get({ cancelToken: source.token })
      setPreviousOrders(result)
    } catch (err) {
    }
  }

  useEffect(() => {
    getPreviousOrders()
    getActiveOrders()
    return () => {
      if (requestsState.previousOrders) {
        requestsState.previousOrders.cancel()
      }
      if (requestsState.activeOrders) {
        requestsState.activeOrders.cancel()
      }
    }
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          activeOrders={activeOrders}
          previousOrders={previousOrders}
        />
      )}
    </>
  )
}

MyOrders.propTypes = {
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

MyOrders.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
