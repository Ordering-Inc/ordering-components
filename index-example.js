import React from 'react'
import ReactDOM from 'react-dom'
import App from './example/App'
import Modal from 'react-modal'
import { SessionProvider } from './src/contexts/SessionContext'
import { WebsocketProvider } from './src/contexts/WebsocketContext'
import { OrderProvider } from './src/contexts/OrderContext'
// import { Ordering } from './example/ordering-api-sdk.min'
import { Ordering } from 'ordering-api-sdk'

const ordering = new Ordering({
  // url: 'http://localhost:8080',
  // project: 'development'
})

Modal.setAppElement('#modal-root')

const wrapper = document.getElementById('app')
ReactDOM.render(
  <SessionProvider>
    <WebsocketProvider>
      <OrderProvider ordering={ordering}>
        <App ordering={ordering} />
      </OrderProvider>
    </WebsocketProvider>
  </SessionProvider>, wrapper)
