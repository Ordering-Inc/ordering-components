import React from 'react'

import { ResetPasswordUI } from '../../components/ResetPasswordUI'
import { ResetPassword } from '../../../src/components/ResetPassword'
import { TestComponent } from '../../components/TestComponent'

export const ResetPasswordExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: ResetPasswordUI,
    /**
     *  Code is generated with the endpoint Users Forgot Password, injected on the link received on the Forgot Password email.
     */
    code: 'f2b4caea-61c3-5bed-8ce7-d8b9d16e129em',
    /**
     *  Random is generated with the endpoint Users Forgot Password, injected on the link received on the Forgot Password email.
     */
    random: 'ea8f75d5-cc83-48ce-96e7-f1c3ff514311',
    /**
     * Function to know that the password has already been changed
     *  @param {Object} result Api response
     */
    handleSucessResetPassword: (result) => console.log('Your password has been changed successfully', result),
    /**
     * Components types before product share
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after product share
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before product share
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after product share
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }

  return (
    <ResetPassword {...props} />
  )
}
