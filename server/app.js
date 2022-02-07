const express = require('express');
let path = require("path");
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.route');
const postRoutes = require('./routes/post.routes');
const cors = require('cors');

const app = express();
// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
// routes
app.use('/user', userRoutes);
app.use('/posts', postRoutes);
app.use('/uploads', express.static(path.join(__dirname, "uploads")));

module.exports = app;