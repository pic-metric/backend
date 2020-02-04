/**
 * Imports
 */
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const usersRouter = require('./routes/usersRouter')
const authRouter = require('./routes/authRouter')
const picsRouter = require('./routes/picsRouter')
const attributesRouter = require('./routes/attributesRouter')

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

server.use('/api/users', usersRouter)
server.use('/api/auth', authRouter)
server.use('/api/pics', picsRouter)
server.use('/api/attributes', attributesRouter)
 
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

// Catch errors that are still wrapped in a promise
server.use(function catchUnhandledPromiseRejections(error, req, res, next) {
    if (error instanceof Promise) {
        error.catch(err => {
            next(error)
        })
    } else {
        next(error)
    }
})

// Catch-all route 
server.use(function defaultErrorHandler(error, req, res, next) {
    error.status = error.status || 500
    error.message = error.message || 'Internal server error'

    console.error(error)
    
    res.status(error.status).json({
        error: { 
            message: error.message, 
            status: error.status
        } 
    })
})

module.exports = server