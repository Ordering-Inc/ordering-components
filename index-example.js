import React from 'react'
import ReactDOM from 'react-dom'
import App from './example/App'
import { SessionProvider } from './src/contexts/SessionContext'
// import { ProductProvider } from './src/contexts/ProductContext';
// import { BusinessProvider } from './src/contexts/BusinessContext'
import { WebsocketProvider } from './src/contexts/WebsocketContext'
import { OrderProvider } from './src/contexts/OrderContext'
import { Ordering } from 'ordering-api-sdk'
import { ConfigProvider } from './src/contexts/ConfigContext'
import { LanguageProvider } from './src/contexts/LanguageContext'

const ordering = new Ordering({
  url: 'http://apiv4-features.ordering.co',
  project: 'luisv4'
})

// Modal.setAppElement('#root-modal')
const wrapper = document.getElementById('app')
ReactDOM.render(
  <ConfigProvider ordering={ordering}>
    <LanguageProvider ordering={ordering}>
      <SessionProvider>
        <WebsocketProvider>
          <OrderProvider ordering={ordering}>
            <App ordering={ordering} />
          </OrderProvider>
        </WebsocketProvider>
      </SessionProvider>
    </LanguageProvider>
  </ConfigProvider>, wrapper)
