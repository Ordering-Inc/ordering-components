import React from 'react'

import { UpsellingPage } from '../../../src/components/UpsellingPage'
import { UpsellingPageUI } from '../../components/UpsellingPageUI'

export const UpsellingPageExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: UpsellingPageUI,
    /**
     * list of products that are already in the cart (filts by id)
     */
    cartProducts: [{ id: 1319 }, { id: 1298 }],
    /**
     * list of business products
     */
    products: [],
    /**
      * BusinessId is required when products is not defined
      */
    businessId: 41,
    /**
     * Function to save event
     */
    onSave: (productCart) => {
      console.log(productCart)
    }
  }

  return (
    <UpsellingPage {...props} />
  )
}
