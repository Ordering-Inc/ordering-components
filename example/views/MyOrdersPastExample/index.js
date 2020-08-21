import React, { useState, useEffect } from 'react'

import { MyOrdersPastUI } from '../../components/MyOrdersPastUI'
import { MyOrdersPast } from '../../../src/components/MyOrdersPast'
import { TestComponent } from '../../components/TestComponent'
import { useSession } from '../../../src/contexts/SessionContext'

export const MyOrdersPastExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: MyOrdersPastUI,
    /**
     * Components types before [PUT HERE COMPONENT NAME]
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after [PUT HERE COMPONENT NAME]
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before [PUT HERE COMPONENT NAME]
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after [PUT HERE COMPONENT NAME]
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }

  const [{ token }] = useSession()
  const [orders, setOrders] = useState([])

  const getOrders = async () => {
    const { content: { result } } = await ordering.setAccessToken(token).orders().where([
      { attribute: 'status', value: [1, 2, 5, 6, 10, 11, 12] }
    ]).get()
    setOrders(result)
  }

  useEffect(() => {
    getOrders()
  }, [])

  return <MyOrdersPast {...props} orders={orders} />
}
