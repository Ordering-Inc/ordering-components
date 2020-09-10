import React from 'react'
import { UserDetails } from '../../../src/components/UserDetails'
import { UserDetailsUI } from '../../components/UserDetailsUI'
import { TestComponent } from '../../components/TestComponent'

export const UserDetailsExample = ({ ordering }) => {
  const userProps = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: UserDetailsUI,
    /**
     * businessId
     * This props is required to check coupon
     */
    businessId: 41,
    /**
     * User ID
     * If you provide the user id the component get user form Ordering API
     */
    userId: 1,
    /**
     * Enable to get validation fields to show/hide fields from Ordering API
     */
    useValidationFields: true,
    /**
     * Enable/Disable default session manager
     * Save user and token with default session manager
     */
    useDefualtSessionManager: true,
    /**
     * Access token to update user
     * Is required when `useDefualtSessionManager` is false
     */
    accessToken: 'TOKEN',
    /**
     * Components types before user details
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after user details
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before user details
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after user details
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }

  return <UserDetails {...userProps} />
}
