/**
 * Imports
 */

const router = require('express').Router({mergeParams: true})
const AuthController = require('../controllers/authController')

// POST https://bw-pic-metric.herokuapp.com/api/register
router.post('/register', AuthController.register)

// POST https://bw-pic-metric.herokuapp.com/api/login
router.post('/login', AuthController.login)

module.exports = router