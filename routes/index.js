var express = require('express');
var router = express.Router();
var elastic = require('../elasticsearch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Twitter Map' });
});

/* GET suggestions */
router.get('/suggest/:input', function (req, res, next) {  
  elastic.getSuggestions(req.params.input).then(function (result) { res.json(result) });
});

module.exports = router;
