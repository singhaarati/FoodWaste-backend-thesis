// app.js
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const user_routes = require('./routes/user_routes')
const predictionRoutes = require('./routes/predictionRoutes');
//const { verifyUser } = require('./middlewares/auth');

const MONGODB_URL = process.env.NODE_ENV === 'test'
    ? process.env.TEST_DB_URL
    : process.env.DB_URL

mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log(`connected to ${MONGODB_URL} database server`)
    })
    .catch((err) => console.log(err))

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use('/users', user_routes)
app.use('/api/predictions', predictionRoutes);

module.exports = app
