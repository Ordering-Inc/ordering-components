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
      redirectURI: 'https://example-app.com/redirect',
      responseType: 'code',
      responseMode: 'query',
      usePopup: false // or false defaults to false
    },
    onSuccess: (data) => console.log(data),

    onFailure: (err) => console.log(err),

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
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after business information
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }

  return <AppleLogin {...props} />
}
