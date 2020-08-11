import React from 'react'
import { BusinessListingUI } from '../../components/BusinessListingUI'
import { BusinessListing } from '../../../src/components/BusinessListing'

export const BusinessList = () => {
  const props = {
    UIComponent: BusinessListingUI
  }

  return <BusinessListing {...props} />
}
