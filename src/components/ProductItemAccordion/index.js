import React from 'react'
import PropTypes from 'prop-types'

/**
 * Component to render product ingredient
 */
export const ProductItemAccordion = (props) => {
  const {
    UIComponent,
    product,
    isCartProduct
  } = props

  /**
   * Run productInfo to sort product options
   */
  const productInfo = () => {
    let options = JSON.parse(JSON.stringify(Object.values(product.options ?? {})))
    const extraGroups = options.reduce((acc, option) => {
      const extraRank = option.extra.rank
      acc[extraRank] = acc[extraRank] || []
      acc[extraRank].push(option)
      return acc
    }, {})

    const sortedExtraGroups = Object.entries(extraGroups).sort(([rankA], [rankB]) => rankA - rankB)

    sortedExtraGroups.forEach(([_, group]) => {
      group.sort((a, b) => a.rank - b.rank)
    })

    options = sortedExtraGroups.flatMap(([, group]) => group)

    if (isCartProduct) {
      const ingredients = JSON.parse(JSON.stringify(Object.values(product.ingredients ?? {})))
      options = options.map(option => {
        option.suboptions = Object.values(option.suboptions ?? {})
        return option
      })
      return {
        ...productInfo,
        ingredients,
        options
      }
    }
    return { ...product, options }
  }

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            productInfo={productInfo()}
          />
        )
      }
    </>
  )
}

ProductItemAccordion.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * product object to render UI
   */
  product: PropTypes.object.isRequired
}
