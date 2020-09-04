import React, { useState } from 'react'
import { useStripe } from '@stripe/react-stripe-js'
import PropTypes from 'prop-types'

const PAYMENTS_URL = 'https://apiv4.ordering.co/v400/en/demo/payments/stripe_redirect/redirect'
const API_URL = 'https://apiv4.ordering.co'

const ORDER_TOTAL = 1000 // por revisar
const CURRENCY = 'eur' // por revisar

export const StripeRedirectForm = (props) => {
  const {
    UIComponent
  } = props
  const stripe = useStripe()

  const [stripeError, setStripeError] = useState(null)

  const handlerSubmitPaymentMethod = async ({ name, email, paydata }) => {
    const result = await stripe.createSource({
      type: paydata,
      amount: ORDER_TOTAL,
      currency: CURRENCY,
      owner: {
        name,
        email
      },
      redirect: {
        return_url: PAYMENTS_URL
      }
    })
    if (!result.error) {
      const redirectPopup = window.open('', '_blank', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,clearcache=yes')
      redirectPopup.location.href = result.source.redirect.url

      const checkdata = setInterval(function () {
        redirectPopup.postMessage('data', API_URL)
      }, 100)

      let timeout = null

      const handleMessage = (e) => {
        if (e.data.result) {
          redirectPopup.postMessage('close', API_URL)
          window.removeEventListener('message', handleMessage)
          clearInterval(checkdata)
          clearTimeout(timeout)
          timeout = setTimeout(function () {
            if (e.data.result.redirect_status === 'failed' || e.data.result.redirect_status === 'canceled') {
              setStripeError('Error stripe redirect')
            } else {
              props.handlerStripeRedirect(e.data.result.source)
            }
          }, 500)
        }
      }
      window.addEventListener('message', handleMessage, false)
    } else {
      setStripeError(result.error.message)
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          stripeError={stripeError}
          handlerSubmitPaymentMethod={handlerSubmitPaymentMethod}
          handlerChangeSelect={(val) => setStripeError(val)}
        />
      )}
    </>
  )
}

StripeRedirectForm.propTypes = {
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
   * Components types before stripe redirect form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after stripe redirect form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before stripe redirect form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after stripe redirect form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

StripeRedirectForm.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
