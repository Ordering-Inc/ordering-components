import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

export const OrderDetails = (props) => {
  const {
    orderId,
    UIComponent
  } = props

  const [{ token }] = useSession()
  const [ordering] = useApi()
  const [orderState, setOrderState] = useState({ order: {}, loading: false, error: null })
  const [messageErrors, setMessageErrors] = useState({ status: null, loading: false, error: null })

  /**
   * Method to format a price number
   * @param {Number} price
   */
  const formatPrice = price => `$ ${price.toFixed(2)}`

  /**
   * Method to send a message
   * @param {string} spot
   */
  const sendMessage = async (spot) => {
    try {
      setMessageErrors({
        ...messageErrors,
        loading: true
      })
      const { status } = await fetch(`${ordering.root}/orders/${orderState.order?.id}/messages`, {
        method: 'post',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          can_see: '0,2,3',
          comment: `I am on the parking number: ${spot}`,
          order_id: orderState.order?.id,
          type: 2
        })
      })
      setMessageErrors({
        ...messageErrors,
        loading: false,
        status
      })
    } catch (e) {
      if (e instanceof TypeError) {
        setMessageErrors({
          ...messageErrors,
          loading: false,
          error: ['Failed to fetch']
        })
      } else {
        setMessageErrors({
          ...messageErrors,
          loading: false,
          error: [e]
        })
      }
    }
  }

  /**
   * handler send message with spot info
   * @param {number} param0
   */
  const handlerSubmitSpotNumber = ({ spot }) => {
    sendMessage(spot)
  }

  /**
   * Method to get order from API
   */
  const getOrder = async () => {
    try {
      setOrderState({
        ...orderState,
        loading: true
      })
      const { content: { error, result } } = await ordering.setAccessToken(token).orders(orderId).get()
      setOrderState({
        ...orderState,
        loading: false,
        order: !error ? result : {},
        error: error && result
      })
    } catch (e) {
      setOrderState({
        ...orderState,
        loading: false,
        error: [e]
      })
    }
  }

  useEffect(() => {
    if (props.order) {
      setOrderState({
        ...orderState,
        order: props.order
      })
    } else {
      getOrder()
    }
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          order={orderState}
          messageErrors={messageErrors}
          formatPrice={formatPrice}
          handlerSubmit={handlerSubmitSpotNumber}
        />
      )}
    </>
  )
}

OrderDetails.propTypes = {
  /**
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  ordering: PropTypes.object,
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * This must be contains orderId to fetch
   */
  orderId: PropTypes.number,
  /**
   * Order, this must be contains an object with all order info
   */
  order: PropTypes.object,
  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after order details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

OrderDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
