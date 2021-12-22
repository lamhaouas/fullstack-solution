const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.route')

const app = express()
// middlewares
app.use(bodyParser.json())
app.use(express.json())
// routes
app.use('/api', userRoutes)
module.exports = app;