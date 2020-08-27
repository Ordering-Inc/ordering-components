import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  useBusinesses,
  BUSINESSES_ACTIONS
} from '../../contexts/BussinessesContext'
import { IndividualBusiness } from '../../../example/components/IndividualBusiness'

export const Business = (props) => {
  const { UIComponent, ordering } = props
  const [data, dispatcher] = useBusinesses()
  const [featured, setFeatured] = useState(false)

  useEffect(() => {
    fetchBusiness()
  }, [])

  /**
   *  function that fetches the ordering sdk library and saves
   *  the business and categories in the business context
   */
  const fetchBusiness = async () => {
    const { response } = await ordering.businesses(47).get()
    dispatcher({
      type: BUSINESSES_ACTIONS.SHOW_BUSINESS,
      business: response.data.result
    })
    dispatcher({
      type: BUSINESSES_ACTIONS.SET_CATEGORIES,
      categories: response.data.result.categories
    })
    setFeatured(response.data.result.featured)
    dispatcher({ type: BUSINESSES_ACTIONS.LOADING, loading: false })
    // console.log(response.data.result);
  }

  /**
   * Handler function of an input that filters the content by category
   */
  const handleCategory = (value) => {
    dispatcher({
      type: BUSINESSES_ACTIONS.SET_CATEGORY,
      actualCategory: value
    })
  }

  /**
   * Handler function of an input that filters the content
   */
  const handleSearch = (value) => {
    dispatcher({
      type: BUSINESSES_ACTIONS.FILT_BY_SEARCH,
      search: value
    })
  }

  /**
   * Element that renders a block with a category and its products
   */
  const categoryBlock = (category) => (
    <div key={category.id}>
      {category === data.actualCategory ? (
        <h3>{data.actualCategory}</h3>
      ) : (
        <h3>{category.name}</h3>
      )}
      <IndividualBusiness category={category} search={data.search} />
    </div>
  )

  /**
   * Element that renders an product
   */
  const productBlock = (product) => (
    <h4 style={{ padding: '10px', border: '1px solid red' }} key={product.id}>
      {product.name} - {product.description}
    </h4>
  )

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          handleSearch={handleSearch}
          handleCategory={handleCategory}
          data={data}
          featured={featured}
          categoryBlock={categoryBlock}
          productBlock={productBlock}
        />
      )}
    </>
  )
}

Business.proptypes = {
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
   * Handler function of an input that filters the content
   */
  handleSearch: PropTypes.func,
  /**
   * Handler function of an input that filters the content by category
   */
  handleCategory: PropTypes.func,
  /**
   * Components types before addresses list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after addresses list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before addresses list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after addresses list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Element that renders a category with its products
   */
  productBlock: PropTypes.element,
  /**
   * Element that renders an product
   */
  categoryBlock: PropTypes.element
}

Business.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
