import React, { useState, useEffect } from 'react'
import { useOrder } from '../../../src/contexts/OrderContext'
import { ProductForm } from '../../../src/components/ProductForm'
import { ProductFormUI } from '../../components/ProductFormUI'
import { CartUI } from '../../components/CartUI'
import { Cart } from '../../../src/components/Cart'
import { useApi } from '../../../src/contexts/ApiContext'
import { useEvent } from '../../../src/contexts/EventContext'

export const OrderContextExample = () => {
  const [ordering] = useApi()
  const [, { applyCoupon }] = useOrder()
  const [productCart, setProductCart] = useState({})
  const [product, setProduct] = useState()
  const [events] = useEvent()

  const loadProductWithOptions = async () => {
    const { content: { result } } = await ordering.businesses(41).categories(251).products(1309).get()
    setProduct(result)
  }

  useEffect(() => {
    loadProductWithOptions()
    const handleCartProductAdded = (product, cart) => {
      console.log(product, cart)
    }
    events.on('cart_product_added', handleCartProductAdded)
    return () => {
      events.off('cart_product_added', handleCartProductAdded)
    }
  }, [])

  const handleAddCoupon = () => {
    applyCoupon({
      business_id: productCart.businessId || 41,
      coupon: 'TESTREACT'
    })
  }

  const productFormProps = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: ProductFormUI,
    /**
     * `businessId` is required
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
      setProductCart({})
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
      {/* Current order type: {orderState.options.type}<br />
      Current order address: {orderState.options.address_id}<br />
      <button onClick={() => hanldeChangeType(1)}>Change type to delivery</button>
      <button onClick={() => hanldeChangeType(2)}>Change type to pickup</button>
      <br />
      <button onClick={() => hanldeChangeAddress(1)}>Change address to 1</button>
      <button onClick={() => hanldeChangeAddress(17)}>Change address to 17</button>
      <br />
      <button onClick={() => handleChangeMoment()}>Change moment the custom</button>
      <button onClick={() => handleASAP()}>Change moment to ASAP</button>
      <br />
      <button onClick={() => handleAddProduct(PRODUCTS.b411)}>Add product 1 to business 41</button>
      <button onClick={() => handleAddProduct(PRODUCTS.b412)}>Add product 2 to business 41</button>
      {
        Object.values(orderState.carts).map(cart => (
          <div key={cart.uuid}>
            Cart: {cart.uuid}
            {
              cart.products?.map(product => (
                <div key={product.code}>
                  <button onClick={() => handleRemoveProduct(product)}>Remove product {product.code} ({product.quantity})</button>
                  <button onClick={() => handleUpdateProduct(product)}>Update product {product.code} ({product.quantity})</button>
                </div>
              ))
            }
          </div>
        ))
      } */}
      <div>
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
      </div>
      <button onClick={() => handleAddCoupon()}>Add coupon to business cart 41</button>
    </>
  )
}
