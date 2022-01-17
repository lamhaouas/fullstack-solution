const router = require('express').Router();
const userController = require('../controllers/post.controller');
const verifyToken = require('../verify-token');

router.post('/', verifyToken, userController.createPost);
router.get('/', userController.getAllPosts);
router.get('/:id', userController.getPost);
router.patch('/:id', verifyToken, userController.updatePost);
router.delete('/:id', verifyToken, userController.deletePost);

module.exports = router;