var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/:template', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/' + req.params.template+'.html'));

});

module.exports = router;
