import React, { useEffect, useState } from 'react'
import { ProductForm } from '../../../src/components/ProductForm'
import { ProductFormUI } from '../../components/ProductFormUI'
import { Cart } from '../../../src/components/Cart'
import { CartUI } from '../../components/CartUI'
import { useApi } from '../../../src/contexts/ApiContext'

export const ProductOptionExample = () => {
  const [ordering] = useApi()
  const [productCart, setProductCart] = useState({})
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
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: ProductFormUI,
    /**
     * `businessId` is required if `product` prop is not present
     */
    businessId: productCart.businessId || 41,
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
    // product: product,
    /**
     * Product from cart
     */
    productCart: productCart,
    /**
     * Function to save event
     */
    onSave: (productCart) => {
      console.log(productCart)
    }
  }

  if (!productCart.id) {
    productFormProps.product = product
  } else {
    productFormProps.categoryId = productCart.categoryId
    productFormProps.productId = productCart.id
  }

  const cartProps = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: CartUI,
    /**
     * Function to edit product behavior
     */
    handleEditProduct: (productCart) => {
      setProductCart(productCart)
    }
  }

  return (
    <>
      <div style={{ float: 'left', width: '50%' }}>
        <h2>Product options</h2>
        {
          product && <ProductForm {...productFormProps} />
        }
      </div>
      <div style={{ float: 'left', width: '50%' }}>
        <h2>Cart</h2>
        <Cart {...cartProps} />
      </div>
    </>
  )
}
