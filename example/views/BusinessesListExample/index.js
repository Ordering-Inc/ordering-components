import React from 'react'
import { TestComponent } from '../../components/TestComponent'
import { BusinessesList } from '../../../src/components/BusinessesList'
import { BusinessesListUI } from '../../components/BusinessesListUI'

export const BusinessesListExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: BusinessesListUI,
    /**
     * Pagination settings
     * You can set the pageSize, initialPage and controlType can be by pages or infinity
     */
    paginationSettings: {
      /**
       * initialPage only work with control type `pages`
       */
      initialPage: 1,
      pageSize: 10,
      controlType: 'infinity'
    },
    /**
     * Components types before businesses list
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after businesses list
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before businesses list
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after businesses list
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <BusinessesList {...props} />
}
