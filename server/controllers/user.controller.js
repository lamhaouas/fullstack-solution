const models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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
                error: err
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

                    models.users.create(user).then(result => {
                        res.status(201).json({
                            message: 'Account created successfully',
                            result:user
                        });
                    }).catch(error => {
                        res.status(500).json({

                            message: 'something went wrong!',

                            error: error
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
    models.users.findOne({
        where: {
            email: req.body.email
        }
    }).then(result => {
        if (result === null) {
            res.json({
                message: "Please verify you credentials",
                SignIn : false
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
                            token: token,
                            SignIn: true
                        });
                    });
                } else {
                    res.json({
                        message: "Wrong credentials",
                        SignIn: false
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