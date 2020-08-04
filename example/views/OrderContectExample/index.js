import React, { useEffect } from 'react'
import { useOrder, ORDER_ACTIONS } from '../../../src/contexts/OrderContext'
import { OrderTypeControl } from '../../../src/components/OrderTypeControl'
import { TestComponent } from '../../components/TestComponent'
import { OrderTypeControlUI } from '../../components/OrderTypeControlUI'

export const OrderContectExample = ({ ordering }) => {
  const [{ order }, dispatchOrder] = useOrder()

  useEffect(() => {
    dispatchOrder({ type: ORDER_ACTIONS.CHANGE_BUSINESS, business: { id: 41, slug: 'mcbonalds' } })
    dispatchOrder({ type: ORDER_ACTIONS.ADD_PRODUCT, product: { id: 111, quantity: 1 } })
    dispatchOrder({ type: ORDER_ACTIONS.ADD_PRODUCT, product: { id: 1296, quantity: 1 } })
  }, [])

  const orderTypeControlProps = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: OrderTypeControlUI,
    /**
     * Order availables to the control
     */
    orderTypes: [1, 2, 3, 4, 5],
    /**
     * Custom function to control order type changes
     */
    // handleChangeOrderType: (orderType) => { console.log('Custom acion', orderType) },
    /**
     * Components types before order type control
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after order type control
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before order type control
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after order type control
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }

  return (
    <>
      <p>Cart products: {order.products.length}</p>
      <OrderTypeControl {...orderTypeControlProps} />
    </>
  )
}
