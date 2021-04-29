import React from 'react'

import { BusinessControllerUI } from '../../components/BusinessControllerUI'
import { BusinessController } from '../../../src/components/BusinessController'
import { TestComponent } from '../../components/TestComponent'

export const BusinessControllerExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: BusinessControllerUI,
    /**
     * business, this must be containt all business data
     */
    business: null,
    /**
     * businessId, this must be containt id or slug to get business from API
     */
    businessId: 41,
    /**
     * businessAttributes, Array of attributes to get business from API
     */
    businessAttributes: ['id', 'name', 'header', 'logo', 'name', 'today', 'delivery_price', 'minimum', 'description', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers'],
    /**
     * onBusinessClick, function to get click event and return business object after default behavior
     */
    onBusinessClick: (e) => { console.log('onBusinessClick event', e) },
    /**
     * handleCustomClick, function to get click event and return business object without default behavior
     */
    handleCustomClick: null,
    /**
     * Components types before Business controller
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after Business controller
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before Business controller
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after Business controller
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }
  return <BusinessController {...props} />
}
