import React from 'react';
import logo from './logo.svg';
import './App.css';
import CurrentPrices from './components/CurrentPrices';
import PriceHistory from './components/PriceHistory';

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <div id="main-container" className="flex-container">
        <CurrentPrices />
        <PriceHistory />
      </div>
    </div>
  );
}

export default App;
