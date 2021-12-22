const router = require('express').Router();
const userController = require('../controllers/user.controller')


router.post('/register', userController.signUp)

module.exports = router;