import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import App from './App';
import Notifications from './Notifications';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

createRoot(document.getElementById('root-notifications')).render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>,
  // document.getElementById('root-notifications')
);
