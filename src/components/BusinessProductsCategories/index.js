import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const BusinessProductsCategories = (props) => {
  const {
    categories,
    onClickCategory,
    UIComponent
  } = props

  const [categoriesFiltered, setCategoriesFiltered] = useState(categories)

  useEffect(() => {
    categories.unshift({
      id: 0,
      name: 'All'
    })
    setCategoriesFiltered(categories)
  }, [categories])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          categories={categoriesFiltered}
          handlerClickCategory={onClickCategory}
        />
      )}
    </>
  )
}

BusinessProductsCategories.propTypes = {
  /**
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  ordering: PropTypes.object,
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * categories, this must be contains an array of products categories
   */
  categories: PropTypes.arrayOf(PropTypes.object),
  /**
   * Components types before business products categories
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business products categories
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business products categories
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business products categories
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessProductsCategories.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
