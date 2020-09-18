import React from 'react'
import ReactDOM from 'react-dom'
import App from './example/App'
import { OrderingProvider } from './src/contexts/OrderingContext'

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

const wrapper = document.getElementById('app')
ReactDOM.render(
  <OrderingProvider settings={configFile}>
    <App />
  </OrderingProvider>, wrapper)
