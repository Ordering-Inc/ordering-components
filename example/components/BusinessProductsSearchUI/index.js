import React from 'react'

export const BusinessProductsSearchUI = (props) => {
  const {
    productsList,
    handleChangeSearch,
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

      <div className='search-products'>
        <input style={{ width: '50%' }} type='search' placeholder='Search' onChange={(e) => handleChangeSearch(e.target.value)} />
        <br /><br />
        <div>
          {!productsList.loading && !productsList.error ? (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {productsList.products && productsList.products.length > 0 ? (
                productsList.products.map(product => (
                  <div key={product.id} style={{ border: '1px solid gray', width: '300px', padding: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', marginRight: '10px' }}>
                    {(product.inventoried && !product.quantity) && <span style={{ background: 'black', color: 'white' }}>Sold Out</span>}<br />
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
