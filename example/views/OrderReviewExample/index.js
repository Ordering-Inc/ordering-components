import React, { useEffect, useState } from 'react'
import { OrderReview } from '../../../src/components/OrderReview'
import { OrderReviewUI } from '../../components/OrderReviewUI'
import { TestComponent } from '../../components/TestComponent'
import { useApi } from '../../../src/contexts/ApiContext'
import { useSession } from '../../../src/contexts/SessionContext'

export const OrderReviewExample = () => {
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [order, setOrder] = useState(null)
  const getOrders = async () => {
    await ordering.setAccessToken(token)
    const { content: { error, result } } = await ordering.orders().where([{ attribute: 'status', value: [1, 11] }]).get()
    if (!error && result.length > 0) {
      setOrder(result[0])
    }
  }
  useEffect(() => {
    getOrders()
  }, [])

  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: OrderReviewUI,
    /**
     * Getting the order that can be review
     */
    order,
    /**
     * Response of ordering that contains de review
     */
    onSaveReview: (review) => console.log(review),
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
