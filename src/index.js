import React from "react";
import "./static/fonts/font.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { MbtiContextProvider } from "./hooks/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
axios.defaults.baseURL = "https://kimduhong.pythonanywhere.com/";
root.render(
  <BrowserRouter>
    <MbtiContextProvider>
      <App />
    </MbtiContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
