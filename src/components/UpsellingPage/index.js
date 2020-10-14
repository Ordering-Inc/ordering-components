import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useOrder } from '../../contexts/OrderContext'
import { useApi } from '../../contexts/ApiContext'

export const UpsellingPage = (props) => {
  const { UIComponent, onSave, businessId, products, cartProducts } = props
  const [{ addProduct }] = useOrder()
  const [productsList, setProductsList] = useState({ products: [], loading: true, error: false })
  const [ordering] = useApi()
  const [upsellingProducts, setUpsellingProducts] = useState([])

  useEffect(() => {
    if (products?.length || businessId) {
      if (products?.length) {
        getUpsellingProducts(products)
        setProductsList({
          ...productsList,
          loading: false
        })
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
      const { content: { result } } = await ordering
        .businesses(businessId)
        .products()
        .parameters({ type: 1 })
        .get()
      getUpsellingProducts(result)
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
  /**
   *
   * filt products if they are already in the cart
   * @param {array} cartProducts
   */
  const getUpsellingProducts = (result) => {
    if (cartProducts?.length) {
      const repeatProducts = cartProducts.map(cartProduct => result.find(product => product.id === cartProduct.id))
      setUpsellingProducts(result.filter(product => product.upselling && !repeatProducts.find(repeatProduct => repeatProduct.id === product.id)))
    } else {
      setUpsellingProducts(result.filter(product => product.upselling))
    }
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
    <UIComponent
      {...props}
      handleAddProductUpselling={handleAddProductUpselling}
      upsellingProducts={upsellingProducts}
      productsList={productsList}
    />
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
