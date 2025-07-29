const express = require('express');
const cors = require('cors');
const verifyToken = require('./middleware/auth.middleware');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('Office Presence API is running'));

// Public routes
app.use('/api/auth', require('./routes/auth.routes'));

// Selectively protect /api/users (allow POST without token)
app.use('/api/users', (req, res, next) => {
  if (req.method === 'POST') return next();
  verifyToken(req, res, next);
}, require('./routes/user.routes'));

// Fully protect /api/presence
app.use('/api/presence', verifyToken, require('./routes/presence.routes'));

// Global error handler middleware (to be added later)
// app.use(errorHandler);

module.exports = app;
