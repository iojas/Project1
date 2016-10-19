var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/About', function(req, res, next) {
  res.render('About', { title: 'Express' });
});


module.exports = router;
