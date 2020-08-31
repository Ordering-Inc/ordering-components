import React from 'react'

export const CartUI = (props) => {
  const {
    orderState,
    carts,
    clearCart,
    removeProduct,
    changeQuantity,
    getProductMax,
    offsetDisabled,
    handleEditProduct
  } = props

  return (
    <>
      {
        Object.values(carts).map(cart => (
          <div key={cart.uuid}>
            <p>
              Business: {cart.business.name}<br />
              CartID: {cart.uuid}<br />
              Cart valid: {cart.valid ? 'Yes' : 'No'}<br />
            </p>
            {
              cart?.products?.map(product => {
                return (
                  <div key={product.code} style={{ borderBottom: '1px solid #ccc' }}>
                    {product.quantity} x {product.id}. {product.name} ${product.total}<br />
                    <div>
                      Valid: {product.valid ? 'Yes' : 'No'}<br />
                      Menu valid: {product.valid_menu ? 'Yes' : 'No'}<br />
                      Quantity valid: {product.valid_quantity ? 'Yes' : 'No'}<br />
                    </div>
                    <div>
                      <select value={product.quantity} onChange={(e) => changeQuantity(product, parseInt(e.target.value))}>
                        {
                          [...Array(getProductMax(product) + 1).keys()].map((value, i) => (
                            <option key={i} value={i} disabled={offsetDisabled(product) < i && i !== 0}>{i === 0 ? 'Remove' : i}</option>
                          ))
                        }
                      </select>
                      <button type='button' onClick={() => changeQuantity(product, product.quantity - 1)} disabled={orderState.loading || !product.valid}>-</button>
                      <button type='button' onClick={() => changeQuantity(product, product.quantity + 1)} disabled={orderState.loading || !product.valid || getProductMax(product) === product.quantity}>+</button>
                      <button type='button' onClick={() => handleEditProduct(product)} disabled={orderState.loading || !product.valid}>Edit</button>
                      <button type='button' onClick={() => removeProduct(product)} disabled={orderState.loading}>Remove</button>
                    </div>
                    {
                      product.ingredients && Object.values(product.ingredients).map(ingredient => (
                        <div key={ingredient.id} style={{ marginLeft: 15 }}>
                          <p>{ingredient.id}. {ingredient.name} {ingredient.selected ? '(Selected)' : ''}</p>
                        </div>
                      ))
                    }
                    {
                      product.options && Object.values(product.options).map(option => (
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
              cart.products?.length > 0 && <button type='button' onClick={() => clearCart(cart.uuid)}>Clear products</button>
            }
            <br />
            Quantity products: {cart.quantity}<br />
            Subotal: {cart.subtotal}<br />
            {
              cart.discount_type && (
                <>
                  Discount ({cart.discount_rate} {cart.discount_type === 2 ? '$' : '%'}) {cart.coupon ? `(${cart.coupon})` : ''}: -{cart.discount}<br />
                </>
              )
            }
            Tax ({cart.business.tax}%): {cart.tax}<br />
            Service Fee ({cart.business.service_fee}%): {cart.service_fee}<br />
            Delivery price: {cart.delivery_price}<br />
            Total: {cart.total}
          </div>
        ))
      }
      {/* {
        order?.products?.map(product => {
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
                <button type='button' onClick={() => removeProduct(product)}>Remove</button>
              </div>
              {
                product.options && Object.values(product.options).map(option => (
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
      Total: {order.total} */}
    </>
  )
}
