/**
 * Imports
 */

const router = require('express').Router({mergeParams: true})
const { responseForUnfinishedEndpoint } = require('../helpers')
const requireAuthentication = require('../middleware/authenticate')

// Require a valid json web token on all routes
// router.all(requireAuthentication)

// GET https://bw-pic-metric.herokuapp.com/api/pics
// Retrieve all pictures in the system.
router.get('/', responseForUnfinishedEndpoint)

// GET https://bw-pic-metric.herokuapp.com/api/pics/:user_id
// Retrieve all pictures for a particular user.
router.get('/:user_id', responseForUnfinishedEndpoint)


// POST https://bw-pic-metric.herokuapp.com/api/pics
// Upload a picture.
router.post('/:user_id', responseForUnfinishedEndpoint)

// DELETE https://bw-pic-metric.herokuapp.com/api/pics/:pic_id
// Remove a picture from the system.
router.delete('/:pic_id', responseForUnfinishedEndpoint)

module.exports = router