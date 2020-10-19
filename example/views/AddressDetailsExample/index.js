import React from 'react'

import { AddressDetailsUI } from '../../components/AddressDetailsUI'
import { AddressDetails } from '../../../src/components/AddressDetails'
import { TestComponent } from '../../components/TestComponent'

export const AddressDetailsExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: AddressDetailsUI,
    /**
     * location, business location with lat, lng and zoom properties
     */
    location: null,
    /**
     * businessId, to get business information
     */
    businessId: 41,
    /**
     * apiKey, google maps api key
     */
    apiKey: '',
    /**
     * zoom of google Map
     */
    mapZoom: 15,
    /**
     * Components types before address details
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after address details
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before address details
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after address details
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <AddressDetails {...props} />
}
