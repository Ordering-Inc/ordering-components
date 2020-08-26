import React from 'react'

import { ProductsListingUI } from '../../components/ProductsListingUI'
import { ProductsListing } from '../../../src/components/ProductsListing'
import { TestComponent } from '../../components/TestComponent'

export const ProductsListingExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
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
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after products listing
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <ProductsListing {...props} />
}
