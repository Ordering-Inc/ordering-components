import React from 'react'
import { UserFormDetails } from '../../../src/components/UserFormDetails'
import { UserDetailsUI } from '../../components/UserDetailsUI'
import { TestComponent } from '../../components/TestComponent'

export const UserDetailsExample = () => {
  const userProps = {
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
     * onEditUserClick
     */
    onEditUserClick: () => { console.log('editing') },
    /**
   * Function to change default user details behavior
   * @param {Object} user Current user data
   * @param {Object} changes Current form changes
   */
    handleButtonUpdateClick: (userResult, changes) => console.log(userResult, changes),
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
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after user details
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }

  return <UserFormDetails {...userProps} />
}
