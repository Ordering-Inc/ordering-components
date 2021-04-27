import React from 'react'
import { Link } from 'react-router-dom'

import { SignupFormUI } from '../../components/SignupFormUI'
import { SignupForm } from '../../../src/components/SignupForm'
import { TestComponent } from '../../components/TestComponent'

export const Signup = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: SignupFormUI,
    /**
     * Function to change default signup behavior
     * Uncomment to test
     */
    // handleButtonSignupClick: () => console.log('Your own signup workflow'),
    /**
     * Function to get signup success event
     * @param {Object} user User with session data
     */
    handleSuccessSignup: (user) => console.log('Signup success with use', user),
    /**
     * Function to continue as guest behavior
     */
    handleContinueAsGuest: () => console.log('Continue as guest'),
    /**
     * Enable to get checkout fields to show/hide fields from Ordering API
     */
    useChekoutFileds: true,
    /**
     * Components types before signup form
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after signup form
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before signup form
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after signup form
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>],
    /**
     * Url to login page
     * Url to create element link to login page
     */
    linkToLogin: '/login',
    /**
     * Element to custom link to login
     * You can provide de link element as react router Link or your custom Anchor to login page
     */
    elementLinkToLogin: <Link to='/login'>Go to login</Link>
  }
  return <SignupForm {...props} />
}
