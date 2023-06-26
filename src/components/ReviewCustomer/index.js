import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { ToastType, useToast } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useEvent } from '../../contexts/EventContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

export const ReviewCustomer = (props) => {
  const {
    UIComponent,
    order
  } = props

  const [ordering] = useApi()
  const socket = useWebsocket()
  const [session] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()
  const [events] = useEvent()

  const [reviewState, setReviewState] = useState({
    qualification: 0,
    comment: '',
    order_id: order?.id,
    user_id: order?.customer_id
  })
  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Function that load and send the customer review to ordering
   */
  const handleSendCustomerReview = async () => {
    setActionState({ loading: true, error: null })
    try {
      const response = await fetch(`${ordering.root}/users/${order?.customer_id}/user_reviews`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${session.token}`,
          'Content-Type': 'application/json',
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        },
        body: JSON.stringify(reviewState)
      })
      const { result, error } = await response.json()
      if (!error) {
        setActionState({ ...reviewState, loading: false })
        showToast(ToastType.Success, t('CUSTOMER_REVIEW_SUCCESS_CONTENT', 'Thank you, Customer review successfully submitted!'))
        events.emit('customer_reviewed', result)
        props.onClose && props.onClose()
      } else {
        setActionState({ loading: false, error: result })
      }
    } catch (err) {
      setActionState({
        loading: false,
        error: [err.message]
      })
    }
  }

  const handleChangeQualification = (index) => {
    if (index) setReviewState({ ...reviewState, qualification: index })
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          reviewState={reviewState}
          setReviewState={setReviewState}
          actionState={actionState}
          handleChangeQualification={handleChangeQualification}
          handleSendCustomerReview={handleSendCustomerReview}
        />
      )}
    </>
  )
}

ReviewCustomer.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before review customer
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after review customer
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before review customer
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after review customer
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ReviewCustomer.defaultProps = {
  order: {},
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
