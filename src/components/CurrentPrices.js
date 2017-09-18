import React, { Component } from 'react';
import CoinBox from './CoinBox';
import {
  fetchPoloniexData,
  fetchKrakenData,
  fetchCoincapETHData,
  fetchCoincapLTCData,
  fetchCoincapDASHData,
  saveToDatabase
} from '../utils/DataService';

class CurrentPrices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ethCurrentPrices: [],
      ltcCurrentPrices: [],
      dashCurrentPrices: []
    };
  }

  componentDidMount() {
    fetchPoloniexData()
      .then(response => {
        this.setState({
          ethCurrentPrices: this.state.ethCurrentPrices.concat({ "exchange": "Poloniex", "price": response["data"]["BTC_ETH"]["last"] }),
          ltcCurrentPrices: this.state.ltcCurrentPrices.concat({ "exchange": "Poloniex", "price": response["data"]["BTC_LTC"]["last"] }),
          dashCurrentPrices: this.state.dashCurrentPrices.concat({ "exchange": "Poloniex", "price": response["data"]["BTC_DASH"]["last"] })
        });
        saveToDatabase("ETH", "Poloniex", response["data"]["BTC_ETH"]["last"]);
        saveToDatabase("LTC", "Poloniex", response["data"]["BTC_LTC"]["last"]);
        saveToDatabase("DASH", "Poloniex", response["data"]["BTC_DASH"]["last"]);
      })
      .catch((error) => {
        console.log(error);
      });
    fetchKrakenData()
      .then(response => {
        this.setState({
          ethCurrentPrices: this.state.ethCurrentPrices.concat({ "exchange": "Kraken", "price": response["data"]["result"]["XETHXXBT"]["c"][0] }),
          ltcCurrentPrices: this.state.ltcCurrentPrices.concat({ "exchange": "Kraken", "price": response["data"]["result"]["XLTCXXBT"]["c"][0] }),
          dashCurrentPrices: this.state.dashCurrentPrices.concat({ "exchange": "Kraken", "price": response["data"]["result"]["DASHXBT"]["c"][0] })
        });
        saveToDatabase("ETH", "Kraken", response["data"]["result"]["XETHXXBT"]["c"][0]);
        saveToDatabase("LTC", "Kraken", response["data"]["result"]["XLTCXXBT"]["c"][0]);
        saveToDatabase("DASH", "Kraken", response["data"]["result"]["DASHXBT"]["c"][0]);
      })
      .catch((error) => {
        console.log(error);
      });
    fetchCoincapETHData()
      .then(response => {
        this.setState({ ethCurrentPrices: this.state.ethCurrentPrices.concat({ "exchange": "CoinCap", "price": response["data"]["price_btc"].toString() }) });
        saveToDatabase("ETH", "CoinCap", response["data"]["price_btc"].toString());
      })
      .catch((error) => {
        console.log(error);
      });
    fetchCoincapLTCData()
      .then(response => {
        this.setState({ ltcCurrentPrices: this.state.ltcCurrentPrices.concat({ "exchange": "CoinCap", "price": response["data"]["price_btc"].toString() }) });
        saveToDatabase("LTC", "CoinCap", response["data"]["price_btc"].toString());
      })
      .catch((error) => {
        console.log(error);
      });
    fetchCoincapDASHData()
      .then(response => {
        this.setState({ dashCurrentPrices: this.state.dashCurrentPrices.concat({ "exchange": "CoinCap", "price": response["data"]["price_btc"].toString() }) });
        saveToDatabase("DASH", "CoinCap", response["data"]["price_btc"].toString());
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="section-container flex-container">
        <div className="section-header">Current Exchange Rates</div>
        <div className="price-containers flex-container">
          <CoinBox coinData={this.state.ethCurrentPrices} title="Ethereum" />
          <CoinBox coinData={this.state.ltcCurrentPrices} title="Litecoin" />
          <CoinBox coinData={this.state.dashCurrentPrices} title="Dash" />
        </div>
      </div>
    );
  }
}

export default CurrentPrices;
