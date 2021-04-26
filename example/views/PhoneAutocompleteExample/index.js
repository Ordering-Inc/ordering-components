import React from 'react'

import { PhoneAutocompleteUI } from '../../components/PhoneAutocompleteUI'
import { PhoneAutocomplete } from '../../../src/components/PhoneAutocomplete'
import { TestComponent } from '../../components/TestComponent'

export const PhoneAutocompleteExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: PhoneAutocompleteUI,
    /**
     * Array of phones for autocomplete
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
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after Payment options
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }
  return <PhoneAutocomplete {...props} />
}
