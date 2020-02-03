const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/secrets')

module.exports = function requireValidToken(req, res, next) {
    const token  = req.headers.authorization

    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
            if (err) {
                const error = new Error('Invalid token.')
                error.status = 400
                next(error)
            } else {
                req.user = decodedToken.username
                next()
            }
        })
    } else {
        const error = new Error('You need a token to access this resource.')
        error.status = 400
        next(error)
    }
}