import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import { theme } from "./styles/theme";
import { ThemeProvider } from "@emotion/react";
import BiconomyContextProvider from "context/BiconomyProvider";
import * as dotenv from "dotenv";

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;
dotenv.config();

const Application = () => {
  return APP_ID && SERVER_URL ? (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <BiconomyContextProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BiconomyContextProvider>
    </MoralisProvider>
  ) : (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <App />
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <Application />
  </StrictMode>,
  document.getElementById("root")
);
