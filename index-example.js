import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
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

Sentry.init({
  environment: process.env.NODE_ENV,
  dsn: 'https://7ccffd136cd34e7688b458e68c6eb81f@o460529.ingest.sentry.io/5496809',
  integrations: [
    new Integrations.BrowserTracing()
  ],
  tracesSampleRate: 1.0
})

const wrapper = document.getElementById('app')
ReactDOM.render(
  <OrderingProvider settings={configFile}>
    <App />
  </OrderingProvider>, wrapper)
