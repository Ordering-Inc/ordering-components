import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'

export const BusinessFeaturedProducts = (props) => {
  const {
    products,
    businessId,
    UIComponent
  } = props

  const [ordering] = useApi()
  const [productsList, setProductsList] = useState({ products, loading: true, error: false })

  /**
   * Method to get products from API
   */
  const getProducts = async () => {
    try {
      const { content: { result } } = await ordering
        .businesses(businessId)
        .parameters({ type: 1 })
        .where({ attribute: 'featured', value: true })
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

  /**
   * handler to get product id from UI
   * @param {number} val product id
   */
  const onClickProduct = (val) => {
    console.log(val)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          productsList={productsList}
          handlerClickProduct={onClickProduct}
        />
      )}
    </>
  )
}

BusinessFeaturedProducts.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Products, this must be containt array of business products
   */
  products: PropTypes.arrayOf(PropTypes.object),
  /**
   * BusinessId, this must be containt a business id
   */
  businessId: PropTypes.number,
  /**
   * handlerClickProduct, method to handle click on product
   */
  handlerClickProduct: PropTypes.func,
  /**
   * Components types before Business featured products
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Business featured products
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Business featured products
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Business featured products
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessFeaturedProducts.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
