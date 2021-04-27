import React, { useEffect, useState } from 'react'
import { OrderReview } from '../../../src/components/OrderReview'
import { OrderReviewUI } from '../../components/OrderReviewUI'
import { TestComponent } from '../../components/TestComponent'
import { useApi } from '../../../src/contexts/ApiContext'
import { useSession } from '../../../src/contexts/SessionContext'

export const OrderReviewExample = () => {
  const [ordering] = useApi()
  const [{ token, loading }] = useSession()
  const [order, setOrder] = useState(null)
  const getOrders = async () => {
    const { content: { error, result } } = await ordering.setAccessToken(token).orders().where([{ attribute: 'status', value: [1, 11] }]).get()
    if (!error && result.length > 0) {
      setOrder(result[0])
    }
  }
  useEffect(() => {
    if (!loading) {
      getOrders()
    }
  }, [loading])

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
    * handleCustomClick, function to get click event and return scores without default behavior
    */
    handleCustomSendReview: (stars) => console.log(stars),
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
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after login form
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }

  return <OrderReview {...props} />
}
