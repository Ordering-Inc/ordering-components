import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useOrder } from '../../contexts/OrderContext'
import { useApi } from '../../contexts/ApiContext'

export const UpsellingPage = (props) => {
  const { UIComponent, onSave, businessId, products } = props
  const [orderState, { addProduct }] = useOrder()
  const [productsList, setProductsList] = useState({ products: [], loading: false, error: false })
  const [ordering] = useApi()
  const [upsellingProducts, setUpsellingProducts] = useState([])

  useEffect(() => {
    if (products.length || businessId) {
      if (products.length) {
        handleProductsOfCart(products)
      } else {
        getProducts()
      }
    } else {
      setProductsList({
        ...productsList,
        error: true,
        message: 'BusinessId is required when products is not defined'
      })
    }
  }, [])

  /**
   * getting products if array of product is not defined
   */
  const getProducts = async () => {
    try {
      setProductsList({
        ...productsList,
        loading: true
      })
      const { content: { result } } = await ordering
        .businesses(businessId)
        .products()
        .parameters({ type: 1 })
        .get()

      setProductsList({
        ...productsList,
        loading: false,
        products: result
      })
      handleProductsOfCart(result)
    } catch (error) {
      setProductsList({
        ...productsList,
        loading: false,
        error
      })
    }
  }

  /**
   *
   * filt products if they are already in the cart
   * @param {array} cartProducts
   */
  const getUpsellingProducts = (cartProducts, result) => {
    setUpsellingProducts(result.filter(product => product.upselling && cartProducts.map(cartProduct => {
      return product.id !== cartProduct.id
    })))
  }
  /**
   * products of the cart
   */
  const handleProductsOfCart = (result) => {
    const cartProducts = Object.values(orderState.carts).map(cart => {
      return cart?.products.map(product => {
        return product
      })
    })
    getUpsellingProducts(cartProducts, result)
  }

  /**
   * adding product to the cart from upselling
   * @param {object} product Product object
   */
  const handleAddProductUpselling = async (product) => {
    const successful = await addProduct(product)
    console.log(orderState)
    console.log(successful)
    if (successful) {
      onSave(product)
    }
  }

  return (
    <UIComponent {...props} handleAddProductUpselling={handleAddProductUpselling} upsellingProducts={upsellingProducts} productsList={productsList} />
  )
}

UpsellingPage.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
    * upselling products that do not repeat in the cart
   */
  upsellingProducts: PropTypes.array,
  /**
   * Function to save event
   */
  onSave: PropTypes.func,
  /**
   * BusinessId is required when products is not defined
   */
  businessId: PropTypes.number
}
