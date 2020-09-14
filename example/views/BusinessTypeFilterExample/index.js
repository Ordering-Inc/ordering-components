import React from 'react'

import { BusinessTypeFilterUI } from '../../components/BusinessTypeFilterUI'
import { BusinessTypeFilter } from '../../../src/components/BusinessTypeFilter'
import { TestComponent } from '../../components/TestComponent'

export const BusinessTypeFilterExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: BusinessTypeFilterUI,
    /**
     * Array that contains business types to filter
     */
    businessTypes: ['All', 'Food', 'Alcohol', 'Groceries', 'Laundry'],
    /**
     * Default business type to show
     */
    defaultBusinessType: 'Food',
    /**
     * onChangeBusinessType, method to get value selected
     */
    onChangeBusinessType: (e) => { console.log(e) },
    /**
     * Components types before business type filter
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after business type filter
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before business type filter
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after business type filter
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <BusinessTypeFilter {...props} />
}
