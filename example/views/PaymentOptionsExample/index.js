import React from 'react'

import { PaymentOptionsUI } from '../../components/PaymentOptionsUI'
import { PaymentOptions } from '../../../src/components/PaymentOptions'
import { TestComponent } from '../../components/TestComponent'

export const PaymentOptionsExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: PaymentOptionsUI,
    /**
     * Options, this must be containt an array of payment options
     */
    options: null,
    /**
     * businessId, this must be contains business id to fetch business from API
     */
    businessId: 41,
    /**
     * Get option selected
     */
    onChangePayment: (e) => { console.log('onChangePayment', e) },
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
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after Payment options
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }
  return <PaymentOptions {...props} />
}
