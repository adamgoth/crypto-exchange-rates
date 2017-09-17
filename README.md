# Crypto Exchange Price Comparisons (Ethereum, Litecoin, Dash)

![](https://i.gyazo.com/53051fa4182cab35501160595ce85922.png)

To get started:
* Clone repo
* From project directory, run `npm install`
* Run `npm start` to start client
* In another terminal tab, run `node server` to start express API backend (price history section will not work without this running)

The first section displays current Bitcoin exchange rates for Ethereum, Litecoin, and Dash from three different sources (CoinCap, Poloniex, Kraken)

Rates are listed from lowest to highest

Each time the app is rendered, current exchange rates are logged in a MongoDB database

The second section displays the lowest recorded exchange rates stored in the database for each coin
