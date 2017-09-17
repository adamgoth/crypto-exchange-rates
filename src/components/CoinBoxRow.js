import React from 'react';

const CoinBoxRow = ({exchange, price, row}) => {
  return (
    <div className="flex-container price-box">
      <div className="exchange">
        {row}. {exchange}
      </div>
      <div className="price">
        {price.substring(0, 8) + " BTC"}
      </div>
    </div>
  );
}

export default CoinBoxRow;
