/**
 * Imports
 */
const server = require('./server')

/**
 * Constants
 */
const PORT = process.env.PORT || 4000

/**
 * Main
 */
server.listen(PORT, () => { console.log('server listenting on port ' + PORT) })