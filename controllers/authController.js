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
                        hashed_password: encryptedPw
                    })
                    res.status(200).json(newUser)
                    
                } catch(err) {
                    next(new Error('there was an issue inserting the user into the database.'))
                }
            }
        })
   }
}

module.exports = AuthController