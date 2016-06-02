var express = require('express');
var fs = require('fs');
var path = require('path');

var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Reading the JSON file
router.get('/getJSON', function (req, res) {
  console.log("Inside getJSON");
  var content = fs.readFileSync('data/input.json');
  res.json(content.toString());
});

module.exports = router;
