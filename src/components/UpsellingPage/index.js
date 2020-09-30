import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useOrder } from '../../contexts/OrderContext'

export const UpsellingPage = (props) => {
  const { UIComponent, onSave, products } = props
  const [orderState, { addProduct }] = useOrder()
  const [upsellingProducts, setUpsellingProducts] = useState([])

  useEffect(() => {
    handleProductsOfCart()
  }, [products])

  /**
   * products of the cart
   */
  const handleProductsOfCart = () => {
    const cartProducts = Object.values(orderState.carts).map(cart => {
      return cart?.products.map(product => {
        return product
      })
    })
    getUpsellingProducts(cartProducts)
  }

  /**
   *
   * filt products if they are already in the cart
   * @param {array} cartProducts
   */
  const getUpsellingProducts = (cartProducts) => {
    setUpsellingProducts(products.filter(product => product.upselling && cartProducts.map(cartProduct => {
      return product.id !== cartProduct.id
    })))
  }

  /**
   * adding product to the cart from upselling
   * @param {object} product Product object
   */
  const handleAddProductUpselling = async (product) => {
    const successful = await addProduct(product)
    if (successful) {
      onSave(product)
    }
  }

  return (
    <UIComponent {...props} handleAddProductUpselling={handleAddProductUpselling} upsellingProducts={upsellingProducts} />
  )
}

UpsellingPage.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType

}
