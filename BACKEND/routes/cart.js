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

router.delete('/:cartId', (req, res) => {
    const cartId = req.params.cartId;

    Cart.deleteOne({ _id: cartId })
        .then(deletedDoc => {
            if (deletedDoc.deletedCount > 0) {
                Cart.find()
                    .then(carts => {
                        res.json({ result: true, message: 'Cart deleted successfully', carts: carts });
                    });
            } else {
                res.json({ result: false, error: 'Cart item not found' });
            }
        });
});

module.exports = router;
