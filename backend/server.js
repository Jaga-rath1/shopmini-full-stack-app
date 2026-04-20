const express = require('express');
const cors = require('./middleware/cors');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors);
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok', message: 'ShopMini API running' }));

app.listen(PORT, () => {
  console.log(`🛍️  ShopMini backend running at http://localhost:${PORT}`);
});

module.exports = app;
