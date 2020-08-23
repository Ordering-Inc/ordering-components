import React, { useEffect, useState } from 'react'
import { ProductForm } from '../../../src/components/ProductForm'
import { ProductFormUI } from '../../components/ProductFormUI'

export const ProductOptionExample = ({ ordering }) => {
  const [product, setProduct] = useState()
  const loadProductWithOptions = async () => {
    const { content: { result } } = await ordering.businesses(41).categories(251).products(1309).get()
    setProduct(result)
  }

  useEffect(() => {
    loadProductWithOptions()
  }, [])

  const productFormProps = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: ProductFormUI,
    /**
     * `businessId` is required if `product` prop is not present
     */
    // businessId: 41,
    /**
     * `categoryId` is required if `product` prop is not present
     */
    // categoryId: 251,
    /**
     * `productId` is required if `product` prop is not present
     */
    // productId: 1309,
    /**
     * `product` is required if `businessId`, `categoryId` or `productId` is not present
     */
    product: product,
    /**
     * Function to save event
     */
    onSave: (productCart) => {
      console.log(productCart)
    }
  }

  return (
    <>
      {
        product && <ProductForm {...productFormProps} />
      }
    </>
  )
}
