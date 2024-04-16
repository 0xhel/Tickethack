var express = require('express');
var router = express.Router();

const Trip = require('../models/trips');

router.post('/search', (req, res) => {
  Trip.find({ departure: req.body.departure, arrival: req.body.arrival }).then(trips => {
    const matchTrips = trips.filter(trip => {
      console.log(new Date(req.body.date))
      return trip.date >= new Date(req.body.date)
    })
    res.json({ trips: matchTrips })
  })

});


module.exports = router;
