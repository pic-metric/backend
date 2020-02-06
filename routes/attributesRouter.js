/**
 * Imports
 */

const router = require('express').Router({mergeParams: true})
const requireAuthentication = require('../middleware/authenticate')
const AttributesController = require('../controllers/attributesController')

// Require a valid json web token on all routes
router.all(requireAuthentication)

/**
 * Routes (Main)
 */

// GET https://bw-pic-metric.herokuapp.com/api/attriubtes/:pic_id
// Get attributes for a particular picture.
router.get('/:pic_id', AttributesController.getAllForPic)

// DELETE  https://bw-pic-metric.herokuapp.com/api/attriubtes/:pic_id 
// Remove an attribute from a picture
router.delete('/:pic_id', AttributesController.deleteAttributesForPic)


/**
 * Export
 */

module.exports = router