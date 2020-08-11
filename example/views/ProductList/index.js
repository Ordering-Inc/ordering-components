import React from 'react'
import { ProductsListing } from '../../../src/components/ProductsListing'
import { ProductsListingUI } from '../../components/ProductsListingUI'
import { TestComponent } from '../../components/TestComponent'
import { ary, random } from 'lodash'

export const ProductList = ({ ordering }) => {
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
     * Function to get order that was clicked
     * @param {Object} order Order that was clicked
     */
    businessId: 41,
    categories: [
        { id:0, name:'All', image:'', products: [] },
        { id:1, name:'Category 1', image:'', products: [] },
        { id:2, name:'Category 2', image:'', products: [] },
        { id:3, name:'Category 3', image:'', products: [] },
        { id:4, name:'Category 4', image:'', products: [] },
        { id:5, name:'Category 5', image:'', products: [] },
    ],
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
