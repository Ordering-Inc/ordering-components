import React from 'react'

import { PaymentOptionStripeUI } from '../../components/PaymentOptionStripeUI'
import { PaymentOptionStripe } from '../../../src/components/PaymentOptionStripe'
import { TestComponent } from '../../components/TestComponent'

export const PaymentOptionStripeExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: PaymentOptionStripeUI,
    /**
     * Business id to get cards from API
     */
    businessId: 41,
    /**
     * User id to pass in endpoint to get cards from API,
     */
    userId: 1,
    /**
     * handler stripe card selected from UI
     */
    handlerSelectCard: (e) => { console.log('card selected:', e) },
    /**
     * Components types before payment option
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after payment option
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before payment option
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after payment option
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }
  return <PaymentOptionStripe {...props} />
}
