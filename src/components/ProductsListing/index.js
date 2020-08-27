import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const ProductsListing = (props) => {
  const {
    isSearchByName,
    isSearchByDescription,
    businessId,
    ordering,
    UIComponent
  } = props

  /**
   * This must be contains search value from UI
   */
  const [searchValue, setSearchValue] = useState(null)
  /**
   * This must be contains category selected by user
   */
  const [categoryValue, setCategoryValue] = useState(null)
  /**
   * Object to save products, loading and error values
   */
  const [productsList, setProductsList] = useState({ products: [], loading: true, error: false })

  /**
   * List of business categories
   */
  const [categories, setCategories] = useState([])

  /**
   * Method to check if a product match with search value
   * @param {string} name
   * @param {*string} description
   */
  const isMatchSearch = (name, description) => {
    if (!searchValue) return true
    return (name.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByName) ||
      (description.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByDescription)
  }

  /**
   * Method to check if a product match with search value
   * @param {number} category
   */
  const isMatchCategory = (categoryId) => {
    if (!categoryValue) return true
    return Number(categoryId) === Number(categoryValue)
  }

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

      const productsFiltered = searchValue || categoryValue
        ? result.filter(product => isMatchSearch(product.name, product.description) && isMatchCategory(product.category_id))
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

  /**
   * Method to get categories from api used business id
   */
  const getCategories = async () => {
    const { content: { result } } = await ordering.businesses(businessId).categories().get()
    setCategories(result)
  }

  useEffect(() => {
    getProducts()
  }, [searchValue, categoryValue])

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          categoryValue={!!categoryValue}
          categories={categories}
          productsList={productsList}
          handlerClickCategory={(val) => setCategoryValue(val)}
          handlerChangeSearch={(val) => setSearchValue(val)}
        />
      )}
    </>
  )
}

ProductsListing.propTypes = {
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
   * Businessid, this must be contains an business id for get data from API
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
   * Components types before products listing
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after products listing
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before products listing
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after products listing
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ProductsListing.defaultProps = {
  isSearchByName: true,
  isSearchByDescription: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
