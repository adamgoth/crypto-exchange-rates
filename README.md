# Crypto Exchange Price Comparisons (Ethereum, Litecoin, Dash)

![](https://i.gyazo.com/53051fa4182cab35501160595ce85922.png)

To get started:
* Clone repo
* From project directory, run `npm install`
* Run `npm start` to start client
* In another terminal tab, run `node server` to start express API backend (price history section will not work without this running)

The top section displays current exchange prices for Ethereum, Litecoin, and Dash

Prices are listed from lowest to highest

Each time the app is rendered, current prices are logged in a MongoDB database

The second section displays the lowest recorded prices for each coin

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
