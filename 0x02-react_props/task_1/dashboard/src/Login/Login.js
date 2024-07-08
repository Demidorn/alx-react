import React from 'react';
import './Login.css';


function Login () {
  return (
    <React.Fragment>
      <div className="login-form">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <div className="submit-button">
          <button type="button">OK</button>
        </div>
      </div>
    </React.Fragment>
  
  );
}

export default Login;