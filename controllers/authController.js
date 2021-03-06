const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../config/secrets')
const Users = require('../models/usersModel')
const { catchErrors, without } = require('../helpers')

class AuthController {
    static async register(req, res, next) {
        // Check to see if the user exists already

        let [err, existingUser] = await catchErrors( Users.findByEmail(req.body.email) )

        if (existingUser) {
            // You can't register a user if the user already exists in the system.
            next(new Error(`The user with the email ${existingUser.email} already exists.`))
        } else {
        // The user doesn't exist. Create a new account for them.
        
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
                        
                        // Respond with the user's info. Leave out the password in the response.
                        res.status(200).json({
                            ...without('hashed_password', newUser),
                            token: generateToken(newUser)
                        })

                    } catch(err) {
                        next(new Error('there was an issue inserting the user into the database.'))
                    }
                }
            })
        }   
    } 

    static async login(req, res, next) {
        const [err, user] = await catchErrors( Users.findByEmail(req.body.email) )

        if (err) {
            next(err)
        } else {
            if (user) {
                bcrypt.compare(req.body.password, user.hashed_password, (err, passwordsMatch) => {
                    if (err) {
                        next (err)
                    }
                    else if (!passwordsMatch) {
                        next(new Error('Invalid password'))
                    } else {
                        res.status(200).json({
                            ...without('hashed_password', user),
                            token: generateToken(user)
                        })
                    }
                })
            } else {
                res.status(404).send("Invalid email address")
            }
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