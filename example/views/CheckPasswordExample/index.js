import React from 'react'

import { CheckPasswordUI } from '../../components/CheckPasswordUI'
import { CheckPassword as CheckPasswordController } from '../../../src/components/CheckPassword'
import { TestComponent } from '../../components/TestComponent'

export const CheckPasswordExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: CheckPasswordUI,
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

  return <CheckPasswordController {...props} />
}
