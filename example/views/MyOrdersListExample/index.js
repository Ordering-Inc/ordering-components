import React from 'react'

import { MyOrdersListUI } from '../../components/MyOrdersListUI'
import { MyOrdersList } from '../../../src/components/MyOrdersList'
import { TestComponent } from '../../components/TestComponent'

export const MyOrdersListExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: MyOrdersListUI,
    /**
     * Flag to change order card type [active, past]
     */
    orderType: 'active',
    // orderType: 'previous',
    /**
     * array that must be containt order status
     */
    status: [0, 3, 4, 7, 8, 9],
    // status: [1, 2, 5, 6, 10, 11, 12],
    /**
     * This must be contain array of orders
     */
    orders: [],
    /**
     * Components types before my orders list
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after my orders list
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before my orders list
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after my orders list
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }

  return <MyOrdersList {...props} />
}
