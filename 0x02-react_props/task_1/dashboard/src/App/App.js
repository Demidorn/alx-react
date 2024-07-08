import React from 'react';
import './App.css';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <Login />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
