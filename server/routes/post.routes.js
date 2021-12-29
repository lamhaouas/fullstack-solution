const router = require('express').Router();
const userController = require('../controllers/post.controller')


router.post('/posts',userController.createPost),


module.exports = router;