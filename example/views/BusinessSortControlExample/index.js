import React from 'react'

import { BusinessSortControlUI } from '../../components/BusinessSortControlUI'
import { BusinessSortControl } from '../../../src/components/BusinessSortControl'
import { TestComponent } from '../../components/TestComponent'

export const BusinessSortControlExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: BusinessSortControlUI,
    /**
     * Array that contains business sort options to filter
     */
    sortOptions: ['Distance', 'Rating', 'Newest', 'A-Z', 'Minimum order', 'Delivery time', 'Pickup time'],
    /**
     * Default business sort option to show
     */
    defaultSortOption: 'Distance',
    /**
     * Property to switch delivery or pickup time on sort options select
     */
    orderType: 'delivery_time',
    /**
     * Components types before business sort control
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after business sort control
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before business sort control
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after business sort control
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <BusinessSortControl {...props} />
}
