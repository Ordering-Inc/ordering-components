import React from 'react'

import { PaymentOptionStripeDirectUI } from '../../components/PaymentOptionStripeDirectUI'
import { PaymentOptionStripeDirect } from '../../../src/components/PaymentOptionStripeDirect'
import { TestComponent } from '../../components/TestComponent'

export const PaymentOptionStripeDirectExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: PaymentOptionStripeDirectUI,
    /**
     * Business id to get cards from API
     */
    businessId: 41,
    /**
     * handler stripe card token created from UI
     */
    handlerCreatedCard: (e) => { console.log('card created:', e) },
    /**
     * Components types before payment option stripe direct
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after payment option stripe direct
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before payment option stripe direct
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after payment option stripe direct
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }
  return <PaymentOptionStripeDirect {...props} />
}
