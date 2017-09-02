import React from 'react';

const CoinBox = ({ coinData, title }) => {

  function sortByPrice(a,b) {
  if (a["price"] < b["price"])
    return -1;
  if (a["price"] > b["price"])
    return 1;
  return 0;
  }

  var data = coinData.sort(sortByPrice).map((price, i) => {
    return (
        <div className="flex-container price-box" key={i}>
          <div className="exchange">
            {price["exchange"]}
          </div>
          <div className="price">
            {price["price"].substring(0, 8) + " BTC"}
          </div>
        </div>
    );
  });

  if (coinData && coinData.length > 0) {
    return (
      <div className="price-container">
        <div className="price-header">{title}</div>
        {data}
      </div>
    )
  } else {
    return <div>Loading...</div>;
  }
}

export default CoinBox;
