import React from 'react'

import { ProductImagesUI } from '../../components/ProductImagesUI'
import { ProductImages } from '../../../src/components/ProductImages'
import { TestComponent } from '../../components/TestComponent'

export const ProductImagesExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: ProductImagesUI,
    /**
     * hero, this must be contain the main product image
     */
    hero: 'https://picsum.photos/510/510',
    /**
     * gallery, this must be contain the array of product images
     */
    gallery: ['https://picsum.photos/510/510'],
    /**
     * Components types before product images
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after product images
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before product images
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after product images
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <ProductImages {...props} />
}
