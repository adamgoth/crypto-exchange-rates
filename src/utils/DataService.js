import axios from 'axios';

function saveToDatabase(coin, exchange, price) {
  axios.post('http://localhost:3001/api', {coin, exchange, price})
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function fetchSavedData() {
  axios.get('http://localhost:3001/api')
    .then((response) => {
      var ETH_data = response["data"].filter((price) => { return price["coin"] == "ETH" });
      var LTC_data = response["data"].filter((price) => { return price["coin"] == "LTC" });
      var DASH_data = response["data"].filter((price) => { return price["coin"] == "DASH" });

      this.setState({
        eth_price_history: this.state.eth_price_history.concat(ETH_data),
        ltc_price_history: this.state.ltc_price_history.concat(LTC_data),
        dash_price_history: this.state.dash_price_history.concat(DASH_data)
      });

      console.log(this.state);
    })
    .catch((error) => {
      console.log(error);
    })
}

export function fetchCoincapData() {
  axios.get('http://www.coincap.io/page/ETH')
    .then((response) => {
      this.setState({ eth_prices: this.state.eth_prices.concat({ "exchange": "CoinCap", "price": response["data"]["price_btc"].toString() }) });
      saveToDatabase("ETH", "CoinCap", response["data"]["price_btc"].toString());
    })
    .catch((error) => {
      console.log(error);
    });

  axios.get('http://www.coincap.io/page/LTC')
    .then((response) => {
      this.setState({ ltc_prices: this.state.ltc_prices.concat({ "exchange": "CoinCap", "price": response["data"]["price_btc"].toString() }) });
      saveToDatabase("LTC", "CoinCap", response["data"]["price_btc"].toString());
    })
    .catch((error) => {
      console.log(error);
    });

  axios.get('http://www.coincap.io/page/DASH')
    .then((response) => {
      this.setState({ dash_prices: this.state.dash_prices.concat({ "exchange": "CoinCap", "price": response["data"]["price_btc"].toString() }) });
      saveToDatabase("DASH", "CoinCap", response["data"]["price_btc"].toString());
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
      });
      saveToDatabase("ETH", "Poloniex", response["data"]["BTC_ETH"]["last"]);
      saveToDatabase("LTC", "Poloniex", response["data"]["BTC_LTC"]["last"]);
      saveToDatabase("DASH", "Poloniex", response["data"]["BTC_DASH"]["last"]);
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
      });
      saveToDatabase("ETH", "Kraken", response["data"]["result"]["XETHXXBT"]["c"][0]);
      saveToDatabase("LTC", "Kraken", response["data"]["result"]["XLTCXXBT"]["c"][0]);
      saveToDatabase("DASH", "Kraken", response["data"]["result"]["DASHXBT"]["c"][0]);
    })
    .catch((error) => {
      console.log(error);
    });
}
