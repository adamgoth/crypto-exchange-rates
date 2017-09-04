import axios from 'axios';

//fetches all saved price data
export function fetchSavedData() {
  return axios.get('http://localhost:3001/api');
}

//fetches current price data for each coin from CoinCap API
export function fetchCoincapETHData() {
  return axios.get('http://www.coincap.io/page/ETH');
}

export function fetchCoincapLTCData() {
  return axios.get('http://www.coincap.io/page/LTC');
}

export function fetchCoincapDASHData() {
  return axios.get('http://www.coincap.io/page/DASH');
}

//fetches current price data from Poloniex API
export function fetchPoloniexData() {
  return axios.get('https://poloniex.com/public?command=returnTicker');
}

//fetches current price data from Kraken API
export function fetchKrakenData() {
  return axios.get('https://api.kraken.com/0/public/Ticker?pair=ETHXBT,LTCXBT,DASHXBT');
}

//saves prices to database everytime it's fetched
export function saveToDatabase(coin, exchange, price) {
  axios.post('http://localhost:3001/api', {coin, exchange, price})
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
