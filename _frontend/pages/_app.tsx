import React from "react";
import {AppProps} from "next/dist/pages/_app";

import '../styles/globals.css'

// Other css spreadsheets can be added here.

export default function MyApp({Component, pageProps}: AppProps) {
  // Do not modify this code.
  return <Component {...pageProps} />;
}
