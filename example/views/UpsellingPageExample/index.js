import React, { useEffect, useState } from 'react'

import { UpsellingPage } from '../../../src/components/UpsellingPage'
import { UpsellingPageUI } from '../../components/UpsellingPageUI'
import { useApi } from '../../../src/contexts/ApiContext'
import { useOrder } from '../../../src/contexts/OrderContext'

export const UpsellingPageExample = () => {
  const [productsList, setProductsList] = useState({ products: [], loading: true, error: false })
  const [ordering] = useApi()
  const [upsellingProducts, setUpsellingProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  const [orderState] = useOrder()

  useEffect(() => {
    getProducts()
    handleProductsOfCart()
  }, [])

  /**
   * products of the cart
   */
  const handleProductsOfCart = () => {
    setCartProducts(Object.values(orderState.carts).map(cart => {
      return cart?.products.map(product => {
        return product
      })
    }))
  }

  const props = {

    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: UpsellingPageUI,
    /**
     * upselling products that do not repeat in the cart
     */
    upsellingProducts: upsellingProducts,
    /**
     * Function to save event
     */
    onSave: (productCart) => {
      console.log(productCart)
    }
  }

  const getProducts = async () => {
    try {
      setProductsList({
        ...productsList,
        loading: true
      })
      const { content: { result } } = await ordering
        .businesses(41)
        .products()
        .parameters({ type: 1 })
        .get()

      setProductsList({
        ...productsList,
        loading: false,
        products: result
      })
      setUpsellingProducts(result.filter(product => product.upselling && cartProducts.map(cartProduct => {
        return product.id !== cartProduct.id
      })))
    } catch (error) {
      setProductsList({
        ...productsList,
        loading: false,
        error
      })
    }
  }

  return (
    <UpsellingPage {...props} />
  )
}
