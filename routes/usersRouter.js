/**
 * Imports
 */

const router = require('express').Router({mergeParams: true})
const { responseForUnfinishedEndpoint } = require('../helpers')
const UsersContoller = require('../controllers/usersController')
const requireAuthentication = require('../middleware/authenticate')


/**
 * Main
 */

// Require a valid json web token on all routes
router.all('*', requireAuthentication)

// GET /api/users 
// Retrieve all users in the system.
router.get('/', UsersContoller.allUsers)


// PUT /api/users/:user_id
// Update a user's information.
router.put('/:user_id', UsersContoller.update)

// DELETE /api/users/:user_id
// Delete a user from the system.
router.delete('/:user_id', UsersContoller.delete)

module.exports = router







