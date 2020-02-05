/**
 * Imports
 */

const router = require('express').Router({mergeParams: true})
const { responseForUnfinishedEndpoint } = require('../helpers')
const requireAuthentication = require('../middleware/authenticate')
const AttributesController = require('../controllers/attributesController')

// Require a valid json web token on all routes
// router.all(requireAuthentication)

/**
 * Routes (Main)
 */

// GET https://bw-pic-metric.herokuapp.com/api/attriubtes/:pic_id
// Get attributes for a particular picture.
router.get('/:pic_id', AttributesController.getAllForPic)

// POST https://bw-pic-metric.herokuapp.com/api/attributes/:pic_id
// Store an attribute for a particular user.
router.post('/:pic_id', responseForUnfinishedEndpoint)


module.exports = router