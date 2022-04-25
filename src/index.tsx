import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import moralisKeys from "./moralis-keys.json";
import { theme } from "./styles/theme";
import { ThemeProvider } from "@emotion/react";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider
      serverUrl={moralisKeys.serverUrl}
      appId={moralisKeys.appId}
    >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
