import React, { useState } from 'react'
import { useSession } from '../../contexts/SessionContext'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'

export const OrderReview = (props) => {
  const { UIComponent, order } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const [quality, setQuality] = useState(1)
  const [punctiality, setPunctiality] = useState(1)
  const [service, setService] = useState(1)
  const [packaging, setPackagaing] = useState(1)
  const [comment, setComment] = useState('')

  /**
   * function that saves the state of quality
   */
  const handleQuality = (value) => {
    setQuality(value)
  }
  /**
   * function that saves the state of punctiality
   */
  const handlePunctiality = (value) => {
    setPunctiality(value)
  }
  /**
   * function that saves the state of service
   */
  const handleService = (value) => {
    setService(value)
  }
  /**
   * function that saves the state of product packaging
   */
  const handlePackage = (value) => {
    setPackagaing(value)
  }
  /**
   * function that saves the state of the comments
   */
  const handleComment = (value) => {
    setComment(value)
  }
  // /**
  //  * function that saves the order that will be reviewed
  //  */
  // const handleOrder = (order) => {
  //   setBusinessId(order.business_id)
  //   setOrderId(order.id)
  // }
  /**
   * function that post the review
   */
  const handleSendReview = async (e) => {
    e.preventDefault()
    const body = {
      order_id: order.id,
      quality: quality,
      delivery: punctiality,
      service: service,
      package: packaging,
      comment: comment,
      user_id: session.user.id,
      business_id: order.business_id
    }
    await fetch(`${ordering.root}/business/${order.business_id}/reviews`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session.token}`,
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
          // handleOrder={handleOrder}
          comment={comment}
          order={order}
        />
      )}
    </>
  )
}

OrderReview.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
  * Getting a order that can be reviewed
   */
  order: PropTypes.object,

  /**
   * function that saves the orders that can be reviewed
   */
  fetchOrders: PropTypes.func,

  /**
   * function that saves the state of quality
   */
  handleQuality: PropTypes.func,

  /**
   * function that saves the state of punctiality
   */
  handlePunctiality: PropTypes.func,

  /**
   * function that saves the state of service
   */
  handleService: PropTypes.func,

  /**
   * function that saves the state of product packaging
   */
  handlePackage: PropTypes.func,

  /**
   * function that saves the state of the comments
   */
  handleOrder: PropTypes.func,

  /**
   * function that saves the order that will be reviewed
   */
  handleSendReview: PropTypes.func
}

OrderReview.defaultProps = {
  order: [],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
