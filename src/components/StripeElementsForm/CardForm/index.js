import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  CardElement,
  useElements,
  useStripe
} from '@stripe/react-stripe-js'

import { useSession } from '../../../contexts/SessionContext'

/**
 * Component to manage card form for stripe elements form behavior without UI component
 */
export const CardForm = (props) => {
  const {
    UIComponent
  } = props

  const [{ user }] = useSession()

  const stripe = useStripe()
  const elements = useElements()

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  /**
   * POST the token ID to backend.
   * @param {*string} param0 payment method id
   * @param {*object} user object with user info from session provider
   * @param {*string} businessId string to know your business
   */
  const stripeTokenHandler = async ({ setupIntent }, user, businessId) => {
    await fetch('http://apiv4-features.ordering.co/v400/en/luisv4/payments/stripe/cards', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${user?.session?.access_token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        business_id: businessId,
        gateway: 'stripe',
        token_id: setupIntent?.payment_method,
        user_id: user?.id
      })
    })
  }

  /**
   * Handle real-time validation errors from the card Element
   * @param {*event} event
   */
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message)
    } else {
      setError(null)
    }
  }

  /**
   * Handle form submission
   * @param {event} event
   */
  const handleSubmit = async (event) => {
    setLoading(true)
    event.preventDefault()
    const card = elements.getElement(CardElement)
    /**
     * This methos is deprecated, in case this fails try to use this method: stripe.confirmCardPayment
     * Check docs: https://stripe.com/docs/js/payment_intents/confirm_card_payment
     */
    const result = await stripe.handleCardSetup(
      props.clientSecret,
      card,
      {
        payment_method_data: {
          billing_details: {
            name: `${user.name} ${user.lastname}`,
            email: user.email,
            address: user.address
          }
        }
      }
    )

    if (result.error) {
      setLoading(false)
      setError(result.error.message)
    } else {
      setLoading(false)
      setError(null)
      props.handlerToken(result?.setupIntent?.payment_method)
      stripeTokenHandler(result, user, props.businessId)
    }
  }

  return (
    <UIComponent
      {...props}
      handleSubmit={handleSubmit}
      error={error}
      loading={loading}
      handleChange={handleChange}
    />
  )
}

CardForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Business id to get cards from API
   */
  businessId: PropTypes.number,
  /**
   * Save client secret id used in stripe for create a payment method
   */
  clientSecret: PropTypes.string,
  /**
   * method used for handle card token created
   */
  handlerToken: PropTypes.func
}
