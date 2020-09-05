import React from 'react'
import PropTypes from 'prop-types'

/**
 * Component to manage stripe elements form behavior without UI component
 */
export const StripeElementsForm = (props) => {
  const {
    UIComponent
  } = props

  return (
    <UIComponent
      {...props}
    />
  )
}

StripeElementsForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Business id to get cards from API
   */
  businessId: PropTypes.number,
  /**
   * save stripe public key to use stripe form
   */
  stripePK: PropTypes.string,
  /**
   * Save client secret id used in stripe for create a payment method
   */
  clientSecret: PropTypes.string,
  /**
   * method used for handle card token created
   */
  handlerToken: PropTypes.func
}
