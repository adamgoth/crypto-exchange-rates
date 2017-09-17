import React from 'react';
import './App.css';

import CurrentPrices from './components/CurrentPrices';
import PriceHistory from './components/PriceHistory';

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Crypto Exchange Rates</h1>
      </div>
      <div id="main-container" className="flex-container">
        <CurrentPrices />
        <PriceHistory />
      </div>
    </div>
  );
}

export default App;
