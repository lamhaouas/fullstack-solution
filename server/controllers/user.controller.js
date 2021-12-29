const models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

// register new user function

exports.signUp = (req, res) => {

    //check if the user exist in db
    models.users.findOne({
        where: {
            email: req.body.email
        }
    }).then(result => {
        if (result) {
            res.status(409).json({

                message: 'Email already used'
            });
        } else {
            // hash the password
            const saltRounds = 10;
            const password = req.body.password;
            bcrypt.genSalt(saltRounds, function (err, salt) {
                const hashPassword = bcrypt.hash(password, salt, function (err, hash) {
                    const user = {
                        firstName: req.body.firstname,
                        lastName: req.body.lastname,
                        email: req.body.email,
                        userName: req.body.username,
                        password: hash,
                    }

                    models.users.create(user).then(result => {
                        res.status(201).json({
                            message: 'Account created successfully',
                        });
                    }).catch(error => {
                        res.status(500).json({

                            message: 'something went wrong!'
                        });
                    });


                })
            })

        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
        })
    });
}
// user login function
exports.logIn = (req, res) => {
    models.users.findOne({
        where: {
            email: req.body.email
        }
    }).then(result => {
        if (result === null) {
            res.status(401).json({
                message: "Wrong credentials",
            });
        } else {
            bcrypt.compare(req.body.password, result.password, function (err, result) {
                if (result) {
                    //assign a token
                    const token = jwt.sign({
                        email: result.email,
                        userId: result.id
                    }, process.env.JWT_KEY, function (err, token) {
                        res.status(200).json({
                            message: "Authenticated",
                            token: token
                        });
                    });
                } else {
                    res.status(401).json({
                        message: "Wrong credentials",
                    });
                }
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
        });
    });
}