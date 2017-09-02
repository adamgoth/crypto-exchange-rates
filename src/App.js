import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CoinBox from './components/CoinBox';

import axios from 'axios';

class App extends Component {

//methods for fetching API data
  fetchCoincapData() {
    axios.get('http://www.coincap.io/page/ETH')
      .then((response) => {
        this.setState({ eth_prices: this.state.eth_prices.concat({ "exchange": "CoinCap", "price": response["data"]["price_btc"].toString() }) })
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get('http://www.coincap.io/page/LTC')
      .then((response) => {
        this.setState({ ltc_prices: this.state.ltc_prices.concat({ "exchange": "CoinCap", "price": response["data"]["price_btc"].toString() }) })
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get('http://www.coincap.io/page/DASH')
      .then((response) => {
        this.setState({ dash_prices: this.state.dash_prices.concat({ "exchange": "CoinCap", "price": response["data"]["price_btc"].toString() }) })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  fetchPoloniexData() {
    axios.get('https://poloniex.com/public?command=returnTicker')
      .then((response) => {
        this.setState({
          eth_prices: this.state.eth_prices.concat({ "exchange": "Poloniex", "price": response["data"]["BTC_ETH"]["last"] }),
          ltc_prices: this.state.ltc_prices.concat({ "exchange": "Poloniex", "price": response["data"]["BTC_LTC"]["last"] }),
          dash_prices: this.state.dash_prices.concat({ "exchange": "Poloniex", "price": response["data"]["BTC_DASH"]["last"] })
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  fetchKrakenData() {
    axios.get('https://api.kraken.com/0/public/Ticker?pair=ETHXBT,LTCXBT,DASHXBT')
      .then((response) => {
        this.setState({
          eth_prices: this.state.eth_prices.concat({ "exchange": "Kraken", "price": response["data"]["result"]["XETHXXBT"]["c"][0] }),
          ltc_prices: this.state.ltc_prices.concat({ "exchange": "Kraken", "price": response["data"]["result"]["XLTCXXBT"]["c"][0] }),
          dash_prices: this.state.dash_prices.concat({ "exchange": "Kraken", "price": response["data"]["result"]["DASHXBT"]["c"][0] })
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

//constructor
  constructor(props) {
    super(props);

    this.state = {
      eth_prices: [],
      ltc_prices: [],
      dash_prices: []
    };

    this.fetchCoincapData()
    this.fetchPoloniexData()
    this.fetchKrakenData()
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
