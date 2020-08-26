import React from 'react'

import { PaymentOptionsUI } from '../../components/PaymentOptionsUI'
import { PaymentOptions } from '../../../src/components/PaymentOptions'
import { TestComponent } from '../../components/TestComponent'

export const PaymentOptionsExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: PaymentOptionsUI,
    /**
     * Options, this must be containt an array of payment options
     */
    options: ['cash', 'card on delivery', 'stripe', 'stripe direct', 'paypal express', 'stripe connect', 'stripe redirect'],
    /**
     * optionDefault, this must be containt one default payment option
     */
    optionDefault: 'stripe',
    /**
     * Components types before Payment options
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after Payment options
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before Payment options
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after Payment options
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <PaymentOptions {...props} />
}
