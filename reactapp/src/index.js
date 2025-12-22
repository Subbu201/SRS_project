import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PatientProvider } from "./context/PatientContext";

ReactDOM.render(
  <PatientProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PatientProvider>,
  document.getElementById("root")
);
