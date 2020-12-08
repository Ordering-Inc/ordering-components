import React from 'react'

import { ResetPasswordUI } from '../../components/ResetPasswordUI'
import { ResetPassword } from '../../../src/components/ResetPassword'

export const ResetPasswordExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: ResetPasswordUI,
    /**
     *  Code is generated with the endpoint Users Forgot Password, injected on the link received on the Forgot Password email.
     */
    code: '1234532142',
    /**
     *  Random is generated with the endpoint Users Forgot Password, injected on the link received on the Forgot Password email.
     */
    random: '1233214253',
    /**
     * Function to know that the password has already been changed
     *  @param {Object} result Api response
     */
    handleSucessResetPassword: (result) => console.log('Your password has been changed successfully', result)
  }

  return (
    <ResetPassword {...props} />
  )
}
