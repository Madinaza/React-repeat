import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ContextIndex from "./components/context/index";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {
      <ContextIndex />

      /* <App /> */
    }
  </React.StrictMode>
);

reportWebVitals();
