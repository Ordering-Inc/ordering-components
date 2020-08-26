import React, { useEffect, useState } from 'react'

import { ProductsListUI } from '../../components/ProductsListUI'
import { ProductsList } from '../../../src/components/ProductsList'
import { TestComponent } from '../../components/TestComponent'

export const ProductsListExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: ProductsListUI,
    /**
     * Components types before products list
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after products list
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before products list
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after products list
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }

  const [productsList, setProductsList] = useState({ products: [], loading: true, error: false })

  const getProducts = async () => {
    try {
      const { content: { result } } = await ordering
        .businesses(41)
        .parameters({ type: 1 })
        .products()
        .get()

      setProductsList({
        ...productsList,
        loading: false,
        products: result
      })
    } catch (error) {
      setProductsList({
        ...productsList,
        loading: false,
        error
      })
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return <ProductsList {...props} productsList={productsList} />
}
