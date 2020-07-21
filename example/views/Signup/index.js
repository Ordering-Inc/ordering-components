import React from 'react'
import { Link } from 'react-router-dom'

import { LoginFormUI } from '../../components/LoginFormUI'
import { LoginForm } from '../../../src/components/LoginForm'
import { TestComponent } from '../../components/TestComponent'

export const Signup = ({ ordering }) => {
  // const handleCustonButtonLogin = () => {
  //   console.log('CUSTOM FUNC BUTTON')
  // }
  // const handleSuccessLogin = (user) => {
  //   console.log('LOGIN SUCCESS', user)
  // }
  const props = {
    ComponentUI: LoginFormUI,
    ordering: ordering,
    // handleSuccessLogin: handleSuccessLogin,
    handleContinueAsGuest: () => console.log('Continue as guest'),
    // handleButtonLoginClick: handleCustonButtonLogin,
    useLoginByEmail: true,
    useLoginByCellphone: true,
    defaultLoginTab: 'email',
    beforeComponents: [TestComponent, TestComponent],
    // afterComponents: [TestComponent, TestComponent],
    // beforeElements: [<p>Test</p>, <TestComponent />],
    // afterElements: [<TestComponent />, <TestComponent />],
    // linkToSignup: '/signup',
    // linkToForgetPassword: '/forgot_password',
    elementLinkToSignup: <Link to='/signup'>Go to signup</Link>,
    elementLinkToForgetPassword: <Link to='/forgot_password'>Go to forgot password</Link>
  }
  return <LoginForm {...props} />
}
