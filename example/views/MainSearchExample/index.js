import React from 'react'

import { MainSearchUI } from '../../components/MainSearchUI'
import { MainSearch } from '../../../src/components/MainSearch'
import { TestComponent } from '../../components/TestComponent'

export const MainSearchExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: MainSearchUI,
    /**
     * searchByAddress is used to validate if use address list and address form or dropdown options
     */
    searchByAddress: true,
    /**
     * Method to find business from API
     */
    handlerFindBusiness: (e) => { console.log(e) },
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
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after main search
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }
  return <MainSearch {...props} />
}
