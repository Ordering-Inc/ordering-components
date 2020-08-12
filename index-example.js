import React from 'react'
import ReactDOM from 'react-dom'
import App from './example/App'
import { SessionProvider } from './src/contexts/SessionContext'
import { ProductProvider } from './src/contexts/ProductContext';

const wrapper = document.getElementById('app')
ReactDOM.render(
  <SessionProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </SessionProvider>, wrapper)
