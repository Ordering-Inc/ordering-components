import React from 'react'
import { MomentOptionUI } from '../../components/MomentOptionUI'
import { MomentOption } from '../../../src/components/MomentOption'
import { TestComponent } from '../../components/TestComponent'

export const MomentOptionExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: MomentOptionUI,
    /**
     * currentDate, this must be contains a custom date selected
     */
    currentDate: null,
    /**
     * minDate, this must be contains a custom date selected
     */
    // minDate: new Date('2020-08-29 18:00'),
    /**
     * maxDate, this must be contains a custom date selected
     */
    maxDate: new Date('2020-11-10 09:59'),
    /**
     * Method to return moment selection
     */
    onChangeMoment: (moment) => {
      console.log(moment)
    },
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
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after moment option
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }
  return <MomentOption {...props} />
}
