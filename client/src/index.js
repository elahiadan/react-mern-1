import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";

import { Provider } from "react-redux";
import reduxStore from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={reduxStore()}>
      <Routes />
    </Provider>
  // </React.StrictMode>
);
