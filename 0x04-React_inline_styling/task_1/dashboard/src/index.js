import React from "react";
import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
import App from "./App/App";


//react render in react 17
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


// introduce createRoot for react 18
// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );