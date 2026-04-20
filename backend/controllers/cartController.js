// In-memory cart store (keyed by session)
const carts = {};

const getCart = (req, res) => {
  const sessionId = req.headers['x-session-id'] || 'default';
  const cart = carts[sessionId] || [];
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  res.json({ success: true, cart, total, itemCount: cart.reduce((s, i) => s + i.quantity, 0) });
};

const addToCart = (req, res) => {
  const sessionId = req.headers['x-session-id'] || 'default';
  if (!carts[sessionId]) carts[sessionId] = [];
  const { productId, quantity = 1 } = req.body;
  const products = require('../models/products');
  const product = products.find(p => p.id === parseInt(productId));
  if (!product) return res.status(404).json({ success: false, message: 'Product not found' });

  const existing = carts[sessionId].find(i => i.id === product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    carts[sessionId].push({ ...product, quantity });
  }
  res.json({ success: true, message: 'Added to cart', cart: carts[sessionId] });
};

const updateCart = (req, res) => {
  const sessionId = req.headers['x-session-id'] || 'default';
  const { productId, quantity } = req.body;
  if (!carts[sessionId]) return res.status(404).json({ success: false, message: 'Cart not found' });

  if (quantity <= 0) {
    carts[sessionId] = carts[sessionId].filter(i => i.id !== parseInt(productId));
  } else {
    const item = carts[sessionId].find(i => i.id === parseInt(productId));
    if (item) item.quantity = quantity;
  }
  res.json({ success: true, cart: carts[sessionId] });
};

const clearCart = (req, res) => {
  const sessionId = req.headers['x-session-id'] || 'default';
  carts[sessionId] = [];
  res.json({ success: true, message: 'Cart cleared' });
};

const checkout = (req, res) => {
  const sessionId = req.headers['x-session-id'] || 'default';
  const cart = carts[sessionId] || [];
  if (cart.length === 0) return res.status(400).json({ success: false, message: 'Cart is empty' });

  const order = {
    orderId: 'ORD-' + Date.now(),
    items: cart,
    total: cart.reduce((s, i) => s + i.price * i.quantity, 0),
    status: 'confirmed',
    placedAt: new Date().toISOString()
  };

  carts[sessionId] = [];
  res.json({ success: true, message: 'Order placed!', order });
};

module.exports = { getCart, addToCart, updateCart, clearCart, checkout };
