/**
 * Imports
 */

const router = require('express').Router({mergeParams: true})
const { responseForUnfinishedEndpoint } = require('../helpers')
const requireAuthentication = require('../middleware/authenticate')
const PicsController = require('../controllers/picsController')
const multer = require('multer')

const upload = multer({dest: 'tmp'})

// Require a valid json web token on all routes
// router.all(requireAuthentication)

// GET https://bw-pic-metric.herokuapp.com/api/pics
// Retrieve all pictures in the system.
router.get('/', PicsController.getAllPics)

// GET https://bw-pic-metric.herokuapp.com/api/pics/:pic_id
router.get('/:pic_id', PicsController.getPicById)

// GET https://bw-pic-metric.herokuapp.com/api/pics/for/:user_id
// Retrieve all pictures for a particular user.
router.get('/for/:user_id', PicsController.getAllPicsForUser)


// POST https://bw-pic-metric.herokuapp.com/api/pics
// Upload a picture.
// router.post('/:user_id', multer(), PicsController.uploadImage)
router.post('/:user_id', upload.single('pic'),  PicsController.processAndCreate)

// DELETE https://bw-pic-metric.herokuapp.com/api/pics/:pic_id
// Remove a picture from the system.
router.delete('/:pic_id', PicsController.deletePic)

module.exports = router