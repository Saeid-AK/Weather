import React from "react";
import ReactDOM from "react-dom";

import { MyProvider } from "./context";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
