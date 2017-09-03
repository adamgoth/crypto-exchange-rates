import React from 'react';
import HistoryBox from './HistoryBox';

const PriceHistory = ({ eth, ltc, dash }) => {
  return (
    <div className="section-container flex-container">
      <div className="section-header">Top 10 Recorded Exchange Lows</div>
      <div className="price-containers flex-container">
        <HistoryBox priceHistory={eth} title="Ethereum" />
        <HistoryBox priceHistory={ltc} title="Litecoin" />
        <HistoryBox priceHistory={dash} title="Dash" />
      </div>
    </div>
  );
}

export default PriceHistory;
