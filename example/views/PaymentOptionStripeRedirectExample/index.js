import React from 'react'

import { PaymentOptionStripeRedirectUI } from '../../components/PaymentOptionStripeRedirectUI'
import { PaymentOptionStripeRedirect } from '../../../src/components/PaymentOptionStripeRedirect'
import { TestComponent } from '../../components/TestComponent'

export const PaymentOptionStripeRedirectExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: PaymentOptionStripeRedirectUI,
    /**
     * currency to use stripe methods
     */
    currency: 'eur',
    /**
     * paymentMethods, array that must be contains a list of payment methods
     */
    paymentMethods: [
      { name: 'Bancontact', value: 'bancontact' },
      { name: 'Alipay', value: 'alipay' },
      { name: 'Giropay', value: 'giropay' },
      { name: 'iDEAL', value: 'ideal' }
    ],
    /**
     * Method to get stripe source from a stripe redirect form
     */
    handlerStripeSource: (e) => { console.log('Stripe source: ', e) },
    /**
     * Components types before payment option stripe redirect
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after payment option stripe redirect
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before payment option stripe redirect
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after payment option stripe redirect
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <PaymentOptionStripeRedirect {...props} />
}
