import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/app/App";
import { AppContextProvider } from "./context/app.context.providers";

ReactDOM.createRoot(document.querySelector(".container") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
