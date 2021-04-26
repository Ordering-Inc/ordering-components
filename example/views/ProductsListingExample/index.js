import React from 'react'

import { ProductsListingUI } from '../../components/ProductsListingUI'
import { ProductsListing } from '../../../src/components/ProductsListing'
import { TestComponent } from '../../components/TestComponent'

export const ProductsListingExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: ProductsListingUI,
    /**
     * Businessid, this must be contains an business id for get data from API
     */
    businessId: 41,
    /**
     * Enable/disable search by name
     */
    isSearchByName: true,
    /**
     * Enable/disable search by description
     */
    isSearchByDescription: true,
    /**
     * Components types before products listing
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after products listing
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before products listing
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after products listing
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }
  return <ProductsListing {...props} />
}
