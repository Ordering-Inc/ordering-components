import React from 'react'

import { MainSearchUI } from '../../components/MainSearchUI'
import { MainSearch } from '../../../src/components/MainSearch'
import { TestComponent } from '../../components/TestComponent'

export const MainSearchExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: MainSearchUI,
    /**
     * useOrderTypeControl is used for enable/disable order type control
     */
    useOrderTypeControl: true,
    /**
     * searchByAddress is used to validate if use address list and address form or dropdown options
     */
    searchByAddress: true,
    /**
     * Components types before main search
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after main search
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before main search
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after main search
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <MainSearch {...props} />
}
