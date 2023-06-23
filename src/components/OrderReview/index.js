import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { ToastType, useToast } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

export const OrderReview = (props) => {
  const {
    UIComponent,
    order,
    hashKey,
    onSaveReview,
    handleCustomSendReview,
    isToast,
    defaultStar,
    handleUpdateOrderList
  } = props

  const [ordering] = useApi()
  const socket = useWebsocket()
  const [session] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()
  const [stars, setStars] = useState({ quality: defaultStar, punctiality: defaultStar, service: defaultStar, packaging: defaultStar, comments: '' })
  const [formState, setFormState] = useState({ loading: false, result: { error: false } })

  const reviewOrder = async (body) => {
    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session.token}`,
      'X-App-X': ordering.appId,
      'X-Socket-Id-X': socket?.getId()
    }
    if (hashKey && !session.token) {
      headers = {
        ...headers,
        'X-uuid-access-X': hashKey
      }
    }
    const response = await fetch(`${ordering.root}/business/${body.business_id}/reviews`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
    const { result, error } = await response.json()
    return { response, result, error }
  }
  /**
   * Function that load and send the review order to ordering
   */
  const handleSendReview = async () => {
    if (handleCustomSendReview) {
      handleCustomSendReview && handleCustomSendReview(stars)
    }
    setFormState({ ...formState, loading: true })
    const staticBody = {
      quality: stars.quality,
      delivery: stars.punctiality,
      service: stars.service,
      package: stars.packaging,
      comment: stars.comments,
      user_id: session?.user?.id
    }
    try {
      if (order?.business?.length > 1) {
        // eslint-disable-next-line no-unused-expressions
        order?.business?.forEach(async (_business, i) => {
          const body = {
            ...staticBody,
            order_id: order.id[i],
            business_id: order?.business_id[i]
          }
          const { result, error } = await reviewOrder(body)
          if (!error) handleUpdateOrderList && handleUpdateOrderList(order.id[i], { review: result })
          if (order?.business?.length - 1 === i) {
            setFormState({ loading: false, result: result, error: error })
            if (!error && isToast) showToast(ToastType.Success, t('ORDER_REVIEW_SUCCESS_CONTENT', 'Thank you, Order review successfully submitted!'))
          }
        })
      } else {
        const body = {
          ...staticBody,
          order_id: order.id,
          business_id: order.business_id
        }
        const { response, result, error } = await reviewOrder(body)
        onSaveReview && onSaveReview(response)
        setFormState({ loading: false, result: result, error: error })
        if (!error && isToast) showToast(ToastType.Success, t('ORDER_REVIEW_SUCCESS_CONTENT', 'Thank you, Order review successfully submitted!'))
        if (!error) handleUpdateOrderList && handleUpdateOrderList(order.id, { review: result })
      }
    } catch (err) {
      setFormState({
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }
  /**
   * Rating the product
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeRating = (e) => {
    setStars({
      ...stars,
      [e.target.name]: parseInt(e.target.value)
    })
  }
  /**
   * Rating the product with comments
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e) => {
    setStars({
      ...stars,
      comments: e.target.value
    })
  }
  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          stars={stars}
          order={order}
          formState={formState}
          handleSendReview={handleSendReview}
          handleChangeInput={handleChangeInput}
          handleChangeRating={handleChangeRating}
          setStars={setStars}
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
   * Getting the order that can be review
  */
  order: PropTypes.object,
  /**
   * Enable to show/hide toast
   */
  isToast: PropTypes.bool,
  /**
   * Setting as default value for stars
   */
  defaultStar: PropTypes.number,
  /**
    * Response of ordering that contains de review
   */
  onSaveReview: PropTypes.func,
  /**
   * function that saves the order that will be reviewed
   */
  handleSendReview: PropTypes.func,
  /**
   * handleCustomClick, function to get click event and return scores without default behavior
   */
  handleCustomSendReview: PropTypes.func
}

OrderReview.defaultProps = {
  defaultStar: 1,
  order: {},
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
