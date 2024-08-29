const express = require('express');
const authRoutes = require('./routes/authRoutes');
const publicRoutes = require('./routes/publicRoutes');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Use the auth routes
app.use('/api/auth', authRoutes);
app.use('/api/public', publicRoutes);

module.exports = app;