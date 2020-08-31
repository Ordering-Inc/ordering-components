import React from 'react'

export const SingleOrderCardUI = (props) => {
  const {
    orderType,
    order,
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

      {orderType === 'active' && <h2>VIDEO</h2>}
      <img src={order.business?.logo} width='100' height='100' /><br />
      <p>{order.name}</p>
      <p># {order.id}</p>
      <p>{order.created_at}</p>
      {orderType === 'active' && <p>$ {order.total}</p>}
      <p>{order.status}</p>
      {orderType === 'active' ? (
        <button>Open order</button>
      ) : (
        <>
          <button>Reorder</button>
          <button>Review</button>
        </>
      )}

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
