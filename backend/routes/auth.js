const express = require('express');
const router = express.Router();
const { register, login, getMe } = require('../controllers/authController');

router.post('/register', register);   // POST /api/auth/register
router.post('/login', login);         // POST /api/auth/login
router.get('/me', getMe);             // GET  /api/auth/me  (with Bearer token)

module.exports = router;
