const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.route');
const postRoutes = require('./routes/post.routes');
const cors = require('cors');

const app = express();
// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
// routes
app.use('/user', userRoutes);
app.use('/posts', postRoutes);
module.exports = app;