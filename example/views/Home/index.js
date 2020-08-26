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
        <li>
          <Link to='/order_context'>Order context and order type control</Link>
        </li>
        <li>
          <Link to='/active_orders'>Active orders</Link>
        </li>
        <li>
          <Link to='/places'>Places</Link>
        </li>
        <li>
          <Link to='/product_list'>Product list</Link>
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
          <Link to='/product_option_example'>Product option example</Link>
        </li>
        <li>
          <Link to='/business_featured_options'>Business featured options</Link>
        </li>
      </ul>
    </>
  )
}
