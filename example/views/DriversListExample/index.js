import React, { useEffect, useState } from 'react'

import { DriversListUI } from '../../components/DriversListUI'
import { DriversList } from '../../../src/components/DriversList'
import { TestComponent } from '../../components/TestComponent'

export const DriversListExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: DriversListUI,
    /**
    * Array of drivers props to fetch
    */
    propsToFetch: ['id', 'name', 'lastname', 'assigned_orders_count', 'cellphone', 'location', 'photo', 'qualification'],
    /**
     * Components types before products list
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after products list
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before products list
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after products list
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }

  return <DriversList {...props} />
}
