import React from 'react'

import { SingleProductCard } from '../../../src/components/SingleProductCard'
import { SingleProductCardUI } from '../SingleProductCardUI'

export const ProductsListUI = (props) => {
  const {
    isAllCategory,
    categories,
    productsList,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  return (
    <>
      {beforeElements.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}

      {beforeComponents.map(
        (BeforeComponent, i) => <BeforeComponent key={i} {...props} />
      )}

      <div className='products-list'>
        {!productsList.loading && !productsList.error ? (
          <>
            {isAllCategory ? (
              <>
                {categories.length && categories.map(category => (
                  <div key={category.id}>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0px', fontWeight: 'bold' }}>
                      <img src={category.image} alt={category.name} width='60' height='60' />
                      <span>{category.name}</span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      {productsList.products && productsList.products.length > 0 ? (
                        productsList.products.map(product => (
                          <>
                            {category.id === product.category_id && (
                              <SingleProductCard
                                key={product.id}
                                UIComponent={SingleProductCardUI}
                                isSoldOut={product.inventoried && !product.quantity}
                                images={product.images}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                              />
                            )}
                          </>
                        ))
                      ) : (
                        <p>No have products 😥</p>
                      )}
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {productsList.products && productsList.products.length > 0 ? (
                  productsList.products.map(product => (
                    <SingleProductCard
                      key={product.id}
                      UIComponent={SingleProductCardUI}
                      isSoldOut={product.inventoried && !product.quantity}
                      images={product.images}
                      name={product.name}
                      description={product.description}
                      price={product.price}
                    />
                  ))
                ) : (
                  <p>No have products 😥</p>
                )}
              </div>
            )}
          </>
        ) : (
          <div>
            {productsList.error && productsList.error.length > 0 ? (
              productsList.error.map((e, i) => (
                <p key={i}>ERROR: [{e}]</p>
              ))
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        )}
      </div>

      {afterComponents.map(
        (AfterComponent, i) => <AfterComponent key={i} {...props} />
      )}

      {afterElements.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}
