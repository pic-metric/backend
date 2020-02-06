/**
 * Imports
 */

const router = require('express').Router({mergeParams: true})
const AuthController = require('../controllers/authController')


/**
 * Main
 */

// POST https://bw-pic-metric.herokuapp.com/api/register
// Register an account; generates a json web token.
router.post('/register', AuthController.register)

// POST https://bw-pic-metric.herokuapp.com/api/login
// Login a user; generates a json web token.
router.post('/login', AuthController.login)


/**
 * Export
 */

module.exports = router