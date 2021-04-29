import React from 'react'

import { BaseComponentUI } from '../../components/BaseComponentUI'
import { BaseComponent } from '../../../src/components/BaseComponent'
import { TestComponent } from '../../components/TestComponent'

export const BaseComponentExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: BaseComponentUI,
    /**
     * Components types before [PUT HERE COMPONENT NAME]
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after [PUT HERE COMPONENT NAME]
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before [PUT HERE COMPONENT NAME]
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after [PUT HERE COMPONENT NAME]
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }
  return <BaseComponent {...props} />
}
