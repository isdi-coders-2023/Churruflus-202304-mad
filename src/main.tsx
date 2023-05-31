import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/app/App";
import { AppContextProvider } from "./context/app.context.providers";
import "./sass/styles.scss";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.querySelector(".container") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Router>
  </React.StrictMode>
);
