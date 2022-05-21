var express = require('express');
const fs = require('fs');
var productObject = require('./products.json')

var router = express.Router();

router.get('/', function(req, res, next) {
    res.send(productObject);
});

module.exports = router;