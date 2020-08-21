import React from 'react'
import { BusinessListingUI } from '../../components/BusinessListingUI'
import { BusinessListing } from '../../../src/components/BusinessListing'

export const BusinessList = () => {
  const props = {
    /**
    * UI Component, this must be containt all graphic elements and use parent props
    */
    UIComponent: BusinessListingUI
  }

  return <BusinessListing {...props} />
}
