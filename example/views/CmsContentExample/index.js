import React from 'react'

import { CmsContentUI } from '../../components/CmsContentUI'
import { CmsContent } from '../../../src/components/CmsContent'
import { TestComponent } from '../../components/TestComponent'

export const CmsContentExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: CmsContentUI,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    pageSlug: 'OrderingPages',
    /**
     * Components types before login form
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after login form
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before login form
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after login form
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }
  return <CmsContent {...props} />
}
