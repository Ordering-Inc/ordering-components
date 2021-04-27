import React from 'react'
import { UserFormDetails } from '../../../src/components/UserFormDetails'
import { UserProfileUI } from '../../components/UserProfileUI'
import { TestComponent } from '../../components/TestComponent'

export const Profile = () => {
  const profileProps = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: UserProfileUI,
    /**
     * Function to change default user profile behavior
     * @param {Object} user Current user data
     * @param {Object} changes Current form changes
     */
    // handleButtonUpdateClick: (user, changes) => console.log('User and change data to implement your own workflow', user, changes),
    /**
     * Use session user to profile
     */
    // useSessionUser: true,
    /**
     * Refresh session user data from Ordering API
     */
    // refreshSessionUser: true,
    /**
     * User ID
     * If you provide the user id the component get user form Ordering API
     */
    userId: 1,
    /**
     * User object
     * If you provide user object the component not get user form Ordering API
     */
    // user: {},
    /**
     * Enable to get validation fields to show/hide fields from Ordering API
     */
    useValidationFileds: true,
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
     * Components types before login form
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after login form
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before login form
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after login form
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }

  return <UserFormDetails {...profileProps} />
}
