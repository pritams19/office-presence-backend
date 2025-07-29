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

// Protect all /api routes
app.use('/api', verifyToken);

// Protected routes
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/presence', require('./routes/presence.routes'));

// Global error handler middleware (to be added later)
// app.use(errorHandler);

module.exports = app;
