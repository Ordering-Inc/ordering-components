import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => (
  <>
    <h1>Examples</h1>
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
    </ul>
  </>
)
