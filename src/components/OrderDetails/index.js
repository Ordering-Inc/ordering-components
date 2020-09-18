import React from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'

export const OrderDetails = (props) => {
  const {
    order,
    UIComponent
  } = props

  const [{ token }] = useSession()

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
      await fetch(`https://apiv4.ordering.co/v400/en/demo/orders/${order?.id}/messages`, {
        method: 'post',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          can_see: '0,2,3',
          comment: `I am on the parking number: ${spot}`,
          order_id: order?.id,
          type: 2
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handlerSubmitSpotNumber = ({ spot }) => {
    sendMessage(spot)
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
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
