import React, { useEffect, useState } from 'react'
import { OrderReview } from '../../../src/components/OrderReview'
import { OrderReviewUI } from '../../components/OrderReviewUI'
import { TestComponent } from '../../components/TestComponent'

export const OrderReviewExample = ({ ordering }) => {
  const getOrders = async () => {
    await ordering.setAccessToken(
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGl2NC5vcmRlcmluZy5jb1wvdjQwMFwvZW5cL2RlbW9cL2F1dGgiLCJpYXQiOjE1OTg4OTg2NTksImV4cCI6MTYzMDQzNDY1OSwibmJmIjoxNTk4ODk4NjU5LCJqdGkiOiJPdXUwaEhaNTgwUG84WjU1Iiwic3ViIjoxLCJwcnYiOiJkYzg3MzkwZWNhN2ZmZGU1MDE0MmEzYmY0MThmOGRhY2ZhNWZjYTYwIiwibGV2ZWwiOjB9.5kuHa18eF66Lq0DgI85vjPRXpMzzOqJgX8sZzb-tfCY'
    )
    const { response } = await ordering.orders().get()
    const order = response.data.result.filter(
      (order) =>
        (order.status === 1 || order.status === 11) && order.review === null
    )
    return order
  }
  useEffect(() => {
    getOrders()
  }, [])

  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: OrderReviewUI,
    /**
     * Getting a list of orders that can be reviewed
     */
    order: getOrders(),
    /**
     * Components types before login form
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after login form
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before login form
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after login form
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }

  return <OrderReview {...props} />
}
