/**
 * Imports 
 */
const Users = require('../models/usersModel')
const { catchErrors } = require('../helpers')


/**
 * Main
 */

class UsersController {
    static async allUsers(req, res, next) {
        const [err, users] = await catchErrors(Users.all())

        if (err) {
            next(err)
        } else if (Object.keys(users).length === 0) {
            next(new Error('No users exist in the database yet.'))
        } else {
            res.status(200).json(users)
        }
    } 
}

module.exports = UsersController