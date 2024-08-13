import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import FormikBasic from "./components/FormikBasic";
// import App from "./App";
// import LearnRouter from "./components/LearnRouter";

// import LifeCycle from "./components/LifeCycle"
// import InputExample from './components/InputExample';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <InputExample /> */}
    {/* <LifeCycle /> */}
    {/* <LearnRouter /> */}
    <FormikBasic />
  </React.StrictMode>
);


reportWebVitals();
