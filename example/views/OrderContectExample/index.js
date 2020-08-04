import React, { useEffect } from 'react'
import { useOrder, ORDER_ACTIONS } from '../../../src/contexts/OrderContext'

export const OrderContectExample = ({ ordering }) => {
  const [{ loading, order }, dispatchOrder] = useOrder()
  const changeOrderType = (type) => {
    dispatchOrder({
      type: ORDER_ACTIONS.CHANGE_TYPE,
      order_type: type
    })
  }

  useEffect(() => {
    dispatchOrder({ type: ORDER_ACTIONS.CHANGE_BUSINESS, business: { id: 41, slug: 'mcbonalds' } })
    dispatchOrder({ type: ORDER_ACTIONS.ADD_PRODUCT, product: { id: 111, quantity: 1 } })
    dispatchOrder({ type: ORDER_ACTIONS.ADD_PRODUCT, product: { id: 1296, quantity: 1 } })
  }, [])

  return (
    <>
      <button onClick={() => changeOrderType(1)} disabled={loading}>Delivery {order.type === 1 && '(Selected)'}</button>
      <button onClick={() => changeOrderType(2)} disabled={loading}>Pickup {order.type === 2 && '(Selected)'}</button>
      <button onClick={() => changeOrderType(3)} disabled={loading}>Eat in {order.type === 3 && '(Selected)'}</button>
      <button onClick={() => changeOrderType(4)} disabled={loading}>Drive thru {order.type === 4 && '(Selected)'}</button>
      <button onClick={() => changeOrderType(5)} disabled={loading}>Curbside {order.type === 5 && '(Selected)'}</button>
      <p>Cart products: {order.products.length}</p>
    </>
  )
}
