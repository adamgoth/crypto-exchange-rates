//mongoose dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create schema for prices
var PriceSchema = new Schema({
  price: {
    type: String,
  },
  exchange: {
    type: String,
  },
  datetime: {
    type: Date,
  }
});

//create model
var Price = mongoose.model('Price', PriceSchema);

module.exports = Price;
