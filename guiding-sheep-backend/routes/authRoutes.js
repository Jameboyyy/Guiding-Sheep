const express = require('express');
const { checkJwt } = require('../config/auth0');

const router = express.Router();

// Route to handle user login via Auth0 (redirects, tokens, etc. managed by Auth0)
router.get('/login', (req, res) => {
    res.send('Redirect to Auth0 login page');
});

// Protected route to get user profile information
router.get('/profile', checkJwt, (req, res) => {
    res.send({
        message: 'User profile information',
        user: req.user,
    });
});

// Public route for logging out (Auth0 handles most of this)
router.get('/logout', (req, res) => {
    res.send('Redirect to Auth0 logout');
});

module.exports = router;
