import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://ioncbc419bjd.usemoralis.com:2053/server" appId="qqNoQcpJSGcE9m7Oov43EcpSF64OrZ40PiZyLVzt">
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);