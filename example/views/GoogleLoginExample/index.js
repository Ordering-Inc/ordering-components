import React from 'react'
import { GoogleLoginUI } from '../../components/GoogleLoginUI'
import { GoogleLoginButton } from '../../../src/components/GoogleLoginButton'
import { TestComponent } from '../../components/TestComponent'

export const GoogleLoginExample = () => {
  const props = {
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
     * Property to get response code if type "code"
     */
    responseType: '',
    /**
     * Params for the init of google login
     */
    initParams: {
      apiKey: 'AIzaSyB-aDD3TIBR5tBCNM-lb1u0jadsaY-LIjs',
      client_id:
              '813628525689-v00sl2nrfdg1rnj79pqh994rvkkq0glt.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
      scope: 'profile'
    },
    /**
     * Style of the button
     */
    buttonStyle: {
      scope: 'profile email',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'dark'
    },
    /**
   * @param {google_response} res
   * handleCustomClick, function to get click event and return google response without default behavior
   */
    handleGoogleLoginClick: (res) => console.log('Google response', res),
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

  return <GoogleLoginButton {...props} />
}
