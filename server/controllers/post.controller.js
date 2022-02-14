const Validator = require('fastest-validator');
const models = require('../models');
const fs = require('fs')
// create posts
exports.createPost = (req, res) => {

    const post = {
        content: req.body.content,
        multimediaUrl: req.file.path,
        username: req.body.username,
    }

    console.log(post)
    //data validation
    const schema = {
        multimediaUrl: {
            type: 'string',
            max: '200',
            optional: true
        },
        content: {
            type: 'string',
            max: '500',
            optional: false
        },
        username: {
            type: 'string',
            optional: true,
        },

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
            error,
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
            error,
            message: 'something went wrong!'
        })
    });
}

// delete a post
exports.deletePost = (req, res) => {
    const post = {
        
        id: req.body.id

    }
    console.log(post)
    models.posts.destroy({
        where: {
          
            id: req.body.id
        }
    }).then(result => {
        res.status(200).json({
            message: 'post deleted successfully'

        })
    }).catch(error => {
        res.status(500).json({

            error,
            message: 'something went wrong!'
        })
    })
}

//like a post 
exports.likePost = (req, res) => {
    const like = {
        username: req.body.username,
        postId: req.body.postId
    }

    models.likes.create(like).then(result => {
        res.status(200).json({
            message: 'post liked'

        })

    }).catch(error => {
        res.status(500).json({
            error,
            message: 'something went wrong!'
        })
    })
}