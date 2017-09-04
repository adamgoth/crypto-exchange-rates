import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrentPrices from './components/CurrentPrices';
import PriceHistory from './components/PriceHistory';
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

  componentDidMount() {
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
          <CurrentPrices
            eth={this.state.eth_current_prices}
            ltc={this.state.ltc_current_prices}
            dash={this.state.dash_current_prices}
            />
          <PriceHistory
            eth={this.state.eth_price_history}
            ltc={this.state.ltc_price_history}
            dash={this.state.dash_price_history}
            />
        </div>
      </div>
    );
  }
}

export default App;
