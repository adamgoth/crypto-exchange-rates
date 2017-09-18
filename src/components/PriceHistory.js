import React, { Component } from 'react';
import HistoryBox from './HistoryBox';
import { fetchSavedData } from '../utils/DataService';

class PriceHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ethPriceHistory: [],
      ltcPriceHistory: [],
      dashPriceHistory: []
    }
  }

  componentDidMount() {
    fetchSavedData()
      .then(response => {
        var ethData = response["data"].filter((price) => { return price["coin"] === "ETH" });
        var ltcData = response["data"].filter((price) => { return price["coin"] === "LTC" });
        var dashData = response["data"].filter((price) => { return price["coin"] === "DASH" });

        this.setState({
          ethPriceHistory: this.state.ethPriceHistory.concat(ethData),
          ltcPriceHistory: this.state.ltcPriceHistory.concat(ltcData),
          dashPriceHistory: this.state.dashPriceHistory.concat(dashData)
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="section-container flex-container">
        <div className="section-header">Top 10 Recorded Exchange Lows</div>
        <div className="price-containers flex-container">
          <HistoryBox priceHistory={this.state.ethPriceHistory} title="Ethereum" />
          <HistoryBox priceHistory={this.state.ltcPriceHistory} title="Litecoin" />
          <HistoryBox priceHistory={this.state.dashPriceHistory} title="Dash" />
        </div>
      </div>
    );
  }
}

export default PriceHistory;
