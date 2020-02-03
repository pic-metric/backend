/**
 * Imports
 */

const router = require('express').Router({mergeParams: true})
const { responseForUnfinishedEndpoint } = require('../helpers')

router.post('/register', responseForUnfinishedEndpoint)

router.post('/login', responseForUnfinishedEndpoint)

module.exports = router