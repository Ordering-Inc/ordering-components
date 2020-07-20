import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LoginForm } from './components/LoginForm/index.js';

import { Ordering } from './ordering-api-sdk.min'
import { LoginFormUI } from './views/LoginFormUI/index.js';
import { TestComponent } from './views/TestComponent/index.js';

const ordering = new Ordering()


export default function App() {
  return (
    <Router>
      <React.Fragment>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

function Home() {
  const handleCustonButtonLogin = () => {
    console.log("CUSTOM FUNC BUTTON")
  }
  const handleSuccessLogin = (user) => {
    console.log("LOGIN SUCCESS", user)
  }
  const handleContinueAsGuest = () => {
    console.log("CONTINUE AS GUEST")
  }
  const props = {
    ComponentUI: LoginFormUI,
    ordering: ordering,
    // handleSuccessLogin: handleSuccessLogin,
    // handleContinueAsGuest: handleContinueAsGuest,
    // handleButtonLoginClick: handleCustonButtonLogin,
    useLoginByEmail: true,
    useLoginByCellphone: true,
    defaultLoginTab: 'cellphone',
    // beforeComponents: [TestComponent, TestComponent],
    // afterComponents: [TestComponent, TestComponent],
    // beforeElements: [<p>HOLA</p>, <TestComponent />],
    // afterElements: [<TestComponent />, <TestComponent />],
    // linkToSignup: '/signup',
    // linkToForgetPassword: '/forgot_password',
    // elementLinkToSignup: <Link to="/signup">Go to signup</Link>,
    // elementLinkToForgetPassword: <Link to="/forgot_password">Go to forgot password</Link>
  }
  return <LoginForm {...props} />
}
