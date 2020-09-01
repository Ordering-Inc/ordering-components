import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <h1>
        Examples
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/login'>Login Component</Link>
        </li>
        <li>
          <Link to='/signup'>Signup Component</Link>
        </li>
        <li>
          <Link to='/forgot_password'>Forgot password</Link>
        </li>
        <li>
          <Link to='/facebook_login'>Facebook login</Link>
        </li>
        <li>
          <Link to='/session_manager'>Session manager</Link>
        </li>
        <li>
          <Link to='/profile'>User profile</Link>
        </li>
        {/* <li>
          <Link to='/order_context'>Order context and order type control</Link>
        </li> */}
        <li>
          <Link to='/order_context_advanced'>Order context advanced</Link>
        </li>
        <li>
          <Link to='/active_orders'>Active orders</Link>
        </li>
        <li>
          <Link to='/product_component'>Product component</Link>
        </li>
        <li>
          <Link to='/businesses_list'>Businesses List</Link>
        </li>
        <li>
          <Link to='/places'>Places</Link>
        </li>
        {/* <li>
          <Link to='/product_list'>Product list</Link>
        </li> */}
        <li>
          <Link to='/business_basic_information'>Business basic information</Link>
        </li>
        <li>
          <Link to='/language_selector'>Language selector</Link>
        </li>
        <li>
          <Link to='/sort_options'>Business sort options</Link>
        </li>
        <li>
          <Link to='/product_images'>Product images</Link>
        </li>
        <li>
          <Link to='/business_type_filter'>Business type filter</Link>
        </li>
        <li>
          <Link to='/config_manager'>Configs examples</Link>
        </li>
        <li>
          <Link to='/languages_examples'>Languages examples</Link>
        </li>
        <li>
          <Link to='/popup_example'>Popups example</Link>
        </li>
        <li>
          <Link to='/my_orders'>My Orders</Link>
        </li>
        <li>
          <Link to='/my_orders_list'>My orders list</Link>
        </li>
        <li>
          <Link to='/business_reviews'>Business reviews</Link>
        </li>
        <li>
          <Link to='/moment_option'>Moment option</Link>
        </li>
        <li>
          <Link to='/product_option_example'>Product option example</Link>
        </li>
        <li>
          <Link to='/business_products_search'>Business products search</Link>
        </li>
        <li>
          <Link to='/business_products_categories'>Business products categories</Link>
        </li>
        <li>
          <Link to='/products_list'>Product list</Link>
        </li>
        <li>
          <Link to='/products_listing'>Product listing</Link>
        </li>
        <li>
          <Link to='/payment_options'>Payment options</Link>
        </li>
        <li>
          <Link to='/business_featured_options'>Business featured options</Link>
        </li>
        <li>
          <Link to='/business_controller'>Business Controller</Link>
        </li>
        <li>
          <Link to='/business_information'>Business information</Link>
        </li>
        <li>
          <Link to='/user_details'>User details</Link>
        </li>
        <li>
          <Link to='/address_details'>Address details</Link>
        </li>
        <li>
          <Link to='/checkout'>Checkout</Link>
        </li>
        <li>
          <Link to='/driver_tips'>Driver tips</Link>
        </li>
        <li>
          <Link to='/search_options'>Search options</Link>
        </li>
        <li>
          <Link to='/main_search'>Main Search</Link>
        </li>
        <li>
          <Link to='/search_options'>Search options</Link>
        </li>
      </ul>
      <h2>Payments Section</h2>
      <ul>
        <li>
          <Link to='/payment_option_paypal'>Payments Options Paypal</Link>
        </li>
        <li>
          <Link to='/payment_option_cash'>Payments Options Cash</Link>
        </li>
      </ul>
    </>
  )
}
