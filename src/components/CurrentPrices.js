import React from 'react';
import CoinBox from './CoinBox';

const CurrentPrices = ({ eth, ltc, dash }) => {
  return (
    <div className="section-container flex-container">
      <div className="section-header">Current Exchange Rates</div>
      <div className="price-containers flex-container">
        <CoinBox coinData={eth} title="Ethereum" />
        <CoinBox coinData={ltc} title="Litecoin" />
        <CoinBox coinData={dash} title="Dash" />
      </div>
    </div>
  );
}

export default CurrentPrices;
