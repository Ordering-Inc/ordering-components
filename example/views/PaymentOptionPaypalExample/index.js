import React from 'react'

import { PaymentOptionPaypalUI } from '../../components/PaymentOptionPaypalUI'
import { PaymentOptionPaypal } from '../../../src/components/PaymentOptionPaypal'
import { TestComponent } from '../../components/TestComponent'

export const PaymentOptionPaypalExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: PaymentOptionPaypalUI,
    /**
     * Amount to charge on paypal method
     */
    amount: '1.00',
    /**
     * paypal ClientID
     */
    clientID: '',
    /**
     * style, some properties to show paypal button, check out the docs https://developer.paypal.com/docs/archive/checkout/how-to/customize-button/ for a complete documentation
     */
    style: {
      layout: 'vertical',
      color: 'gold',
      shape: 'rect',
      label: 'paypal'
    },
    /**
     * Method to get success response from paypal button
     */
    handlerChangePaypal: null,
    /**
     * Components types before payment option paypal
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after payment option paypal
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before payment option paypal
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after payment option paypal
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <PaymentOptionPaypal {...props} />
}
