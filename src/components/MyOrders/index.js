import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../../src/contexts/SessionContext'

export const MyOrders = (props) => {
  const {
    ordering,
    UIComponent
  } = props

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
    const { content: { result } } = await ordering.setAccessToken(token).orders().where([
      { attribute: 'status', value: [1, 2, 5, 6, 10, 11, 12] }
    ]).get()
    setActiveOrders(result)
  }
  /**
   * Method to get previous orders from API
   */
  const getPreviousOrders = async () => {
    const { content: { result } } = await ordering.setAccessToken(token).orders().where([
      { attribute: 'status', value: [0, 3, 4, 7, 8, 9] }
    ]).get()
    setPreviousOrders(result)
  }

  useEffect(() => {
    getPreviousOrders()
    getActiveOrders()
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
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  ordering: PropTypes.object.isRequired,
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after [PUT HERE COMPONENT NAME]
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
