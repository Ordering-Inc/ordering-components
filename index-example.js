import React from 'react'
import ReactDOM from 'react-dom'
import App from './example/App'
import { OrderingProvider } from './src/contexts/OrderingContext'

const configFile = {
  app_id: 'ordering-react',
  project: 'luisv4',
  api: {
    url: 'https://apiv4-staging.ordering.co',
    language: 'en',
    version: 'v400'
  },
  socket: {
    url: 'https://socket-staging-v2.ordering.co'
  }
}

const wrapper = document.getElementById('app')
ReactDOM.render(
  <OrderingProvider settings={configFile}>
    <App />
  </OrderingProvider>, wrapper)
