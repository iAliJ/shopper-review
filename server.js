const express = require('express');
require('dotenv').config();

const app = express();

// connect to db
const db = require('./config/db');

// Setup server
const PORT = process.env.PORT;
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});