import React from 'react';
import HistoryBoxRow from './HistoryBoxRow';

const HistoryBox = ({ priceHistory, title }) => {

  //orders array of prices from lowest to highest
  function sortByPrice(a,b) {
  if (a["price"] < b["price"])
    return -1;
  if (a["price"] > b["price"])
    return 1;
  return 0;
  }

  //takes 10 lowest prices from price history array and maps to a component
  var data = priceHistory.sort(sortByPrice).slice(0, 10).map((price, i) => {
    return <HistoryBoxRow exchange={price["exchange"]} price={price["price"]} datetime={price["datetime"]} key={i} />;
  });

  //if no data, return loading div
  if (priceHistory && priceHistory.length > 0) {
    return (
      <div className="history-container">
        <div className="history-header">{title}</div>
        {data}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default HistoryBox;
