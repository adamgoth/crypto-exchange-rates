import React from 'react';

const HistoryBox = ({ priceHistory, title }) => {

  function sortByPrice(a,b) {
  if (a["price"] < b["price"])
    return -1;
  if (a["price"] > b["price"])
    return 1;
  return 0;
  }

  var data = priceHistory.sort(sortByPrice).slice(0, 10).map((price, i) => {
    return (
        <div className="flex-container history-box" key={i}>
          <div className="history-exchange">
            {price["exchange"]}
          </div>
          <div className="history-price">
            {price["price"].substring(0, 8) + " BTC"}
          </div>
          <div className="history-date">
            {price["datetime"].substring(0,10)}, {price["datetime"].substring(11,19)}
          </div>
        </div>
    );
  });

  if (priceHistory && priceHistory.length > 0) {
    return (
      <div className="history-container">
        <div className="history-header">{title}</div>
        {data}
      </div>
    )
  } else {
    return <div>Loading...</div>;
  }
}

export default HistoryBox;
