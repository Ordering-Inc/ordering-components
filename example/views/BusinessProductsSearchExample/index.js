import React from 'react'

import { BusinessProductsSearchUI } from '../../components/BusinessProductsSearchUI'
import { BusinessProductsSearch } from '../../../src/components/BusinessProductsSearch'
import { TestComponent } from '../../components/TestComponent'

export const BusinessProductsSearchExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: BusinessProductsSearchUI,
    /**
     * Method to handle search value
     */
    onChangeSearch: (val) => { console.log(val) },
    /**
     * Components types before Business products search
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after Business products search
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before Business products search
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after Business products search
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }
  return <BusinessProductsSearch {...props} />
}
