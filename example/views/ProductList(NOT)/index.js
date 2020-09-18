import React from 'react'
import { ProductsListing } from '../../../src/components/ProductsListing(NOT)'
import { ProductsListingUI } from '../../components/ProductsListingUI(NOT)'
import { TestComponent } from '../../components/TestComponent'

export const ProductList = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: ProductsListingUI,
    /**
     * Function to get order that was clicked
     * @param {Object} order Order that was clicked
     */
    businessId: 41,
    categories: [],
    /**
     * Order orders by some attribute. Default by `id`.
     */
    orderBy: 'id',
    /**
     * Order direction ascendent (asc) or descendent (desc). Default is `desc`.
     */
    orderDirection: 'desc',
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
      controlType: 'pages'
    },
    /**
     * Enable/Disable default session manager
     * Save user and token with default session manager
     */
    useDefaultSessionManager: true,
    /**
     * Access token to update user
     * Is required when `useDefualtSessionManager` is false
     */
    accessToken: 'TOKEN',
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
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after login form
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }

  return <ProductsListing {...props} />
}
