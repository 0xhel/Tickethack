var express = require('express');
var router = express.Router();


const Trip = require('../models/trips');

router.get('/', async function (req, res) {
  const trips = await Trip.find();
  res.json(trips);
});

module.exports = router;
