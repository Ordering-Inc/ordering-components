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
