const router = require('express').Router();
const userController = require('../controllers/post.controller');
const verifyToken = require('../verify-token');
const multer = require('../files-upload');

router.post('/',multer, userController.createPost);
router.get('/', userController.getAllPosts);
router.delete('/delete',  userController.deletePost);
router.post('/like', userController.likePost);


module.exports = router;