//server dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//require scheme
var Price = require('./models/price.js');

//create instance of express
var app = express();
var PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//prevent CORS errors
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Cache-Control", "no-cache");
  next();
});

//configure connection to mongoDB (mlab)
mongoose.connect('mongodb://admin:admin@ds123084.mlab.com:23084/crypto-api-prices');
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});


//GET root
app.get('/', function(req, res) {
  res.json({ message: "Welcome to my API for IBN's code test" });
});

//GET API data
app.get('/api/', function(req, res) {
  Price.find({})
    .exec(function(err, doc){

      if(err){
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});

//POST prices
app.post('/api/', function(req, res){
  var price = new Price();
  price.coin = req.body.coin;
  price.price = req.body.price;
  price.exchange = req.body.exchange;
  price.datetime = Date.now();

  price.save(function(err) {
      if (err)
          res.send(err);

      res.json({ message: 'Price saved to database' });
  });
});

//listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
