import React, { useEffect, useState } from 'react'

import { MenuControlUI } from '../../components/MenuControlUI'
import { MenuControl } from '../../../src/components/MenuControl'
import { TestComponent } from '../../components/TestComponent'
import { useApi } from '../../../src/contexts/ApiContext'

export const MenuControlExample = () => {
  const [ordering] = useApi()
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: MenuControlUI,
    /**
     * maxPreoderDays, limit days to show
     */
    maxPreoderDays: 7,
    /**
     * Business, this must be containt all business information
     */
    business: {
      name: 'McBonals',
      logo: 'https://res.cloudinary.com/ordering2/image/upload/v1562277711/bk6kvzrnfkvqgav9qi7j.png'
    },
    /**
     * Handle schedule and menu selected by user
     */
    handleMenuInfo: (e) => { console.log(e) },
    /**
     * handlerSelectDate, method to returns a day selected
     */
    handlerSelectDate: (e) => { console.log(e) },
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
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after menu control
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }

  const [menus, setMenus] = useState({})

  const getBusiness = async () => {
    const { content: { result } } = await ordering.businesses(41).menus().get()
    setMenus(result)
  }

  useEffect(() => {
    getBusiness()
  }, [])

  return <MenuControl {...props} business={{ ...props.business, menus }} />
}
