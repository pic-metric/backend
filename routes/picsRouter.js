/**
 * Imports
 */

const router = require('express').Router({mergeParams: true})
const { responseForUnfinishedEndpoint } = require('../helpers')


// GET https://bw-pic-metric.herokuapp.com/api/pics
// Retrieve all pictures in the system.
router.get('/pics', responseForUnfinishedEndpoint)

// GET https://bw-pic-metric.herokuapp.com/api/pics/:user_id
// Retrieve all pictures for a particular user.
router.get('/pics/:user_id', responseForUnfinishedEndpoint)


// POST https://bw-pic-metric.herokuapp.com/api/pics
// Upload a picture.
router.post('/pics', responseForUnfinishedEndpoint)

// DELETE https://bw-pic-metric.herokuapp.com/api/pics/:pic_id
// Remove a picture from the system.
router.delete('/pics/:pic_id', responseForUnfinishedEndpoint)

module.exports = router