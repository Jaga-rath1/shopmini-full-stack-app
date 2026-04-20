const express = require('express');
const router = express.Router();
const { getCart, addToCart, updateCart, clearCart, checkout } = require('../controllers/cartController');

router.get('/', getCart);
router.post('/add', addToCart);
router.put('/update', updateCart);
router.delete('/clear', clearCart);
router.post('/checkout', checkout);

module.exports = router;
