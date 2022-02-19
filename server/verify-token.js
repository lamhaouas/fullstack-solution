const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.headers.authorization;
    
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, process.env.JWT_KEY);
       req.username = verified;
       next()

     } catch (err) {
         res.status(400).send('invalid Token');
     }
}