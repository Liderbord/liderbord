import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import { theme } from "./styles/theme";
import { ThemeProvider } from "@emotion/react";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider
      serverUrl={
        process.env.REACT_APP_MORALIS_SERVER_URL ??
        "REACT_APP_MORALIS_SERVER_URL"
      }
      appId={
        process.env.REACT_APP_MORALIS_APPLICATION_ID ??
        "REACT_APP_MORALIS_APPLICATION_ID"
      }
    >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
