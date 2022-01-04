const models = require('../models');

// create posts
exports.createPost = (req, res) => {
    const post = {
        multimediaUrl: req.body.multimediaUrl,
        content: req.body.content,
        userId: req.body.userId
    }
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
// get a post
exports.getPost = (req, res) => {
    const id = req.params.id;
    models.posts.findByPk(id).then(result => {
        res.status(200).json({
            result
        })
    }).catch(error => {
        res.status(500).json({
            message: 'something went wrong!'
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
// update a post
exports.updatePost = (req, res) => {
    const id = req.params.id;
    const updatedPost = {
        multimediaUrl: req.body.multimediaUrl,
        content: req.body.content,
    }
    const userId = 1;
    models.posts.update(updatedPost, {
        where: {
            id: id,
            userId
        }
    }).then(result => {
        res.status(200).json({
            message: 'Post updated successfully',
            post: updatedPost
        })
    }).catch(error => {
        res.status(500).json({
            message: 'something went wrong!'
        })

    })
}

// delete a post
exports.deletePost = (req, res) => {
    const id = req.params.id;
    const userId = 1;

    models.posts.destroy({
        where: {
            id: id,
            userId: userId
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
}