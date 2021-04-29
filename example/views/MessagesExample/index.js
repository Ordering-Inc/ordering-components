import React, { useState } from 'react'

import { MessagesUI } from '../../components/MessagesUI'
import { Messages } from '../../../src/components/Messages'
import { TestComponent } from '../../components/TestComponent'

export const MessagesExample = () => {
  const [messages, setMessages] = useState([])
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: MessagesUI,

    /**
     * Array of messages that must be provided form orderDetails
     */
    messages,
    /**
     * function for set new messages
     */
    setMessages,
    /**
     * order to change status
     */
    order: {},
    /**
     * Id of the order to connect messages
     */
    orderId: 33,
    /**
   * @param {object} message
   * handleCustomClick, function to get click event and return message without default behavior
   */
    customHandleSend: (message) => console.log('message sent', message),
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
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after [PUT HERE COMPONENT NAME]
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }
  return <Messages {...props} />
}
