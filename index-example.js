import React from "react";
import ReactDOM from "react-dom";
import App from "./example/App";
import { SessionProvider } from "./src/contexts/SessionContext";
import { WebsocketProvider } from "./src/contexts/WebsocketContext";
import { OrderProvider } from "./src/contexts/OrderContext";
import { Ordering } from "ordering-api-sdk";
import { ConfigProvider } from "./src/contexts/ConfigContext";
import { LanguageProvider } from "./src/contexts/LanguageContext";
import { BusinessesProvider } from "./src/contexts/BussinessesContext";

const ordering = new Ordering({
   //url: 'apiv4.ordering.co',
   // project: 'demo'
});

const wrapper = document.getElementById("app");
ReactDOM.render(
  <ConfigProvider ordering={ordering}>
    <LanguageProvider ordering={ordering}>
      <SessionProvider>
        <WebsocketProvider>
          <OrderProvider ordering={ordering}>
            <BusinessesProvider ordering={ordering}>
              <App ordering={ordering} />
            </BusinessesProvider>
          </OrderProvider>
        </WebsocketProvider>
      </SessionProvider>
    </LanguageProvider>
  </ConfigProvider>,
  wrapper
);
