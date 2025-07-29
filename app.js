const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('Office Presence API is running'));

// Mount route modules here
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/presence', require('./routes/presence.routes'));

// Global error handler middleware (to be added later)
// app.use(errorHandler);

module.exports = app;
