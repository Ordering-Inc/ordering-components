import React from 'react'

import { MyOrdersUI } from '../../components/MyOrdersUI'
import { MyOrders } from '../../../src/components/MyOrders'
import { TestComponent } from '../../components/TestComponent'

export const MyOrdersExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: MyOrdersUI,
    /**
     * Components types before my orders
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after my orders
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before my orders
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after my orders
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }
  return <MyOrders {...props} />
}
