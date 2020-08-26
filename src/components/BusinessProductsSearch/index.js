import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const BusinessProductsSearch = (props) => {
  const {
    products,
    businessId,
    isSearchByName,
    isSearchByDescription,
    ordering,
    UIComponent
  } = props

  /**
   * Object to save products, loading and error values
   */
  const [productsList, setProductsList] = useState({ products, loading: true, error: false })
  /**
   * This must be contains search value from UI
   */
  const [searchValue, setSearchValue] = useState(null)

  /**
   * Method to get products from API
   */
  const getProducts = async () => {
    try {
      setProductsList({
        ...productsList,
        loading: true
      })
      const { content: { result } } = await ordering
        .businesses(businessId)
        .parameters({ type: 1 })
        .products()
        .get()

      const productsFiltered = searchValue
        ? result.filter(
          product => (product.name.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByName) ||
            (product.description.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByDescription)
        )
        : result

      setProductsList({
        ...productsList,
        loading: false,
        products: productsFiltered
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
    if (products.length) {
      const productsFiltered = searchValue
        ? products.filter(
          product => (product.name.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByName) ||
            (product.description.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByDescription)
        )
        : products
      setProductsList({
        ...productsList,
        loading: false,
        products: productsFiltered
      })
    } else {
      getProducts()
    }
  }, [searchValue])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          productsList={productsList}
          handleChangeSearch={(val) => setSearchValue(val)}
        />
      )}
    </>
  )
}

BusinessProductsSearch.propTypes = {
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
   * Products, this must be containt an array of products to filter
   */
  products: PropTypes.arrayOf(PropTypes.object),
  /**
   * BusinessID, this must be containt a business id to get products from API
   */
  businessId: PropTypes.number,
  /**
   * Enable/disable search by name
   */
  isSearchByName: PropTypes.bool,
  /**
   * Enable/disable search by description
   */
  isSearchByDescription: PropTypes.bool,
  /**
   * Components types before Business products search
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Business products search
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Business products search
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Business products search
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessProductsSearch.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
