import axios from 'axios';

export function fetchCoincapData() {
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

export function fetchPoloniexData() {
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

export function fetchKrakenData() {
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
