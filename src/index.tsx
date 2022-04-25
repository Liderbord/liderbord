import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import moralisKeys from "./moralis-keys.json"
ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl={moralisKeys.serverUrl} appId={moralisKeys.appId}>
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);