import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // document.getElementById('root')
);

createRoot(document.getElementById('root-notifications')).render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>,
  // document.getElementById('root-notifications')
);
