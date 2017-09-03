import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CoinBox from './components/CoinBox';
import HistoryBox from './components/HistoryBox';
import { fetchCoincapData, fetchPoloniexData, fetchKrakenData, fetchSavedData } from './utils/DataService';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eth_current_prices: [],
      ltc_current_prices: [],
      dash_current_prices: [],
      eth_price_history: [],
      ltc_price_history: [],
      dash_price_history: []
    };
  }

  componentWillMount() {
    //fetch live price data and database data
    fetchCoincapData.call(this);
    fetchPoloniexData.call(this);
    fetchKrakenData.call(this);
    fetchSavedData.call(this);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div id="main-container" className="flex-container">
          <div className="section-header">Current Exchange Rates</div>
          <div className="price-containers flex-container">
            <CoinBox coinData={this.state.eth_current_prices} title="Ethereum" />
            <CoinBox coinData={this.state.ltc_current_prices} title="Litecoin" />
            <CoinBox coinData={this.state.dash_current_prices} title="Dash" />
          </div>
          <div className="section-header">Recorded Exchange Lows</div>
          <div className="price-containers flex-container">
            <HistoryBox priceHistory={this.state.eth_price_history} title="Ethereum" />
            <HistoryBox priceHistory={this.state.ltc_price_history} title="Litecoin" />
            <HistoryBox priceHistory={this.state.dash_price_history} title="Dash" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
