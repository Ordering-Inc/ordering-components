import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Home } from './views/Home'
import { Login } from './views/Login'
import { Signup } from './views/Signup'
import { ForgotPassword } from './views/ForgotPassword'
import { FacebookLogin } from './views/FacebookLogin'
import { SessionManager } from './views/SessionManager'
import { Profile } from './views/UserProfile'
import { ActiveOrders } from './views/ActiveOrders'
import { ProductList } from './views/ProductList';
import { OrderContectExample } from './views/OrderContectExample'
import { BusinessBasicInformationExample } from './views/BusinessBasicInformationExample'

export default function App ({ ordering }) {
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
          <Route path='/session_manager'>
            <SessionManager ordering={ordering} />
          </Route>
          <Route path='/profile'>
            <Profile ordering={ordering} />
          </Route>
          <Route path='/active_orders'>
            <ActiveOrders ordering={ordering} />
          </Route>
          <Route path='/product_list'>
            <ProductList ordering={ordering} />
          </Route>
          <Route path='/order_context'>
            <OrderContectExample ordering={ordering} />
          </Route>
          <Route path='/business_basic_information'>
            <BusinessBasicInformationExample ordering={ordering} />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}
