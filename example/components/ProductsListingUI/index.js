import React from 'react'

import { BusinessProductsCategories } from '../../../src/components/BusinessProductsCategories'
import { BusinessProductsCategoriesUI } from '../BusinessProductsCategoriesUI'

import { BusinessProductsSearch } from '../../../src/components/BusinessProductsSearch'
import { BusinessProductsSearchUI } from '../BusinessProductsSearchUI'

import { ProductsList } from '../../../src/components/ProductsList'
import { ProductsListUI } from '../ProductsListUI'

export const ProductsListingUI = (props) => {
  const {
    categoryValue,
    categories,
    productsList,
    handlerClickCategory,
    handlerChangeSearch
  } = props

  return (
    <div className='products-listing'>
      <BusinessProductsCategories
        UIComponent={BusinessProductsCategoriesUI}
        categories={categories}
        onClickCategory={handlerClickCategory}
      />
      <br />
      <BusinessProductsSearch
        UIComponent={BusinessProductsSearchUI}
        onChangeSearch={handlerChangeSearch}
      />
      <br />
      <ProductsList
        UIComponent={ProductsListUI}
        productsList={productsList}
        categories={categories}
        isAllCategory={!categoryValue}
      />
    </div>
  )
}
