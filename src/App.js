import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CoinBox from './components/CoinBox';
import { fetchCoincapData, fetchPoloniexData, fetchKrakenData } from './utils/DataService';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eth_prices: [],
      ltc_prices: [],
      dash_prices: []
    };

    fetchCoincapData.call(this);
    fetchPoloniexData.call(this);
    fetchKrakenData.call(this);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div id="main-container" className="flex-container">
          <div id="price-containers" className="flex-container">
            <CoinBox coinData={this.state.eth_prices} title="Ethereum" />
            <CoinBox coinData={this.state.ltc_prices} title="Litecoin" />
            <CoinBox coinData={this.state.dash_prices} title="Dash" />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
