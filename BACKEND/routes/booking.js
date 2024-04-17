var express = require('express');
var router = express.Router();

const Booking = require('../models/trips');

router.post('/', (req, res) => {

    const newBooking = new Booking({
        booking: req.body.id
    })
    newBooking.save().then(saved => {
        res.json({ result: true, booking: saved })
    })
})

router.get('/', (req, res) => {
    Booking.find()
        .populate('trip')
        .then(carts => {
            res.json({ result: true, carts })
        })

})

module.exports = router;