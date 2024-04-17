var express = require('express');
var router = express.Router();

const Booking = require('../models/bookings');

router.post('/', (req, res) => {

    const newBooking = new Booking({
        trip: req.body.id
    })
    newBooking.save().then(saved => {
        res.json({ result: true, booking: saved })
    })
})

router.get('/', (req, res) => {
    Booking.find()
        .populate('trip')
        .then(bookings => {
            res.json({ result: true, bookings })
        })

})

module.exports = router;