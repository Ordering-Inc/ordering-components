import React from 'react'

import { OrderDetailsUI } from '../../components/OrderDetailsUI'
import { OrderDetails } from '../../../src/components/OrderDetails'
import { TestComponent } from '../../components/TestComponent'

export const OrderDetailsExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: OrderDetailsUI,
    /**
     * This must be contains orderId to fetch
     */
    orderId: 48,
    /**
     * Order, this must be contains an object with all order info
     */
    order: null,
    /**
     * Components types before order details
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after order details
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before order details
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after order details
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <OrderDetails {...props} />
}
