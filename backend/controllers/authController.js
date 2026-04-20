// In-memory user store (swap with MongoDB/PostgreSQL in production)
const users = [];

const register = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ success: false, message: 'All fields required' });
  if (users.find(u => u.email.toLowerCase() === email.toLowerCase()))
    return res.status(409).json({ success: false, message: 'Email already registered' });
  if (password.length < 6)
    return res.status(400).json({ success: false, message: 'Password must be at least 6 characters' });

  const user = { id: Date.now(), name, email, password: Buffer.from(password).toString('base64'), createdAt: new Date() };
  users.push(user);
  const { password: _, ...safeUser } = user;
  res.status(201).json({ success: true, message: 'Account created', user: safeUser, token: `tok_${user.id}` });
};

const login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ success: false, message: 'Email and password required' });

  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user) return res.status(404).json({ success: false, message: 'No account found with this email' });
  if (user.password !== Buffer.from(password).toString('base64'))
    return res.status(401).json({ success: false, message: 'Incorrect password' });

  const { password: _, ...safeUser } = user;
  res.json({ success: true, message: 'Login successful', user: safeUser, token: `tok_${user.id}` });
};

const getMe = (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ success: false, message: 'No token provided' });
  const userId = parseInt(token.replace('tok_', ''));
  const user = users.find(u => u.id === userId);
  if (!user) return res.status(404).json({ success: false, message: 'User not found' });
  const { password: _, ...safeUser } = user;
  res.json({ success: true, user: safeUser });
};

module.exports = { register, login, getMe };
