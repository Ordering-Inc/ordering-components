import React from 'react'

import { PhoneUI } from '../../components/PhoneUI'
import { Phone } from '../../../src/components/Phone'
import { TestComponent } from '../../components/TestComponent'

export const PhoneExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: PhoneUI,
    /**
     * Array of phones for autocomplete
     */
    /**
     * Options, this must be containt an array of payment options
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after Payment options
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before Payment options
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after Payment options
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <Phone {...props} />
}
