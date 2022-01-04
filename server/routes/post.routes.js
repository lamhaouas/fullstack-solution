const router = require('express').Router();
const userController = require('../controllers/post.controller')

router.post('/', userController.createPost);
router.get('/', userController.getAllPosts);
router.get('/:id', userController.getPost);
router.patch('/:id', userController.updatePost);
router.delete('/:id', userController.deletePost);

module.exports = router;