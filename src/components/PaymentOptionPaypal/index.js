import React from 'react'
import PropTypes from 'prop-types'

export const PaymentOptionPaypal = (props) => {
  const {
    UIComponent
  } = props

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
        />
      )}
    </>
  )
}

PaymentOptionPaypal.propTypes = {
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
   * Amount to charge on paypal method
   */
  amount: PropTypes.string,
  /**
   * paypal ClientID
   */
  clientID: PropTypes.string,
  /**
   * style, some properties to show paypal button, check out the docs https://developer.paypal.com/docs/archive/checkout/how-to/customize-button/ for a complete documentation
   */
  style: PropTypes.object,
  /**
   * Method to get success response from paypal button
   */
  handlerChangePaypal: PropTypes.func,
  /**
   * Components types before payment option paypal
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after payment option paypal
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before payment option paypal
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after payment option paypal
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

PaymentOptionPaypal.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
