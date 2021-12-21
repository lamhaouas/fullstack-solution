const express = require('express');
const bodyParser = require('body-parser');
const app = express()
// middlewares
app.use(bodyParser.json())
app.use(express.json())
// routes
module.exports = app;