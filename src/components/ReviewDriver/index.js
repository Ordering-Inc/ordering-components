import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { ToastType, useToast } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

export const ReviewDriver = (props) => {
  const { UIComponent, order, isToast, isProfessional } = props

  const [ordering] = useApi()
  const socket = useWebsocket()
  const [session] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()
  const [reviews, setReviews] = useState({ qualification: 0, comment: '' })
  const [formState, setFormState] = useState({ loading: false, result: { error: false } })

  /**
   * Function that load and send the driver review to ordering
   */
  const handleSendDriverReview = async () => {
    setFormState({ ...formState, loading: true })
    const orderId = Array.isArray(order?.id) ? order?.id : [order?.id]
    if (!orderId?.length) return

    try {
      const userId = isProfessional
        ? order?.products[0]?.calendar_event?.professional?.id
        : order?.driver?.id

        const fetchReviews = async (ids) => {
          const promises = ids.map(async id => {
            const res = await fetch(`${ordering.root}/users/${userId}/user_reviews`, {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${session.token}`,
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket?.getId()
              },
              body: JSON.stringify({ ...reviews, order_id: id, user_id: userId })
            })
            const { result, error } = await res.json()
            return { result, error }
          })
          const data = await Promise.all(promises)
          return data
        }

      const reviewsArray = await fetchOrders(orderId)

      const error = reviewsArray.length && reviewsArray.every(obj => obj.error) && reviewsArray[0]?.result?.[0]
      const result = reviewsArray.length && reviewsArray.map(obj => (obj.result?.[0] ?? obj.result)).filter(o => typeof o !== 'string')

      if (!error) {
        setFormState({
          loading: false,
          result: {
            result: result,
            error: false
          }
        })
        if (isToast) {
          showToast(
            ToastType.Success,
            isProfessional
              ? t('PROFESSIONAL_REVIEW_SUCCESS_CONTENT', 'Thank you, Professional review successfully submitted!')
              : t('DRIVER_REVIEW_SUCCESS_CONTENT', 'Thank you, Driver review successfully submitted!'))
        }
      } else {
        setFormState({
          ...formState,
          loading: false,
          result: {
            result: result,
            error: true
          }
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          handleSendDriverReview={handleSendDriverReview}
          dirverReviews={reviews}
          setDriverReviews={setReviews}
        />
      )}
    </>
  )
}

ReviewDriver.propTypes = {
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
   * Components types before payment option cash
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after payment option cash
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before payment option cash
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after payment option cash
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ReviewDriver.defaultProps = {
  order: {},
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
