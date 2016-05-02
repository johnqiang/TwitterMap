var express = require('express');
var router = express.Router();
var config = require('../config');
var Twit = require('twit');
var T = new Twit({
  consumer_key:         config.consumer_key,
  consumer_secret:      config.consumer_secret,
  access_token:         config.access_token,
  access_token_secret:  config.access_token_secret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/search', function(req, res, next) {
	T.get('search/tweets', { q: 'superbowl since:2015-07-11', count: 2, result_type: 'popular'}, function(err, data, response) {
  		res.send(data);
	})
})

module.exports = router;
