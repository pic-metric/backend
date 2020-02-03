/**
 * Imports
 */
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')


/**
 * Constants
 */
const server = express()


/**
 * Consume middleware
 */
server.use(express.json())
server.use(helmet())
server.use(cors())


/**
 * Routes (Main)
 */
 
// Index Route (Ping)
server.get('/', function ping (req, res) {
    res.status(200).json({ api: "running" })
})

// 404 route
server.use(function notFound(req, res, next) {
    const error = new Error('Not found.')
    error.status = 404

    next(error)
})

// Catch-all route
server.use(function errorHandler(error, req, res, next) {
    error.status = error.status || 500
    error.message = error.message || 'Internal server error'

    res.status(error.status).json({
        error: { 
            message: error.message, 
            status: error.status
        } 
    })
})

module.exports = server