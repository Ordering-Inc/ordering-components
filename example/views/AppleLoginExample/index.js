import React from 'react'

import { AppleLoginUI } from '../../components/AppleLoginUI'
import { AppleLogin } from '../../../src/components/AppleLogin'
import { TestComponent } from '../../components/TestComponent'

export const AppleLoginExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: AppleLoginUI,
    /**
     * Components types before business information
     * Array of type components, the parent props will pass to these components
     */
    initParams: {
      clientId: 'co.ordering.logintest',
      redirectURI: 'https://e6b6ae1cf48a.ngrok.io/applelogin.html',
      responseType: 'code',
      responseMode: 'form_post',
      state: 'state',
      nonce: 'nonce',
      usePopup: true // or false defaults to false
    },
    onSuccess: (data) => console.log(data),

    onFailure: (err) => console.log(err),

    handleAppleLoginClick: (data) => console.log(data),

    beforeComponents: [TestComponent],
    /**
     * Components types after business information
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before business information
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after business information
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }

  return <AppleLogin {...props} />
}
