import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useApi } from '../../contexts/ApiContext'
import { useOrder } from '../../contexts/OrderContext'
import { useSession } from '../../contexts/SessionContext'

export const UpsellingPage = (props) => {
  const { UIComponent, useSuggestiveUpselling, products, cartProducts, onSave } = props
  const [upsellingProducts, setUpsellingProducts] = useState({ products: [], loading: true, error: false })
  const [businessProducts, setBusinessProducts] = useState([])
  const [ordering] = useApi()
  const [orderState] = useOrder()
  const [{ token }] = useSession()
  const currentCart = orderState.carts[`businessId:${props.businessId}`]

  const businessId = props.uuid
    ? Object.values(orderState.carts).find(_cart => _cart?.uuid === props.uuid)?.business_id ?? {}
    : props.businessId

  useEffect(() => {
    if (products?.length || businessId) {
      if (products?.length && !props.uuid) {
        getUpsellingProducts(products)
      } else {
        if (useSuggestiveUpselling) {
          setUpsellingProducts({
            ...upsellingProducts,
            loading: false
          })
        } else {
          getProducts()
        }
      }
    } else {
      setUpsellingProducts({
        ...upsellingProducts,
        error: true,
        message: 'BusinessId is required when products is not defined'
      })
    }
  }, [businessId])

  useEffect(() => {
    if (useSuggestiveUpselling) return
    if (!upsellingProducts.loading && !orderState.loading) {
      getUpsellingProducts(businessProducts)
    }
  }, [orderState.loading, upsellingProducts.loading])

  useEffect(() => {
    if (!cartProducts?.length || !useSuggestiveUpselling || upsellingProducts.loading || orderState.loading) return
    getSuggestiveProducts()
  }, [cartProducts?.length, orderState.loading, upsellingProducts.loading])

  /**
   * getting products if array of product is not defined
   */
  const getProducts = async () => {
    try {
      const { content: { result } } = await ordering
        .businesses(businessId)
        .products()
        .parameters({ type: orderState.options.type, params: 'upsellings' })
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
   * getting suggestive products if useSuggestiveUpselling is true
   */
  const getSuggestiveProducts = async () => {
    if (!currentCart?.uuid) return
    try {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/carts/${currentCart?.uuid}/upselling`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setBusinessProducts(result)
        getUpsellingProducts(result)
      } else {
        setUpsellingProducts({
          ...upsellingProducts,
          loading: false,
          error
        })
      }
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
    const upsellingProductsfiltered = result.filter(product => product.upselling)

    const repeatProducts = cartProducts?.length ? cartProducts?.filter(cartProduct => upsellingProductsfiltered.find(product => product.id === cartProduct.id)) : []

    setUpsellingProducts({
      ...upsellingProducts,
      loading: false,
      products: repeatProducts?.length
        ? upsellingProductsfiltered?.filter(product => !product.inventoried && !repeatProducts.find(repeatProduct => repeatProduct.id === product.id))
        : upsellingProductsfiltered
    })
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
  products: PropTypes.array,
  /**
   * BusinessId is required when products is not defined
   */
  businessId: PropTypes.number,
  /**
   * handleCustomClick, function to get click event and return product without default behavior
   */
  onSave: PropTypes.func
}
