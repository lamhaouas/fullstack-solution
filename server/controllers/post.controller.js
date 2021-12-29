const models = require('../models')
module.exports.createPost = (req, res) => {
    const post = {
        imageUrl: req.body.imageUrl,
        video: req.body.video,
        content: req.body.content,
        userId: 1
    }
    models.Post.create(post).then(result => {
        res.status(201).json({
            message: 'Post created'
        })
    }).catch(error => {
        res.status(500).json({
            message: 'something went wrong'
        })
    })
}