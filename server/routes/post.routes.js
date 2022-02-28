const router = require('express').Router();
const userController = require('../controllers/post.controller');
const verifyToken = require('../verify-token');
const multer = require('../files-upload');

router.post('/', verifyToken, multer, userController.createPost);
router.get('/', userController.getAllPosts);
router.delete('/delete/:id', verifyToken, userController.deletePost);
router.post('/like/:id', userController.likePost);


router.post('/:id', userController.seenPost);
router.get('/unseen', userController.unSeenPosts);



module.exports = router;