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
import { ProductList } from './views/ProductList'
import { OrderContectExample } from './views/OrderContectExample'
import { ProductImagesExample } from './views/ProductImagesExample'
import { BusinessTypeFilterExample } from './views/BusinessTypeFilterExample'
import { PlacesExample } from './views/PlacesExample'
import { ConfigsExample } from './components/ConfigsExample'
import { LanguagesExample } from './components/LanguagesExample'
import { PopupExample } from './views/PopupExample'
import { ProductOptionExample } from './views/ProductOptionExample'
import { BusinessProductsCategoriesExample } from './views/BusinessProductsCategoriesExample'

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
          <Route path='/product_images'>
            <ProductImagesExample ordering={ordering} />
          </Route>
          <Route path='/business_type_filter'>
            <BusinessTypeFilterExample ordering={ordering} />
          </Route>
          <Route path='/places'>
            <PlacesExample ordering={ordering} />
          </Route>
          <Route path='/config_manager'>
            <ConfigsExample />
          </Route>
          <Route path='/languages_examples'>
            <LanguagesExample ordering={ordering} />
          </Route>
          <Route path='/popup_example'>
            <PopupExample />
          </Route>
          <Route path='/product_option_example'>
            <ProductOptionExample ordering={ordering} />
          </Route>
          <Route path='/business_products_categories'>
            <BusinessProductsCategoriesExample ordering={ordering} />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}
