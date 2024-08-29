require('dotenv').config()
const express = require('express')

const app = require('./src/app');

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello from Guiding Sheep!')
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});