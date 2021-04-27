import React from 'react'

import { DriverTipsUI } from '../../components/DriverTipsUI'
import { DriverTips } from '../../../src/components/DriverTips'
import { TestComponent } from '../../components/TestComponent'

export const DriverTipsExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: DriverTipsUI,
    /**
     * Cart business id
     */
    businessId: 41,
    /**
     * driver tips options
     */
    driverTipsOptions: [0, 10, 15, 20, 25],
    /**
     * method to get option selected
     */
    handlerChangeDriverOption: (e) => { console.log(e) },
    /**
     * Components types before driver tips
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after driver tips
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before driver tips
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after driver tips
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }
  return <DriverTips {...props} />
}
