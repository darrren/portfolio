import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import App from "./App";

// COMPONENTS
import Loading from '@/Components/Loading'
import Header from '@/Components/Header'

import './index.scss'

declare const window: any
declare global {
  interface Window {
    lenis: any
  }
}

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Loading />
      <Header />
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </>
);
