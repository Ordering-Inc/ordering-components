import React, { useEffect, useState } from 'react'

import { MenuControlUI } from '../../components/MenuControlUI'
import { MenuControl } from '../../../src/components/MenuControl'
import { TestComponent } from '../../components/TestComponent'

export const MenuControlExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: MenuControlUI,
    /**
     * Business, this must be containt all business information
     */
    business: {},
    /**
     * Components types before menu control
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after menu control
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before menu control
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after menu control
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }

  const [businessSelected, setBusinessSelected] = useState({})

  const getBusiness = async () => {
    /**
     * Check if this call is necessary
     */
    // const menus = await ordering.businesses(41).menus().get()
    const { content: { result } } = await ordering.businesses(41).get()
    setBusinessSelected(result)
  }

  useEffect(() => {
    getBusiness()
  }, [])

  return <MenuControl {...props} business={businessSelected} />
}
