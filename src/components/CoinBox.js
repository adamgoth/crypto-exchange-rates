import React from 'react';
import CoinBoxRow from './CoinBoxRow';

const CoinBox = ({ coinData, title }) => {

  //orders array of prices from lowest to highest
  function sortByPrice(a,b) {
  if (a["price"] < b["price"])
    return -1;
  if (a["price"] > b["price"])
    return 1;
  return 0;
  }

  //sorts array of current price data lowest to highest and maps to a component
  var data = coinData.sort(sortByPrice).map((price, i) => {
    return <CoinBoxRow exchange={price["exchange"]} price={price["price"]} row={i+1} key={i} />;
  });


  //if no data, return loading div
  if (coinData && coinData.length > 0) {
    return (
      <div className="price-container">
        <div className="price-header">{title}</div>
        {data}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default CoinBox;
