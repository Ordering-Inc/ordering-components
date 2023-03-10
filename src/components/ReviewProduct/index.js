import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { ToastType, useToast } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useWebsocket } from '../../contexts/WebsocketContext'
import { useEvent } from '../../contexts/EventContext'

export const ReviewProduct = (props) => {
  const { UIComponent, order, isToast } = props

  const [ordering] = useApi()
  const socket = useWebsocket()
  const [session] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()
  const [events] = useEvent()
  const [formState, setFormState] = useState({ loading: false, changes: [], result: { error: false } })

  /**
   * Function to update product review
   */
  const handleChangeFormState = (changes) => {
    const _changes = [...changes]
    setFormState({ ...formState, changes: _changes })
  }

  const reviewProducts = async (orderId, changes) => {
    if (!changes) return
    const response = await fetch(`${ordering.root}/orders/${orderId}/product_reviews`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session.token}`,
        'Content-Type': 'application/json',
        'X-App-X': ordering.appId,
        'X-Socket-Id-X': socket?.getId()
      },
      body: JSON.stringify({ reviews: JSON.stringify(changes) })
    })
    const result = await response.json()
    return result
  }

  /**
   * Function that load and send the product review to ordering
   */
  const handleSendProductReview = async () => {
    setFormState({ ...formState, loading: true })
    try {
      let error, result
      if (order?.business?.length > 1) {
        // eslint-disable-next-line no-unused-expressions
        order?.business?.forEach(async (business, i) => {
          const productsOfOrder = Object.values(formState.changes)
            .filter(product =>
              order?.products
                ?.some(_product => product?.product_id === _product[0]?.product_id && _product[0]?.order_id === order?.id[i]))
          const _result = await reviewProducts(order?.id[i], productsOfOrder)
          error = _result.error
          result = _result.result
        })
      } else {
        const _result = await reviewProducts(order?.id, formState.changes)
        error = _result.error
        result = _result.result
      }
      if (!error) {
        events.emit('product_reviewed', formState.changes)
        setFormState({
          loading: false,
          changes: [],
          result: {
            result: result,
            error: false
          }
        })
        if (isToast) showToast(ToastType.Success, t('PRODUCT_REVIEW_SUCCESS_CONTENT', 'Thank you, Product review successfully submitted!'))
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
          handleChangeFormState={handleChangeFormState}
          handleSendProductReview={handleSendProductReview}
        />
      )}
    </>
  )
}

ReviewProduct.propTypes = {
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

ReviewProduct.defaultProps = {
  order: {},
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
