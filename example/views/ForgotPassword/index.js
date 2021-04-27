import React from 'react'
import { Link } from 'react-router-dom'

import { ForgotPasswordFormUI } from '../../components/ForgotPasswordFormUI'
import { ForgotPasswordForm } from '../../../src/components/ForgotPasswordForm'
import { TestComponent } from '../../components/TestComponent'

export const ForgotPassword = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: ForgotPasswordFormUI,
    /**
     * Function to change default forgot password behavior
     * Uncomment to test
     * @param {Object} formData All input values
     */
    // handleButtonForgotPasswordClick: (formData) => console.log('Your own forgot password workflow', formData),
    /**
     * Function to get forgot password success event
     * @param {string} email Email to which it was sent
     */
    handleSuccessForgotPassword: (email) => console.log('Forgot password with email', email),
    /**
   * @param {form_data} data
   * handleCustomClick, function to get click event and return data without default behavior
   */
    handleCustomForgotPasswordClick: (data) => console.log('Forgot password data', data),
    /**
     * Default email to forgot password form
     */
    // defaultEmail: 'customer@ordering.co',
    /**
     * Components types before forgot password form
     * Array of type components, the parent props will pass to these components
     */

    beforeComponents: [TestComponent],
    /**
     * Components types after forgot password form
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before forgot password form
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after forgot password form
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>],
    /**
     * Url to signup page
     * Url to create element link to signup page
     */
    linkToSignup: '/signup',
    /**
     * Url to login page
     * Url to create element link to login
     */
    linkToLogin: '/login',
    /**
     * Element to custom link to signup
     * You can provide de link element as react router Link or your custom Anchor to signup page
     */
    elementLinkToSignup: <Link to='/signup'>Go to signup</Link>,
    /**
     * Element to custo link to Login
     * You can provide de link element as react router Link or your custom Anchor to login page
     */
    elementLinkToLogin: <Link to='/login'>Go to login</Link>
  }
  return <ForgotPasswordForm {...props} />
}
