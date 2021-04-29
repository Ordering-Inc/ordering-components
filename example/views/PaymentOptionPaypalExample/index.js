import React from 'react'

import { PaymentOptionPaypalUI } from '../../components/PaymentOptionPaypalUI'
import { PaymentOptionPaypal } from '../../../src/components/PaymentOptionPaypal'
import { TestComponent } from '../../components/TestComponent'
import { useSession } from '../../../src/contexts/SessionContext'

export const PaymentOptionPaypalExample = () => {
  const [{ token, loading }] = useSession()
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: PaymentOptionPaypalUI,
    /**
     * User token
     */
    token,
    /**
     * paypal ClientID
     */
    clientId: 'AULNRFhxjY5BzJ_uXoiB6R4hM1SNwKGowkphqzGuVpACCGF-VXeKYEoyftxycsCSXnsl1x2lp7Ygjnkr',
    /**
     * style, some properties to show paypal button, check out the docs https://developer.paypal.com/docs/archive/checkout/how-to/customize-button/ for a complete documentation
     */
    style: {
      layout: 'vertical',
      color: 'gold',
      shape: 'rect',
      label: 'paypal'
    },
    /**
     * Body params to get payment and place order
     */
    body: {
      paymethod_id: 3,
      amount: 7.57,
      delivery_zone_id: 43,
      cartUuid: 'f97e12de-8090-49a2-a4ae-ff060498d432'
    },
    /**
     * Message to show when user hasn't token
     */
    noAuthMessage: !token ? 'Sorry, you need to login to use this method' : null,
    /**
     * Method to get success response from paypal button
     */
    handlerChangePaypal: null,
    /**
     * Components types before Payment options paypal
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after Payment options paypal
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before Payment options paypal
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after Payment options paypal
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }
  return !loading && token && <PaymentOptionPaypal {...props} />
}
