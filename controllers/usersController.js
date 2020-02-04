/**
 * Imports 
 */
const Users = require('../models/usersModel')
const bcrypt = require('bcrypt')
const { catchErrors, without } = require('../helpers')


/**
 * Main
 */

class UsersController {
    static async allUsers(req, res, next) {
        let [err, users] = await catchErrors(Users.all())

        if (err) {
            next(err)
        } else if (Object.keys(users).length === 0) {
            next(new Error('No users exist in the database yet.'))
        } else {
            res.status(200).json(users)
        }
    } 

    static async update(req, res, next) {
        let id = req.params.user_id
        let changes = req.body

        if (changes.password) {
            // hash the password before storing it in the database
            // also, rename password field to hashed_password (that's how it's stored in the db)
            changes.hashed_password = hashPassword(changes.password)
            delete changes.password
        }
        
        let [err, updatedUser] = await catchErrors(Users.updateById(id, changes))

        if (err) {
            next(err)
        } else {
            res.status(200).json(without('hashed_password', updatedUser))
        }
    }

    static async delete(req, res, next) {
        let [err, success] = await catchErrors( Users.removeById(req.params.user_id) )
        err ? next(err) : res.status(200).send(`Success`)
    }
}


/**
 * Helpers
 */

 // String -> String
 function hashPassword(password) {
    return bcrypt.hashSync(password, 10)
 }



 /**
  * Export
  */
 
module.exports = UsersController