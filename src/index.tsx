import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ResponsiveProvider } from "./Utils/useResponsive/ResponsiveContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ResponsiveProvider>
        <App />
      </ResponsiveProvider>
    </BrowserRouter>
  </React.StrictMode>
);
