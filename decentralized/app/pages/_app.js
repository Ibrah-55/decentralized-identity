'use client'
import { Provider } from "@self.id/react";

import './globals.css'

import {React} from 'react'


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
