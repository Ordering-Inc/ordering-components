import React from 'react'

import { MessagesUI } from '../../components/MessagesUI'
import { Messages } from '../../../src/components/Messages'
import { TestComponent } from '../../components/TestComponent'

export const MessagesExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: MessagesUI,
    /**
     * order to change status
     */
    order: {},
    /**
     * Id of the order to connect messages
     */
    orderId: 33,
    /**
     * Custom handle for send message
     */
    // customHandleSend: () => {
    //   console.log('customHandleSend')
    // },
    /**
     * Components types before [PUT HERE COMPONENT NAME]
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after [PUT HERE COMPONENT NAME]
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before [PUT HERE COMPONENT NAME]
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after [PUT HERE COMPONENT NAME]
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <Messages {...props} />
}
