import React from 'react'

import { ProductShare } from '../../../src/components/ProductShare'
import { ProductShareUI } from '../../components/ProductShareUI'
import { TestComponent } from '../../components/TestComponent'

export const ProductShareExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: ProductShareUI,

    /**
     * Current product business name
     */
    slug: 'mcbonalds',

    /**
     * product category id
     */
    categoryId: 248,

    /**
     * product id
     */
    productId: 1292,
    /**
     * Components types before product share
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after product share
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before product share
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after product share
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }

  return <ProductShare {...props} />
}
