import React from 'react'

export const MyOrdersListUI = (props) => {
  const {
    orderType,
    orders,
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

      <h1 style={{ textTransform: 'capitalize' }}>{orderType} orders</h1>

      {orders.length > 0 && orders.map(item => (
        <div className='orders' key={item.id} style={{ border: '1px solid gray', padding: '20px', width: '200px' }}>
          {orderType === 'active' && <h2>VIDEO</h2>}
          <img src={item.business.logo} width='100' height='100' /><br />
          <p>{item.name}</p>
          <p># {item.id}</p>
          <p>{item.created_at}</p>
          {orderType === 'active' && <p>$ {item.total}</p>}
          <p>{item.status}</p>
          {orderType === 'active' ? (
            <button>Open order</button>
          ) : (
            <>
              <button>Reorder</button>
              <button>Review</button>
            </>
          )}
        </div>
      ))}

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
