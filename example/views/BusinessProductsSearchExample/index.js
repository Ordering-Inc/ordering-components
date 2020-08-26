import React from 'react'

import { BusinessProductsSearchUI } from '../../components/BusinessProductsSearchUI'
import { BusinessProductsSearch } from '../../../src/components/BusinessProductsSearch'
import { TestComponent } from '../../components/TestComponent'

export const BusinessProductsSearchExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: BusinessProductsSearchUI,
    /**
     * Products, this must be containt an array of products to filter
     */
    products: [],
    /**
     * BusinessID, this must be containt a business id to get products from API
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
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after Business products search
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <BusinessProductsSearch {...props} />
}
