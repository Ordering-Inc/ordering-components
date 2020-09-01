import React from 'react'
import { GoogleLoginUI } from '../../components/GoogleLoginUI'
import { GoogleLoginButton } from '../../../src/components/GoogleLoginButton'

export const GoogleLoginExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: GoogleLoginUI
  }

  return <GoogleLoginButton {...props} />
}
