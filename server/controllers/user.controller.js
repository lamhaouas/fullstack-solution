const models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Validator = require('fastest-validator');

// register new user 
exports.signUp = (req, res) => {

    //check if the user exist in db
    models.users.findOne({
        where: {
            email: req.body.email
        }
    }).then(result => {
        if (result) {
            res.json({
                message: 'Email already used',
            });
        } else {
            // hash the password
            const saltRounds = 10;
            const password = req.body.password;
            bcrypt.genSalt(saltRounds, function (err, salt) {
                bcrypt.hash(password, salt, function (err, hash) {
                    const user = {

                        email: req.body.email,
                        username: req.body.username,
                        password: hash,
                    }
                    //validation
                    const schema = {
                        email: {
                            type: 'email',
                            optional: false,
                            max: '200'
                        },
                        username: {
                            type: 'string',
                            optional: false,
                            max: '500',
                        },
                        password: {
                            type: 'string',
                            optional: false,
                        },
                    }

                    const validation = new Validator();
                    const responceValidation = validation.validate(user, schema);
                    if (responceValidation !== true) {
                        return res.json({
                            message: 'Please enter a valid Email, Username and Password',
                            errors: responceValidation
                        })
                    }

                    models.users.create(user).then(result => {
                        res.status(201).json({
                            message: 'Account created successfully',
                        });
                    }).catch(error => {
                        res.status(500).json({
                            message: 'something went wrong!',
                        });
                    });


                })
            })

        }
    }).catch(error => {
        res.json({
            message: "Something went wrong!",

        })
    });
}

//log in a user
exports.logIn = (req, res) => {
    const user = {
        username: req.body.username,

    };
    models.users.findOne({
        where: {
            username: req.body.username
        }
    }).then(result => {
        if (result === null) {
            res.json({
                message: "Please verify your Username",
                signIn: false
            });
        } else {
            console.log
            bcrypt.compare(req.body.password, result.password, function (err, result) {
                if (result) {
                    //assign a token
                    const token = jwt.sign({
                        username: result.username,
                    }, process.env.JWT_KEY, function (err, token) {

                        res.status(200).json({

                            message: "Authenticated",
                            token: token,
                            username: user.username,
                            signIn: true

                        });
                    });
                } else {
                    res.json({
                        message: "Wrong credentials",
                        signIn: false
                    });
                }
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            signIn: false

        });
    });
}

// Account deletion
exports.deleteUser = (req, res) => {
    const username = req.body.username

    models.users.destroy({
        where: {
            username: req.body.username
        }
    }).then(
        res.json({
            message: 'user deleted',
        })
    ).catch(err => {
        console.log(err)
    })
}