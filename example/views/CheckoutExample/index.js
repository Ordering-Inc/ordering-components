import React from 'react'

import { CheckoutUI } from '../../components/CheckoutUI'
import { Checkout } from '../../../src/components/Checkout'
import { TestComponent } from '../../components/TestComponent'

export const CheckoutExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: CheckoutUI,
    /**
     * Id for get business details from API
     */
    businessId: 41,
    /**
     * handler values from other components
     */
    handlerValues: (e) => { console.log(e) },
    /**
     * Components types before checkout
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after checkout
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before checkout
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after checkout
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <Checkout {...props} />
}
