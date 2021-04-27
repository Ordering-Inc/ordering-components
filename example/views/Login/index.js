import React from 'react'
import { Link } from 'react-router-dom'

import { LoginFormUI } from '../../components/LoginFormUI'
import { LoginForm } from '../../../src/components/LoginForm'
import { TestComponent } from '../../components/TestComponent'

export const Login = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: LoginFormUI,
    /**
     * Function to change default login behavior
     * Uncomment to test
     */
    // handleButtonLoginClick: () => console.log('Your own login workflow')),
    /**
     * Function to get login success event
     * @param {Object} user User with session data
     */
    handleSuccessLogin: (user) => console.log('Login success with use', user),
    /**
     * Function to continue as guest behavior
     * Uncomment to test
     */
    handleContinueAsGuest: () => console.log('Continue as guest'),
    /**
     * Enable/Disable login by email
     */
    useLoginByEmail: true,
    /**
     * Enable/Disable login by cellphone
     */
    useLoginByCellphone: true,
    /**
     * Selected tab by default
     * You can choose between 'email' or 'cellphone'
     */
    defaultLoginTab: 'cellphone',
    /**
     * Components types before login form
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after login form
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before login form
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after login form
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>],
    /**
     * Url to signup page
     * Url to create element link to signup page
     */
    linkToSignup: '/signup',
    /**
     * Url to forgot password page
     * Url to create element link to signup page
     */
    linkToForgetPassword: '/forgot_password',
    /**
     * Element to custom link to signup
     * You can provide de link element as react router Link or your custom Anchor to signup page
     */
    elementLinkToSignup: <Link to='/signup'>Go to signup</Link>,
    /**
     * Element to custo link to forgot password
     * You can provide de link element as react router Link or your custom Anchor to forgot password page
     */
    elementLinkToForgetPassword: <Link to='/forgot_password'>Go to forgot password</Link>
  }
  return <LoginForm {...props} />
}
