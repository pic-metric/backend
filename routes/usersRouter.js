/**
 * Imports
 */

const router = require('express').Router({mergeParams: true})
const { responseForUnfinishedEndpoint } = require('../helpers')


/**
 * Main
 */


// GET /api/users 
// Retrieve all users in the system.
router.get('/', responseForUnfinishedEndpoint)


// PUT /api/users/:user_id
// Update a user's information.
router.put('/:user_id', responseForUnfinishedEndpoint)

// DELETE /api/users/:user_id
// Delete a user from the system.
router.delete('/:user_id', responseForUnfinishedEndpoint)

module.exports = router







