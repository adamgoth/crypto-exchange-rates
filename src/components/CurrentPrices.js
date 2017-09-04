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
      eth_current_prices: [],
      ltc_current_prices: [],
      dash_current_prices: []
    };
  }

  componentDidMount() {
    fetchPoloniexData()
      .then(response => {
        this.setState({
          eth_current_prices: this.state.eth_current_prices.concat({ "exchange": "Poloniex", "price": response["data"]["BTC_ETH"]["last"] }),
          ltc_current_prices: this.state.ltc_current_prices.concat({ "exchange": "Poloniex", "price": response["data"]["BTC_LTC"]["last"] }),
          dash_current_prices: this.state.dash_current_prices.concat({ "exchange": "Poloniex", "price": response["data"]["BTC_DASH"]["last"] })
        });
        saveToDatabase("ETH", "Poloniex", response["data"]["BTC_ETH"]["last"]);
        saveToDatabase("LTC", "Poloniex", response["data"]["BTC_LTC"]["last"]);
        saveToDatabase("DASH", "Poloniex", response["data"]["BTC_DASH"]["last"]);
      });
    fetchKrakenData()
      .then(response => {
        this.setState({
          eth_current_prices: this.state.eth_current_prices.concat({ "exchange": "Kraken", "price": response["data"]["result"]["XETHXXBT"]["c"][0] }),
          ltc_current_prices: this.state.ltc_current_prices.concat({ "exchange": "Kraken", "price": response["data"]["result"]["XLTCXXBT"]["c"][0] }),
          dash_current_prices: this.state.dash_current_prices.concat({ "exchange": "Kraken", "price": response["data"]["result"]["DASHXBT"]["c"][0] })
        });
        saveToDatabase("ETH", "Kraken", response["data"]["result"]["XETHXXBT"]["c"][0]);
        saveToDatabase("LTC", "Kraken", response["data"]["result"]["XLTCXXBT"]["c"][0]);
        saveToDatabase("DASH", "Kraken", response["data"]["result"]["DASHXBT"]["c"][0]);
      });
    fetchCoincapETHData()
      .then(response => {
        this.setState({ eth_current_prices: this.state.eth_current_prices.concat({ "exchange": "CoinCap", "price": response["data"]["price_btc"].toString() }) });
        saveToDatabase("ETH", "CoinCap", response["data"]["price_btc"].toString());
      });
    fetchCoincapLTCData()
      .then(response => {
        this.setState({ ltc_current_prices: this.state.ltc_current_prices.concat({ "exchange": "CoinCap", "price": response["data"]["price_btc"].toString() }) });
        saveToDatabase("LTC", "CoinCap", response["data"]["price_btc"].toString());
      });
    fetchCoincapDASHData()
      .then(response => {
        this.setState({ dash_current_prices: this.state.dash_current_prices.concat({ "exchange": "CoinCap", "price": response["data"]["price_btc"].toString() }) });
        saveToDatabase("DASH", "CoinCap", response["data"]["price_btc"].toString());
      });
  }

  render() {
    return (
      <div className="section-container flex-container">
        <div className="section-header">Current Exchange Rates</div>
        <div className="price-containers flex-container">
          <CoinBox coinData={this.state.eth_current_prices} title="Ethereum" />
          <CoinBox coinData={this.state.ltc_current_prices} title="Litecoin" />
          <CoinBox coinData={this.state.dash_current_prices} title="Dash" />
        </div>
      </div>
    );
  }
}

export default CurrentPrices;
