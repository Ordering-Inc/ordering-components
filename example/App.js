import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Ordering } from './ordering-api-sdk.min'

import { Home } from './views/Home'
import { Login } from './views/Login'
import { Signup } from './views/Signup'
import { ForgotPassword } from './views/ForgotPassword'
import { FacebookLogin } from './views/FacebookLogin'

const ordering = new Ordering()

export default function App () {
  return (
    <Router>
      <>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/login'>
            <Login ordering={ordering} />
          </Route>
          <Route path='/signup'>
            <Signup ordering={ordering} />
          </Route>
          <Route path='/forgot_password'>
            <ForgotPassword ordering={ordering} />
          </Route>
          <Route path='/facebook_login'>
            <FacebookLogin ordering={ordering} />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}
