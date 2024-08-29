const express = require('express');

const router = express.Router();

// Public route for general information
router.get('/info', (req, res) => {
    res.send({
        message: 'Welcome to Guiding Sheep!',
        info: 'This is a public route that anyone can adess.'
    });
});

module.exports = router;
