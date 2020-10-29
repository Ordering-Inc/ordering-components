import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useApi } from '../../contexts/ApiContext'

export const UpsellingPage = (props) => {
  const { UIComponent, businessId, products, cartProducts, onSave } = props

  const [upsellingProducts, setUpsellingProducts] = useState({ products: [], loading: true, error: false })
  const [businessProducts, setBusinessProducts] = useState([])
  const [ordering] = useApi()
  useEffect(() => {
    if (products?.length || businessId) {
      if (products?.length) {
        getUpsellingProducts(products)
      } else {
        getProducts()
      }
    } else {
      setUpsellingProducts({
        ...upsellingProducts,
        error: true,
        message: 'BusinessId is required when products is not defined'
      })
    }
  }, [])

  useEffect(() => {
    if (!upsellingProducts.loading) {
      getUpsellingProducts(businessProducts)
    }
  }, [cartProducts])

  /**
   * getting products if array of product is not defined
   */
  const getProducts = async () => {
    try {
      const { content: { result } } = await ordering
        .businesses(businessId)
        .products()
        .where([{ attribute: 'upselling', value: true }])
        .parameters({ type: 1 })
        .get()
      setBusinessProducts(result)
      getUpsellingProducts(result)
    } catch (error) {
      setUpsellingProducts({
        ...upsellingProducts,
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
    const repeatProducts = cartProducts.filter(cartProduct => result.find(product => product.id === cartProduct.id))
    if (repeatProducts.length) {
      setUpsellingProducts({
        ...upsellingProducts,
        loading: false,
        products: result.filter(product => !repeatProducts.find(repeatProduct => repeatProduct.id === product.id))
      })
    } else {
      setUpsellingProducts({
        ...upsellingProducts,
        loading: false,
        products: result
      })
    }
  }

  /**
   * Function for confirm that the productForm now can be displayed
   * @param {product} product
   */
  const handleFormProduct = (product) => {
    onSave(product)
  }

  return (
    <UIComponent
      {...props}
      upsellingProducts={upsellingProducts}
      handleFormProduct={handleFormProduct}
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
   * BusinessId is required when products is not defined
   */
  businessId: PropTypes.number
}
