import React, { Component } from 'react';
import HistoryBox from './HistoryBox';
import { fetchSavedData } from '../utils/DataService';

class PriceHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eth_price_history: [],
      ltc_price_history: [],
      dash_price_history: []
    }
  }

  componentDidMount() {
    fetchSavedData()
      .then(response => {
        var ETH_data = response["data"].filter((price) => { return price["coin"] == "ETH" });
        var LTC_data = response["data"].filter((price) => { return price["coin"] == "LTC" });
        var DASH_data = response["data"].filter((price) => { return price["coin"] == "DASH" });

        this.setState({
          eth_price_history: this.state.eth_price_history.concat(ETH_data),
          ltc_price_history: this.state.ltc_price_history.concat(LTC_data),
          dash_price_history: this.state.dash_price_history.concat(DASH_data)
        });
      })
  }

  render() {
    return (
      <div className="section-container flex-container">
        <div className="section-header">Top 10 Recorded Exchange Lows</div>
        <div className="price-containers flex-container">
          <HistoryBox priceHistory={this.state.eth_price_history} title="Ethereum" />
          <HistoryBox priceHistory={this.state.ltc_price_history} title="Litecoin" />
          <HistoryBox priceHistory={this.state.dash_price_history} title="Dash" />
        </div>
      </div>
    );
  }
}

export default PriceHistory;
