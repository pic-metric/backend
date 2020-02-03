/**
 * Imports
 */

const router = require('express').Router({mergeParams: true})
const authenticate = require('../middleware/authenticate')
const { responseForUnfinishedEndpoint } = require('../helpers')


/**
 * Routes (Main)
 */

// GET https://bw-pic-metric.herokuapp.com/api/attriubtes/:pic_id
// Get attributes for a particular picture.
router.get('/:pic_id', responseForUnfinishedEndpoint)

// POST https://bw-pic-metric.herokuapp.com/api/attributes/:pic_id
// Store an attribute for a particular user.
router.post('/:pic_id', responseForUnfinishedEndpoint)


module.exports = router