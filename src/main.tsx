import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// as BrowserRouser does, we can also use:
// HashRouter (not usual)
// HistoryRouter (not usual)
// MemoryRouter (specific cases)
// StaticRouter (specific cases)
// example:
// import { StaticRouter } from "react-router-dom/server";
/* ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StaticRouter location="/test">
      <App />
    </StaticRouter>
  </React.StrictMode>
); */
// NativeRouter (for react native uses)
