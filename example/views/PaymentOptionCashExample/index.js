import React from 'react'

import { PaymentOptionCashUI } from '../../components/PaymentOptionCashUI'
import { PaymentOptionCash } from '../../../src/components/PaymentOptionCash'
import { TestComponent } from '../../components/TestComponent'

export const PaymentOptionCashExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: PaymentOptionCashUI,
    /**
     * Flag to know if use props from context or not
     */
    useOrderContext: false,
    /**
     * Business id to know where order total come from
     */
    businessId: 41,
    /**
     * orderTotal, amount of order total
     */
    orderTotal: 5,
    /**
     * handler value typed on input cash
     */
    handlerSubmit: (e) => { console.log(e) },
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
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after payment option cash
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }
  return <PaymentOptionCash {...props} />
}
