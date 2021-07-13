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
// import { ProductDetail } from './views/ProductDetail'
// import { ProductList } from './views/ProductList(NOT)'
import { BusinessBasicInformationExample } from './views/BusinessBasicInformationExample'
import { LanguageSelectorExample } from './views/LanguageSelectorExample'
import { BusinessSortControlExample } from './views/BusinessSortControlExample'
import { ProductImagesExample } from './views/ProductImagesExample'
import { BusinessTypeFilterExample } from './views/BusinessTypeFilterExample'
import { PlacesExample } from './views/PlacesExample'
import { ConfigsExample } from './components/ConfigsExample'
import { LanguagesExample } from './components/LanguagesExample'
import { PopupExample } from './views/PopupExample'
import { MyOrdersExample } from './views/MyOrdersExample'
import { MyOrdersListExample } from './views/MyOrdersListExample'
import { OrderChangeExample } from './views/OrderChangeExample'
import { BusinessReviewsExample } from './views/BusinessReviewsExample'
import { MomentOptionExample } from './views/MomentOptionExample'
import { MenuControlExample } from './views/MenuControlExample'
import { ProductOptionExample } from './views/ProductOptionExample'
import { GoogleLoginExample } from './views/GoogleLoginExample'
import { OrderReviewExample } from './views/OrderReviewExample'
import { CheckoutExample } from './views/CheckoutExample'
import { BusinessProductsSearchExample } from './views/BusinessProductsSearchExample'
import { BusinessProductsCategoriesExample } from './views/BusinessProductsCategoriesExample'
import { ProductsListExample } from './views/ProductsListExample'
import { ProductsListingExample } from './views/ProductsListingExample'
import { PaymentOptionsExample } from './views/PaymentOptionsExample'
import { BusinessControllerExample } from './views/BusinessControllerExample'
import { BusinessInformationExample } from './views/BusinessInformationExample'
import { UserDetailsExample } from './views/UserDetailsExample'
import { AddressDetailsExample } from './views/AddressDetailsExample'
import { DriverTipsExample } from './views/DriverTipsExample'
import { SearchOptionsExample } from './views/SearchOptionsExample'
import { MainSearchExample } from './views/MainSearchExample'
import { OrderContextExample } from './views/OrderContextExample'
import { AppleLoginExample } from './views/AppleLoginExample'
import { ProductShareExample } from './views/ProductShareExample'
import { OrderDetailsExample } from './views/OrderDetailsExample'
import { CmsContentExample } from './views/CmsContentExample'
import { PaymentOptionPaypalExample } from './views/PaymentOptionPaypalExample'
import { PaymentOptionCashExample } from './views/PaymentOptionCashExample'
import { PaymentOptionStripeExample } from './views/PaymentOptionStripeExample'
import { PaymentOptionStripeDirectExample } from './views/PaymentOptionStripeDirectExample'
import { PaymentOptionStripeRedirectExample } from './views/PaymentOptionStripeRedirectExample'
import { MessagesExample } from './views/MessagesExample'
import { UpsellingPageExample } from './views/UpsellingPageExample'
import { EventsExample } from './views/EventsExample'
import { Analytics } from '../src/components/Analitycs'
import ChangeView from './components/ChangeView'
import { FloatingButtonExample } from './views/FloatingButtonExample'
import { ResetPasswordExample } from './views/ResetPasswordExample'
import { PhoneAutocompleteExample } from './views/PhoneAutocompleteExample'
import { BusinessesMapExample } from './views/BusinessesMapExample'

export default function App () {
  return (
    <Router>
      <>
        <Analytics trackId='UA-164168119-1' />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <ChangeView>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/forgot_password'>
              <ForgotPassword />
            </Route>
            <Route path='/password/reset'>
              <ResetPasswordExample />
            </Route>
            <Route path='/facebook_login'>
              <FacebookLogin />
            </Route>
            <Route path='/google_login'>
              <GoogleLoginExample />
            </Route>
            <Route path='/apple_login'>
              <AppleLoginExample />
            </Route>
            <Route path='/session_manager'>
              <SessionManager />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
            <Route path='/active_orders'>
              <ActiveOrders />
            </Route>
            {/* <Route path='/product_component'>
              <ProductDetail />
            </Route> */}
            {/* <Route path='/product_list'>
              <ProductList />
            </Route> */}
            <Route path='/language_selector'>
              <LanguageSelectorExample />
            </Route>
            <Route path='/sort_options'>
              <BusinessSortControlExample />
            </Route>
            <Route path='/product_images'>
              <ProductImagesExample />
            </Route>
            <Route path='/order_context_advanced'>
              <OrderContextExample />
            </Route>
            <Route path='/business_type_filter'>
              <BusinessTypeFilterExample />
            </Route>
            <Route path='/places'>
              <PlacesExample />
            </Route>
            <Route path='/config_manager'>
              <ConfigsExample />
            </Route>
            <Route path='/languages_examples'>
              <LanguagesExample />
            </Route>
            <Route path='/popup_example'>
              <PopupExample />
            </Route>
            <Route path='/my_orders'>
              <MyOrdersExample />
            </Route>
            <Route path='/my_orders_list'>
              <MyOrdersListExample />
            </Route>
            <Route path='/order_change'>
              <OrderChangeExample />
            </Route>
            <Route path='/business_reviews'>
              <BusinessReviewsExample />
            </Route>
            <Route path='/moment_option'>
              <MomentOptionExample />
            </Route>
            <Route path='/menu_control'>
              <MenuControlExample />
            </Route>
            <Route path='/product_option_example'>
              <ProductOptionExample />
            </Route>
            <Route path='/business_products_search'>
              <BusinessProductsSearchExample />
            </Route>
            <Route path='/business_products_categories'>
              <BusinessProductsCategoriesExample />
            </Route>
            <Route path='/products_list'>
              <ProductsListExample />
            </Route>
            <Route path='/products_listing' exact>
              <ProductsListingExample />
            </Route>
            <Route path='/product_share'>
              <ProductShareExample />
            </Route>
            <Route path='/business_products_search'>
              <BusinessProductsSearchExample />
            </Route>
            <Route path='/business_products_categories'>
              <BusinessProductsCategoriesExample />
            </Route>
            <Route path='/business_controller'>
              <BusinessControllerExample />
            </Route>
            <Route path='/business_information'>
              <BusinessInformationExample />
            </Route>
            <Route path='/user_details'>
              <UserDetailsExample />
            </Route>
            <Route path='/address_details'>
              <AddressDetailsExample />
            </Route>
            <Route path='/payment_options'>
              <PaymentOptionsExample />
            </Route>
            <Route path='/driver_tips'>
              <DriverTipsExample />
            </Route>
            <Route path='/checkout/:cartUuid?'>
              <CheckoutExample />
            </Route>
            <Route path='/search_options'>
              <SearchOptionsExample />
            </Route>
            <Route path='/main_search'>
              <MainSearchExample />
            </Route>
            <Route path='/business_basic_information'>
              <BusinessBasicInformationExample />
            </Route>
            <Route path='/messages'>
              <MessagesExample />
            </Route>
            <Route path='/payment_option_paypal' exact>
              <PaymentOptionPaypalExample />
            </Route>
            <Route path='/payment_option_cash' exact>
              <PaymentOptionCashExample />
            </Route>
            <Route path='/payment_option_stripe' exact>
              <PaymentOptionStripeExample />
            </Route>
            <Route path='/payment_option_stripe_direct' exact>
              <PaymentOptionStripeDirectExample />
            </Route>
            <Route path='/payment_option_stripe_redirect' exact>
              <PaymentOptionStripeRedirectExample />
            </Route>
            <Route path='/review_orders'>
              <OrderReviewExample />
            </Route>
            <Route path='/pages'>
              <CmsContentExample />
            </Route>
            <Route path='/order_details/:orderId'>
              <OrderDetailsExample />
            </Route>
            <Route path='/upselling'>
              <UpsellingPageExample />
            </Route>
            <Route path='/events'>
              <EventsExample />
            </Route>
            <Route path='/floating_button'>
              <FloatingButtonExample />
            </Route>
            <Route path='/phone_autocomplete'>
              <PhoneAutocompleteExample />
            </Route>
            <Route path='/business_map'>
              <BusinessesMapExample />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </ChangeView>
      </>
    </Router>
  )
}
