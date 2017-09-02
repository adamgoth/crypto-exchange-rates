import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {

//methods for fetching API data
  fetchCoincapData() {
    axios.get('http://www.coincap.io/page/ETH')
      .then((response) => {
        this.setState({ eth_prices: this.state.eth_prices.concat({ "exchange": "coincap", "price": response["data"]["price_btc"].toString() }) })
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get('http://www.coincap.io/page/LTC')
      .then((response) => {
        this.setState({ ltc_prices: this.state.ltc_prices.concat({ "exchange": "coincap", "price": response["data"]["price_btc"].toString() }) })
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get('http://www.coincap.io/page/DASH')
      .then((response) => {
        this.setState({ dash_prices: this.state.dash_prices.concat({ "exchange": "coincap", "price": response["data"]["price_btc"].toString() }) })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  fetchPoloniexData() {
    axios.get('https://poloniex.com/public?command=returnTicker')
      .then((response) => {
        this.setState({
          eth_prices: this.state.eth_prices.concat({ "exchange": "poloniex", "price": response["data"]["BTC_ETH"]["last"] }),
          ltc_prices: this.state.ltc_prices.concat({ "exchange": "poloniex", "price": response["data"]["BTC_LTC"]["last"] }),
          dash_prices: this.state.dash_prices.concat({ "exchange": "poloniex", "price": response["data"]["BTC_DASH"]["last"] })
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
          eth_prices: this.state.eth_prices.concat({ "exchange": "kraken", "price": response["data"]["result"]["XETHXXBT"]["c"][0] }),
          ltc_prices: this.state.ltc_prices.concat({ "exchange": "kraken", "price": response["data"]["result"]["XLTCXXBT"]["c"][0] }),
          dash_prices: this.state.dash_prices.concat({ "exchange": "kraken", "price": response["data"]["result"]["DASHXBT"]["c"][0] })
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

  consoleShit() {
    console.log(this.state);
  }

  sortByPrice(a,b) {
  if (a["price"] < b["price"])
    return -1;
  if (a["price"] > b["price"])
    return 1;
  return 0;
}

  render() {
    var ETHprices = this.state.eth_prices.sort(this.sortByPrice).map((price, i) => {
      return (
        <div className="flex-container price-box" key={i}>
          <div className="exchange">
            {price["exchange"]}
          </div>
          <div className="price">
            {price["price"].substring(0, 8)}
          </div>
        </div>
      );
    });

    var LTCprices = this.state.ltc_prices.sort(this.sortByPrice).map((price, i) => {
      return (
        <div className="flex-container price-box" key={i}>
          <div className="exchange">
            {price["exchange"]}
          </div>
          <div className="price">
            {price["price"].substring(0, 8)}
          </div>
        </div>
      );
    })

    var DASHprices = this.state.dash_prices.sort(this.sortByPrice).map((price, i) => {
      return (
        <div className="flex-container price-box" key={i}>
          <div className="exchange">
            {price["exchange"]}
          </div>
          <div className="price">
            {price["price"].substring(0, 8)}
          </div>
        </div>
      );
    })

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div id="main-container" className="flex-container">
          <div id="price-containers" className="flex-container">
            <div className="price-container">
              <div className="flex-container price-header">Ethereum (BTC)</div>
              {ETHprices}
            </div>
            <div className="price-container">
              <div className="flex-container price-header">Litecoin (BTC)</div>
              {LTCprices}
            </div>
            <div className="price-container">
              <div className="flex-container price-header">Dash (BTC)</div>
              {DASHprices}
            </div>
          </div>
        </div>
        {this.consoleShit()}
      </div>

    );
  }
}

export default App;
