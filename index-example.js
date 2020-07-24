import React from 'react'
import ReactDOM from 'react-dom'
import App from './example/App'
import { SessionProvider } from './src/contexts/SessionContext'

const wrapper = document.getElementById('app')
ReactDOM.render(
  <SessionProvider>
    <App />
  </SessionProvider>, wrapper)
