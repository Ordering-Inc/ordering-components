import React from 'react'

import { MomentOptionUI } from '../../components/MomentOptionUI'
import { MomentOption } from '../../../src/components/MomentOption'
import { TestComponent } from '../../components/TestComponent'

export const MomentOptionExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: MomentOptionUI,
    /**
     * currentDate, this must be contains a custom date selected
     */
    currentDate: new Date(),
    /**
     * minDate, this must be contains a custom date selected
     */
    minDate: new Date('2020-08-26 00:00'),
    /**
     * maxDate, this must be contains a custom date selected
     */
    maxDate: new Date('2020-08-30 23:59'),
    /**
     * Method to return moment selection
     */
    onChangeMoment: (e) => { console.log(e) },
    /**
     * Components types before moment option
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after moment option
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before moment option
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after moment option
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <MomentOption {...props} />
}
