const Validator = require('fastest-validator');
const models = require('../models');
const fs = require('fs');
const posts = require('../models/posts');
const {
    Op
} = require('@sequelize/core');
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

    models.posts.destroy({
        where: {
            id: req.body.id,
            username: req.body.username
        }
    }).then(result => {
        if (result ) {
            const filename = req.body.multimediaUrl.split()[0]
            console.log(req.body.multimediaUrl)
            fs.unlink(filename, () => {

                res.status(200).json({
                    message: 'post deleted successfully'

                })
            })
        }
        if (result === null) {
            res.status(200).json({
                message: 'You can not delete this post'

            })
        }
    }).catch(err => {
        console.log(err)
    })



}

//like a post 
exports.likePost = (req, res) => {
    const likedPost = {
        username: req.body.username,
        postId: req.body.postId
    }
    console.log(likedPost)
    models.likes.findAll({
            where: {
                postId: req.body.postId,
                username: req.body.username
            }
        })
        .then(result => {

            if (result == false) {
                models.likes.create(likedPost).then(result => {
                    res.status(200).json({
                        message: 'post liked!'
                    })
                    models.posts.increment('likes', {
                        by: 1,
                        where: {
                            id: req.body.postId,
                        }
                    }).then(res => {
                        console.log('inserted')
                    })

                })


            } else {
                res.status(200).json({
                    message: 'Post already liked!'
                })

            }
        })


}

//seen posts 
exports.seenPost = (req, res) => {
    const seenPost = {
        username: req.body.username,
        postId: req.body.postId,

    }
    models.unread.findAll({
        where: {
            postId: req.body.postId,
            username: req.body.username
        }
    }).then(result => {
        if (result == false) {
            models.unread.create(seenPost).then(result => {
                res.status(200).json({
                    message: 'Seen post'
                })
            })
        }
    }).catch(err => {
        console.log(err)
    })
}
// get unseen posts
exports.unSeenPosts = (req, res) => {

    models.unread.findAll({
       


        })

        .then(result => {
            res.status(200).json(result)


        }).catch(error => {
            console.log(error)
            res.status(500).json({
                error,

                message: 'something went wrong!'
            })
        });
}