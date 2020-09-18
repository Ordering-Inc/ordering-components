import React from 'react'
import { GoogleLoginUI } from '../../components/GoogleLoginUI'
import { GoogleLoginButton } from '../../../src/components/GoogleLoginButton'
import { TestComponent } from '../../components/TestComponent'

export const GoogleLoginExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: GoogleLoginUI,
    /**
     * handling response of google
     * @param {Object} result google response when the result is success
     */
    onSuccess: (res) => console.log('success', res),
    /**
     * handling response of google
     * @param {Object} result google response when the result is error
     */
    onFailure: (err) => console.log('error', err),
    /**
     * handling response of google
     * google response when the user is logging
     */
    onRequest: () => console.log('requesting'),
    /**
     * Function to get login with google success event
     * @param {object} user User logged
     */
    handleSuccessGoogleLogin: (user) =>
      console.log('Success login Google with user', user),
    /**
     * property to get response code if type "code"
     */
    responseType: '',
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
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after Facebook login button
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }

  return <GoogleLoginButton {...props} />
}
