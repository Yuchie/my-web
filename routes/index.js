var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cyber-Note Main', message: "This is Cyber-Note." });
});

module.exports = router;
