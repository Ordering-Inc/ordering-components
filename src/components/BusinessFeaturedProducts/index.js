import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const BusinessFeaturedProducts = (props) => {
  const {
    ordering,
    UIComponent
  } = props

  const [productsList, setProductsList] = useState({ products: [], loading: true, error: false })

  const getProducts = async () => {
    try {
      const { content: { result } } = await ordering.businesses(41).categories(248).products().get()
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

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          productsList={productsList}
        />
      )}
    </>
  )
}

BusinessFeaturedProducts.propTypes = {
  /**
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  ordering: PropTypes.object.isRequired,
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
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
