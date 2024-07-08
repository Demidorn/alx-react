import React from 'react';
import './Notifications.css';
import closeIcon from  '../close-icon.png';
import { getLatestNotification } from '../utils/utils';

function Notifications() {
  return (
    <div className="Notifications">
      <button style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        cursor: 'pointer'
      }}
      aria-label="Close"
      onClick={() => console.log('Close button has been clicked')}>
        <img src={closeIcon} alt="Close icon" style={{
          width: '15px',
          height: '15px'
        }} />
      </button>
      <p><b>Here is the list of notifications</b></p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;