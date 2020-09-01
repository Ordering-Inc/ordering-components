import React from 'react'

import { PaymentOptionCashUI } from '../../components/PaymentOptionCashUI'
import { PaymentOptionCash } from '../../../src/components/PaymentOptionCash'
import { TestComponent } from '../../components/TestComponent'

export const PaymentOptionCashExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: PaymentOptionCashUI,
    /**
     * Components types before payment option cash
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after payment option cash
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before payment option cash
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after payment option cash
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <PaymentOptionCash {...props} />
}
