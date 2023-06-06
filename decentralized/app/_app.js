'use client'
import { Provider } from "@self.id/react";
import {React} from 'react'
import Home from "./index";
function App({Component, pageProps}) {
  return (
    <div>
      <Provider client={{ceramic: "testnet-client"}}>
        <Component {...pageProps} />

      </Provider>
    </div>
  )
}

export default App
