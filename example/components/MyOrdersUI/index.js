import React from 'react'

export const MyOrdersUI = (props) => {
  const {
    activeOrders,
    previousOrders,
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

      <h1>My Orders</h1>

      <h1>Active Orders</h1>
      <ul>
        {activeOrders.length && activeOrders.map(order => (
          <li key={order.id}>{order.created_at}</li>
        ))}
      </ul>
      <hr />
      <h1>Previous Orders</h1>
      <ul>
        {previousOrders.length && previousOrders.map(order => (
          <li key={order.id}>{order.created_at}</li>
        ))}
      </ul>

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
