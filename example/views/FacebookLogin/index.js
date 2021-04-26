import React from 'react'

import { TestComponent } from '../../components/TestComponent'
import { FacebookLoginButtonUI } from '../../components/FacebookLoginButtonUI'
import { FacebookLoginButton } from '../../../src/components/FacebookLoginButton'

export const FacebookLogin = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: FacebookLoginButtonUI,
    /**
     * Function to change default login with Facebook behavior
     * Uncomment to test
     * @param {Object} result Result from Facebook
     */
    // handleButtonFacebookLoginClick: (result) => console.log('Your own login with facebook workflow', result),
    /**
     * Function to get login with Facebook success event
     * @param {object} user User logged
     */
    handleSuccessFacebookLogin: (user) => console.log('Success login Facebook with user', user),
    /**
     * Function to get logout with Facebook success event
     * @param {Object} result Result from Facebook
     */
    handleSuccessFacebookLogout: (result) => console.log('Success logout Facebook', result),
    /**
     * Default email to forgot password form
     */
    appId: '3192786437482189',
    /**
     * Enable/Disable Facebook login debug mode
     */
    debug: false,
    /**
     * Facebook SDK version
     */
    version: 'v7.0',
    /**
     * Components types before Facebook login button
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after Facebook login button
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before Facebook login button
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after Facebook login button
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }
  return <FacebookLoginButton {...props} />
}
