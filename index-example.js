import React from 'react'
import ReactDOM from 'react-dom'
import App from './example/App'
import { Ordering } from 'ordering-api-sdk'
import { OrderingProvider } from './src/contexts/OrderingContext'

const ordering = new Ordering({
  // url: 'http://apiv4-features.ordering.co',
  // project: 'luisv4'
  url: 'http://localhost:8080',
  project: 'development'
})

const configFile = {
  project: 'development',
  api: {
    url: 'http://localhost:8080',
    language: 'en',
    version: 'v400'
  },
  socket: {
    url: 'http://localhost:1337'
  }
}

// Modal.setAppElement('#root-modal')
const wrapper = document.getElementById('app')
ReactDOM.render(
  <OrderingProvider settings={configFile}>
    <App ordering={ordering} />
  </OrderingProvider>, wrapper)
