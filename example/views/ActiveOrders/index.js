import React from 'react'
import { OrderList } from '../../../src/components/OrderList'
import { ActiveOrdersUI } from '../../components/ActiveOrdersUI'
import { TestComponent } from '../../components/TestComponent'

export const ActiveOrders = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: ActiveOrdersUI,
    /**
     * Function to get order that was clicked
     * @param {Object} order Order that was clicked
     */
    onOrderClick: (order) => console.log('Click order', order),
    /**
     * Array of orders
     * This is used of first option to show list
     */
    // orders: [],
    /**
     * Array of id of orders
     * Get a list of orders by ids form Ordering API
     */
    // orderIds: [],
    /**
     * Array of id of orders
     * Get a list of orders by status form Ordering API
     * This can be use together `orderIds` option but not has effect with `orders` option
     */
    orderStatus: [0],
    /**
     * Order orders by some attribute. Default by `id`.
     */
    orderBy: 'id',
    /**
     * Order direction ascendent (asc) or descendent (desc). Default is `desc`.
     */
    orderDirection: 'desc',
    /**
     * Pagination settings
     * You can set the pageSize, initialPage and controlType can be by pages or infinity
     */
    paginationSettings: {
      /**
       * initialPage only work with control type `pages`
       */
      initialPage: 1,
      pageSize: 10,
      controlType: 'pages'
    },
    /**
     * Enable/Disable default session manager
     * Save user and token with default session manager
     */
    useDefualtSessionManager: true,
    /**
     * Access token to update user
     * Is required when `useDefualtSessionManager` is false
     */
    accessToken: 'TOKEN',
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

  return <OrderList {...props} />
}
