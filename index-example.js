import React from 'react'
import ReactDOM from 'react-dom'
import App from './example/App'
import { SessionProvider } from './src/contexts/SessionContext'
import { WebsocketProvider } from './src/contexts/WebsocketContext'

const wrapper = document.getElementById('app')
ReactDOM.render(
  <SessionProvider>
    <WebsocketProvider>
      <App />
    </WebsocketProvider>
  </SessionProvider>, wrapper)
