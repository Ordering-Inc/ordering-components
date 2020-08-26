import React from 'react'

import { BusinessFeaturedProductsUI } from '../../components/BusinessFeaturedProductsUI'
import { BusinessFeaturedProducts } from '../../../src/components/BusinessFeaturedProducts'
import { TestComponent } from '../../components/TestComponent'

export const BusinessFeaturedProductsExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: BusinessFeaturedProductsUI,
    /**
     * Products, this must be containt array of business products
     */
    products: [],
    /**
     * Components types before Business featured products
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after Business featured products
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before Business featured products
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after Business featured products
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <BusinessFeaturedProducts {...props} />
}
