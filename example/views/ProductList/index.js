import React from 'react'
import { ProductsListing } from '../../../src/components/ProductsListing'
import { ProductsListingUI } from '../../components/ProductsListingUI'
import { TestComponent } from '../../components/TestComponent'

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
        {id:1, name:'Category 1', image:''},
        {id:2, name:'Category 2', image:''},
        {id:3, name:'Category 3', image:''},
        {id:4, name:'Category 4', image:''},
        {id:5, name:'Category 5', image:''},
    ],
    products: [
        {id:1, name:'Product 1', description:'Product 1 Description', image:'https://loremflickr.com/200/200?lock=1'},
        {id:2, name:'Product 2', description:'Product 2 Description', image:'https://loremflickr.com/200/200?lock=2'},
        {id:3, name:'Product 3', description:'Product 3 Description', image:'https://loremflickr.com/200/200?lock=3'},
        {id:4, name:'Product 4', description:'Product 4 Description', image:'https://lorempixel.com/200/200?lock=4'},
        {id:5, name:'Product 5', description:'Product 5 Description', image:'https://lorempixel.com/200/200?lock=5'},
        {id:6, name:'Product 6', description:'Product 6 Description', image:'https://lorempixel.com/200/200?lock=6'},
        {id:7, name:'Product 7', description:'Product 7 Description', image:'https://lorempixel.com/200/200?lock=7'},
        {id:7, name:'Product 7', description:'Product 7 Description', image:'https://lorempixel.com/200/200?lock=7'},
        {id:7, name:'Product 7', description:'Product 7 Description', image:'https://lorempixel.com/200/200?lock=7'},
        {id:7, name:'Product 7', description:'Product 7 Description', image:'https://lorempixel.com/200/200?lock=7'},
        {id:7, name:'Product 7', description:'Product 7 Description', image:'https://lorempixel.com/200/200?lock=7'},
        {id:7, name:'Product 7', description:'Product 7 Description', image:'https://lorempixel.com/200/200?lock=7'},
        {id:7, name:'Product 7', description:'Product 7 Description', image:'https://lorempixel.com/200/200?lock=7'},
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
