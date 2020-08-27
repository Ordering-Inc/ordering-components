import React from 'react'

import { BusinessesList } from '../../../src/components/BusinessesList'
import { BusinessesListUI } from '../../components/BusinessesListUI'

export const Businesses = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: BusinessesListUI
  }
  return <BusinessesList {...props} />
}
