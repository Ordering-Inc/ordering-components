import React from 'react'

export const CartUI = (props) => {
  const {
    order,
    clearProducts,
    removeProduct,
    changeQuantity,
    getProductMax,
    handleEditProduct
  } = props

  return (
    <>
      {
        order.products?.map(product => {
          return (
            <div key={product.code} style={{ borderBottom: '1px solid #ccc' }}>
              {product.quantity} x {product.id}. {product.name} ${product.total}<br />
              <div>
                <select value={product.quantity} onChange={(e) => changeQuantity(product.code, parseInt(e.target.value))}>
                  {
                    [...Array(getProductMax(product) + 1).keys()].map((value, i) => (
                      <option key={i} value={i}>{i === 0 ? 'Remove' : i}</option>
                    ))
                  }
                </select>
                <button type='button' onClick={() => changeQuantity(product.code, product.quantity - 1)}>-</button>
                <button type='button' onClick={() => changeQuantity(product.code, product.quantity + 1)}>+</button>
                <button type='button' onClick={() => handleEditProduct(product)}>Edit</button>
                <button type='button' onClick={() => removeProduct(product.code)}>Remove</button>
              </div>
              {
                Object.values(product.options).map(option => (
                  <div key={option.id} style={{ marginLeft: 15 }}>
                    <p>{option.id}. {option.name}</p>
                    {
                      Object.values(option.suboptions).map(suboption => (
                        <p key={suboption.id} style={{ marginLeft: 15 }}>
                          {suboption.quantity} x {suboption.id} {suboption.name} {suboption.position !== 'whole' ? `(${suboption.position})` : ''} ${suboption.price}
                        </p>
                      ))
                    }
                  </div>
                ))
              }
              <div style={{ marginLeft: 15 }}>
                {
                  product.comment && (
                    <>
                      Comment: {product.comment}<br />
                    </>
                  )
                }
              </div>
            </div>
          )
        })
      }
      {
        order.products?.length > 0 && <button type='button' onClick={clearProducts}>Clear products</button>
      }
      Quantity products: {order.quantity}
      Total: {order.total}
    </>
  )
}
