const express = require('express');

const cors = require('cors');
require('dotenv').config();

// Start express app
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/api'));

module.exports = app;
