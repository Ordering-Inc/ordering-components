import React from 'react'

import { OrdersOverviewUI } from '../../components/OrdersOverviewUI'
import { OrdersOverview } from '../../../src/components/OrdersOverview'
import { TestComponent } from '../../components/TestComponent'

export const OrdersOverviewExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: OrdersOverviewUI,
    /**
     * Components types before products list
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after products list
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before products list
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after products list
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }

  return <OrdersOverview {...props} />
}
