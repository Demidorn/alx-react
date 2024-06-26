import React from 'react';
import logo from './holberton-logo.png';
// import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  // const [update, setUpdate] = React.useState(false);
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setUpdate(!update);
  //   }, 2000);
  // }, [update]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
