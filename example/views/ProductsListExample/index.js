import React, { useEffect, useState } from 'react'

import { ProductsListUI } from '../../components/ProductsListUI'
import { ProductsList } from '../../../src/components/ProductsList'
import { TestComponent } from '../../components/TestComponent'
import { useApi } from '../../../src/contexts/ApiContext'

export const ProductsListExample = () => {
  const [ordering] = useApi()
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: ProductsListUI,
    /**
     * flag shows categories with products or only products
     */
    isAllCategory: false,
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
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after products list
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }

  const [productsList, setProductsList] = useState({ products: [], loading: true, error: false })
  const [categories, setCategories] = useState([])

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

  const getCategories = async () => {
    const { content: { result } } = await ordering.businesses(41).categories().get()
    setCategories(result)
  }

  useEffect(() => {
    getProducts()
    getCategories()
  }, [])

  return <ProductsList {...props} productsList={productsList} categories={categories} />
}
