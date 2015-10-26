var express = require('express');
var router = express.Router();
var Cartoon = require('../models/cartoons.js');


router.get('/cartoons', function(req, res, next) {
  Cartoon.find(function(err, cartoons) {
      if (err) {
        res.json({'message': err});
      } else {
        res.json(cartoons);
      }
  });
});

router.post('/cartoons', function(req, res, next) {
  var newCartoon = new Cartoon ({
    name: req.body.name,
    character: req.body.character
  });
  newCartoon.save(function(err, cartoons) {
    if (err) {
      res.json({'message': err});
    }
    else {
      res.json(cartoons);
    }
  });
});






module.exports = router;
