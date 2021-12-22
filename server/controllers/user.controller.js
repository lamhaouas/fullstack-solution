const bcrypt = require('bcrypt');
const db = require('../config/db')
exports.signUp = async (req, res) => {
    try {
        // validation


        //hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const user = {
            email: req.body.email,
            username: req.body.email,
            password: hashedPassword
        }
        // insert user to db
        db.query('INSERT INTO users SET ?',user, (err, results) => {
            console.log(err);
            res.send(results);
        })
    } catch (err) {
        res.status(200).json({
            message: 'Faild to sign up'
        })
    }


}