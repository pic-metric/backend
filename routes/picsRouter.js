/**
 * Imports
 */

const router = require('express').Router({mergeParams: true})
const requireAuthentication = require('../middleware/authenticate')
const PicsController = require('../controllers/picsController')
const multer = require('multer')

/**
 * Constants
 */

const upload = multer({dest: 'tmp'})


/**
 * Main
 */

// Require a valid json web token on all routes
router.all(requireAuthentication)

// GET https://bw-pic-metric.herokuapp.com/api/pics/unprocessed/:pic_id
router.get('/unprocessed/:pic_id', PicsController.getUnprocessedPicById)

// GET https://bw-pic-metric.herokuapp.com/api/pics/processed/:pic_id
router.get('/processed/:pic_id', PicsController.getProcessedPicById)

// GET https://bw-pic-metric.herokuapp.com/api/pics/for/:user_id
// Retrieve all pictures for a particular user.
router.get('/for/:user_id', PicsController.getAllPicsForUser)


// POST https://bw-pic-metric.herokuapp.com/api/:user_id
// Upload a picture.
router.post('/:user_id', upload.single('pic'),  PicsController.processAndCreate)

// DELETE https://bw-pic-metric.herokuapp.com/api/pics/:pic_id
// Remove a picture from the system.
router.delete('/:pic_id', PicsController.deletePic)


/**
 * Export
 */

module.exports = router

