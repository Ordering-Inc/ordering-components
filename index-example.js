import React from 'react'
import ReactDOM from 'react-dom'
import App from './example/App'
import { SessionProvider } from './src/contexts/SessionContext'
import { BusinessProvider } from './src/contexts/BusinessContext'
import { WebsocketProvider } from './src/contexts/WebsocketContext'
import { OrderProvider } from './src/contexts/OrderContext'
import { Ordering } from './example/ordering-api-sdk.min'

const ordering = new Ordering({
  url: 'http://localhost:8080',
  project: 'development'
})

const wrapper = document.getElementById('app')
ReactDOM.render(
  <SessionProvider>
    <WebsocketProvider>
      <OrderProvider ordering={ordering}>
        <BusinessProvider>
          <App ordering={ordering} />
        </BusinessProvider>
      </OrderProvider>
    </WebsocketProvider>
  </SessionProvider>, wrapper)
