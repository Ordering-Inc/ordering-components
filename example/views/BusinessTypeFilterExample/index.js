import React from 'react'

import { BusinessTypeFilterUI } from '../../components/BusinessTypeFilterUI'
import { BusinessTypeFilter } from '../../../src/components/BusinessTypeFilter'
import { TestComponent } from '../../components/TestComponent'

export const BusinessTypeFilterExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: BusinessTypeFilterUI,
    /**
     * Array that contains business types to filter
     */
    businessTypes: [
      { key: 'All', value: 0 },
      { key: 'Food', value: 'food' },
      { key: 'Alcohol', value: 'alcohol' },
      { key: 'Groceries', value: 'groceries' },
      { key: 'Laundry', value: 'laundry' }
    ],
    /**
     * Default business type to show
     */
    defaultBusinessType: 'food',
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
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after business type filter
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }
  return <BusinessTypeFilter {...props} />
}
