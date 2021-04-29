import React from 'react'

import { FloatingButtonUI } from '../../components/FloatingButtonUI'
import { FloatingButton } from '../../../src/components/FloatingButton'
import { TestComponent } from '../../components/TestComponent'

export const FloatingButtonExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: FloatingButtonUI,
    /**
     * Text for button
     */
    btnText: 'View order',
    /**
     * Value to show in button
     */
    btnValue: 5,
    /**
     * handle click button
     */
    handleClick: () => { alert('Click') },
    /**
     * Components types before Floating Button
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after Floating Button
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before Floating Button
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after Floating Button
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }
  return <FloatingButton {...props} />
}
