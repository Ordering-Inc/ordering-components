import React from 'react'

import { ResetPasswordUI } from '../../components/ResetPasswordUI'
import { ResetPassword } from '../../../src/components/ResetPassword'
import { TestComponent } from '../../components/TestComponent'

export const ResetPasswordExample = (props) => {
  const params = new URLSearchParams(props.location.search)
  const code = params.get('code')
  const random = params.get('random')

  const ResetPasswordProps = {
    ...props,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: ResetPasswordUI,
    /**
     *  Code is generated with the endpoint Users Forgot Password, injected on the link received on the Forgot Password email.
     */
    code: code,
    /**
     *  Random is generated with the endpoint Users Forgot Password, injected on the link received on the Forgot Password email.
     */
    random: random,
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
    <ResetPassword {...ResetPasswordProps} />
  )
}
