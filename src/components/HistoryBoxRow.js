import React from 'react';

const HistoryBoxRow = ({exchange, price, datetime}) => {

  return (
    <div className="flex-container history-box" key={datetime}>
      <div className="history-exchange">
        {exchange}
      </div>
      <div className="history-price">
        {price.substring(0, 8) + " BTC"}
      </div>
      <div className="history-date">
        {datetime.substring(0,10)} {datetime.substring(11,19)}
      </div>
    </div>
  );
}

export default HistoryBoxRow;
