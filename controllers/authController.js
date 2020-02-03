const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../config/secrets')
const Users = require('../models/usersModel')
const { catchErrors } = require('../helpers')

class AuthController {
    static async register(req, res, next) {
       // asyncronously hash the password before storing it in the database.
        bcrypt.hash(req.body.password, 8, async (err, encryptedPw) => {
            if (err) {
                next (new Error('there was an issue with hashing the password'))
            } else {
                try {
                    // Insert the user with the newly hashed password into the system.
                    const newUser = await Users.create({
                        email: req.body.email,
                        full_name: req.body.full_name,
                        hashed_password: encryptedPw,
                    })

                    res.status(200).json({
                        ...newUser,
                        token: generateToken(newUser)
                    })

                } catch(err) {
                    next(new Error('there was an issue inserting the user into the database.'))
                }
            }
        })
    } 

    static async login(req, res, next) {
        const [err, user] = catchErrors( await Users.findByEmail(req.body.email) )

        if (err) {
            next(err)
        } else {
            bcrypt.compare(req.body.password, user.password, (err, passwordsMatch) => {
                if (err) {
                    next (err)
                }
                else if (!passwordsMatch) {
                    next(new Error('Invalid password'))
                } else {
                    res.status(200).json({
                        ...user,
                        token: generateToken(user)
                    })
                }
            })
        }

    }
}

// Helper
function generateToken(user) {
    const payload = {
        email: user.email,
        subject: user.user_id
    }

    const options = { expiresIn: '1d' }

    return jwt.sign(payload, JWT_SECRET, options)
}

module.exports = AuthController