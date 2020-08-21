import React from 'react'

import { MyOrdersUI } from '../../components/MyOrdersUI'
import { MyOrders } from '../../../src/components/MyOrders'
import { TestComponent } from '../../components/TestComponent'

export const MyOrdersExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: MyOrdersUI,
    /**
     * Components types before [PUT HERE COMPONENT NAME]
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after [PUT HERE COMPONENT NAME]
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before [PUT HERE COMPONENT NAME]
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after [PUT HERE COMPONENT NAME]
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <MyOrders {...props} />
}
