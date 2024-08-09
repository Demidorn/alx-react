import React from "react";
import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
import App from "./App/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import uiReducer, { initialState } from "./reducers/uiReducer";



const store = createStore(uiReducer, Map(initialState));
//react render in react 17
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


// introduce createRoot for react 18
// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );