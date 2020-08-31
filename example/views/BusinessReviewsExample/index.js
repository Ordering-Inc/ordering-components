import React from 'react'

import { BusinessReviewsUI } from '../../components/BusinessReviewsUI'
import { BusinessReviews } from '../../../src/components/BusinessReviews'
import { TestComponent } from '../../components/TestComponent'

export const BusinessReviewsExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: BusinessReviewsUI,
    /**
     * Reviews, this array must be containt all info about business reviews
     */
    reviews: null,
    /**
     * Id to get business from aPI
     */
    businessId: 41,
    /**
     * Components types before business reviews
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after business reviews
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before business reviews
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after business reviews
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <BusinessReviews {...props} />
}
