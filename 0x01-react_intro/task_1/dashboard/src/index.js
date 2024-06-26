import React from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import Notifications from './Notifications';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>,
  document.getElementById('root-notifications')
);
