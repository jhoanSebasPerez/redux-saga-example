import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import AppContainer from "./AppContainer";
import "./index.css";
import appStore from "./redux/config/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <AppContainer />
    </Provider>
  </React.StrictMode>
);
