import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//
import { ProviderCreated } from "./globally_data_layer/StateProvider";
//
import reducer, { initialState } from "./globally_reducer/reducer";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
    <BrowserRouter>
      <ProviderCreated initialState={initialState} reducer={reducer}>
        <App />
      </ProviderCreated>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
