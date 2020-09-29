import React from 'react'

export const UpsellingPageUI = (props) => {
  const { upsellingProducts, handleAddProductUpselling } = props
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {
        upsellingProducts.map(product => (
          <>
            <div key={product.id} style={{ display: 'inline-flex', flexDirection: 'column', width: '20vw' }}>
              <img src={product.images} width='100px' />
              <p>{product.name}</p>
              <p>${product.price}</p>
              <button onClick={() => handleAddProductUpselling(product)}>Add</button>
            </div>
          </>
        )
        )
      }
    </div>
  )
}
