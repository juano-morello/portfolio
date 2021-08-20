import '../node_modules/bootstrap/scss/bootstrap.scss'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Navbar from "../components/navbar/Navbar";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div className={'container'}>
          <Navbar />
        <Component {...pageProps} />
      </div>
  )
}
export default MyApp
