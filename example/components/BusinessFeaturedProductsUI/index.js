import React from 'react'

export const BusinessFeaturedProductsUI = (props) => {
  const {
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

      <div className='featured-products-section'>
        <h1>Featured</h1>
        <div>
          {!productsList.loading && !productsList.error ? (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {productsList.products && productsList.products.length > 0 ? (
                productsList.products.map(product => (
                  <div key={product.id} style={{ border: '1px solid gray', width: '300px', padding: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', marginRight: '10px' }}>
                    <img src={product.images} alt={product.name} height='60' width='60' />
                    <span>{product.name}</span>
                    <span>{product.description}</span>
                    <span style={{ color: 'green' }}>${product.price}</span>
                  </div>
                ))
              ) : (
                <p>No have products 😥</p>
              )}
            </div>
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
