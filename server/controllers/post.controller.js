const Validator = require('fastest-validator');
const models = require('../models');
const path = require('path');

// create posts
exports.createPost = (req, res) => {

    const post = {
        content: req.body.content,
        multimediaUrl: req.file.path,
        username: req.body.username

    }
    console.log(post)
    //data validation
    const schema = {
        multimediaUrl: {
            type: 'string',
            max: '200',
            optional: false
        },
        content: {
            type: 'string',
            max: '500',
        },
        username: {
            type: 'string',
            optional: true,
        }
    }

    const validation = new Validator();
    const responceValidation = validation.validate(post, schema);
    if (responceValidation !== true) {
        return res.status(400).json({
            message: 'Validation failed',
            errors: responceValidation
        })
    }

    // save posts to db
    models.posts.create(post).then(result => {
        res.status(201).json({
            message: 'Post created!',
            post: result
        })
    }).catch(error => {
        res.status(500).json({
            message: 'something went wrong'
        })
    })
}

// get all posts
exports.getAllPosts = (req, res) => {
    models.posts.findAll().then(result => {
        res.status(200).json(result)
    }).catch(error => {
        res.status(500).json({
            message: 'something went wrong!'
        })
    });
}

// delete a post
exports.deletePost = (req, res) => {
    const username = req.body.username
if(username = localStorage.getItem('username')){
    models.posts.destroy({
        where: {
          username : req.body.username
        }
    }).then(result => {
        res.status(200).json({
            message: 'post deleted successfully'

        })
    }).catch(error => {
        res.status(500).json({
            message: 'something went wrong!'
        })
    })
}} 
