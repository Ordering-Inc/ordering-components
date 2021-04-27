import React from 'react'

import { SearchOptionsUI } from '../../components/SearchOptionsUI'
import { SearchOptions } from '../../../src/components/SearchOptions'
import { TestComponent } from '../../components/TestComponent'

export const SearchOptionsExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: SearchOptionsUI,
    /**
     * Components types before Search options
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after Search options
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before Search options
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after Search options
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }

  const momentProps = {
    minDate: new Date('2020-08-21 04:00 PM'),
    maxDate: new Date('2020-12-31 04:00 PM'),
    currentDate: new Date()
  }

  return <SearchOptions {...props} momentProps={momentProps} />
}
