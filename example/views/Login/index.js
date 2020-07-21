import React from 'react'
import { Link } from 'react-router-dom'

import { LoginFormUI } from '../../components/LoginFormUI'
import { LoginForm } from '../../../src/components/LoginForm'
import { TestComponent } from '../../components/TestComponent'

export const Login = ({ ordering }) => {
  const props = {
    ComponentUI: LoginFormUI,
    ordering: ordering,
    // handleSuccessLogin: () => console.log('Your own login workflow')),
    handleContinueAsGuest: () => console.log('Continue as guest'),
    handleButtonLoginClick: (user) => console.log('Login success with use', user),
    useLoginByEmail: true,
    useLoginByCellphone: true,
    defaultLoginTab: 'cellphone',
    beforeComponents: [TestComponent],
    afterComponents: [TestComponent],
    beforeElements: [<p key>Test Element Before</p>],
    afterElements: [<p key>Test Element After</p>],
    linkToSignup: '/signup',
    linkToForgetPassword: '/forgot_password',
    elementLinkToSignup: <Link to='/signup'>Go to signup</Link>,
    elementLinkToForgetPassword: <Link to='/forgot_password'>Go to forgot password</Link>
  }
  return <LoginForm {...props} />
}
