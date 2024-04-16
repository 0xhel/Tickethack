var express = require('express');
var router = express.Router();

const Cart = require('../models/carts');

router.post('/', (req, res) => {

    const newCart = new Cart({
        id: req.body.id
    })
    newCart.save().then(saved => {
        res.json({ result: true, trip: saved })
    })
})

router.get('/', (req, res) => {
    Cart.find()
        .populate('trips')
        .then(carts => {
            res.json({ result: true, carts })
        })

})

router.delete('/:position', (req, res) => {
    Cart.splice(req.params.position, 1);
    res.json({ result: true, cartsList: Cart });
});


module.exports = router;
