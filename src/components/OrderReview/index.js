import React, { useEffect, useState } from 'react'
import { useSession } from '../../contexts/SessionContext'
import PropTypes, { object, number } from 'prop-types'

export const OrderReview = (props) => {
  const { UIComponent, order } = props
  const [session] = useSession()
  const [quality, setQuality] = useState(1)
  const [punctiality, setPunctiality] = useState(1)
  const [service, setService] = useState(1)
  const [packaging, setPackagaing] = useState(1)
  const [comment, setComment] = useState('')
  const [orders, setOrders] = useState([])
  const [token] = useState(session.token)
  const [orderId, setOrderId] = useState(undefined)
  const [businessId, setBusinessId] = useState(undefined)

  useEffect(() => {
    fetchOrders()
  }, [])

  /** function that saves the orders that can be reviewed*/
  const fetchOrders = async () => {
    setOrders(await order)
  }
  /** function that saves the state of quality*/
  const handleQuality = (value) => {
    setQuality(value)
  }
  /** function that saves the state of punctiality*/
  const handlePunctiality = (value) => {
    setPunctiality(value)
  }
  /** function that saves the state of service*/
  const handleService = (value) => {
    setService(value)
  }
  /** function that saves the state of product packaging*/
  const handlePackage = (value) => {
    setPackagaing(value)
  }
  /** function that saves the state of the comments*/
  const handleComment = (value) => {
    setComment(value)
  }
  /** function that saves the order that will be reviewed*/
  const handleOrder = (order) => {
    setBusinessId(order.business_id)
    setOrderId(order.id)
  }
  /**function that post the review */
  const handleSendReview = async (e) => {
    e.preventDefault()
    const body = {
      order_id: orderId,
      quality: quality,
      delivery: punctiality,
      service: service,
      package: packaging,
      comment: comment,
      user_id: session.user.id,
      business_id: businessId
    }
    await fetch(`https://apiv4.ordering.co/v400/en/demo/business/${businessId}/reviews`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  }
  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          handleQuality={handleQuality}
          handlePunctiality={handlePunctiality}
          handleService={handleService}
          handlePackage={handlePackage}
          handleComment={handleComment}
          handleSendReview={handleSendReview}
          handleOrder={handleOrder}
          comment={comment}
          orders={orders}
        />
      )}
    </>
  )
}

OrderReview.propTypes = {
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
  * Getting a list of orders that can be reviewed
   */
  order: PropTypes.object,

  /** function that saves the orders that can be reviewed*/
  fetchOrders: PropTypes.func,

  /** function that saves the state of quality*/
  handleQuality: PropTypes.func,

  /** function that saves the state of punctiality*/
  handlePunctiality: PropTypes.func,

  /** function that saves the state of service*/
  handleService: PropTypes.func,

  /** function that saves the state of product packaging*/
  handlePackage: PropTypes.func,

  /** function that saves the state of the comments*/
  handleOrder: PropTypes.func,

  /** function that saves the order that will be reviewed*/
  handleSendReview: PropTypes.func
}

OrderReview.defaultProps = {
  order: [],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}