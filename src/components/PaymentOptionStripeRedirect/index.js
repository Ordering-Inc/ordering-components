import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSession } from '../../contexts/SessionContext'

export const PaymentOptionStripeRedirect = (props) => {
  const {
    paymentMethods,
    UIComponent
  } = props

  const [{ token }] = useSession()

  /**
   * save stripe public key
   */
  const [stripePK, setStripePK] = useState(null)

  const modalName = () => {
    let name = ''
    paymentMethods.map((paym, i) => {
      i === paymentMethods.length - 1
        ? name += `${paym.name}`
        : name += `${paym.name}, `
    })
    return name
  }

  /**
   * Method to get stripe credentials from API
   */
  const getCredentials = async () => {
    // Replace for a sdk method
    const response = await fetch(
      'https://apiv4.ordering.co/v400/en/demo/payments/stripe/credentials',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    const { result: { publishable } } = await response.json()
    setStripePK(publishable)
  }

  useEffect(() => {
    getCredentials()
  }, [])

  return (
    <>
      {UIComponent && stripePK && (
        <UIComponent
          {...props}
          stripePK={stripePK}
          modalName={modalName()}
        />
      )}
    </>
  )
}

PaymentOptionStripeRedirect.propTypes = {
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
   * currency to use stripe methods
   */
  currency: PropTypes.string.isRequired,
  /**
   * paymentMethods, array that must be contains a list of payment methods
   */
  paymentMethods: PropTypes.arrayOf(PropTypes.object),
  /**
   * Method to get stripe source from a stripe redirect form
   */
  handlerStripeSource: PropTypes.func,
  /**
   * Components types before payment option stripe redirect
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after payment option stripe redirect
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before payment option stripe redirect
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after payment option stripe redirect
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

PaymentOptionStripeRedirect.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
