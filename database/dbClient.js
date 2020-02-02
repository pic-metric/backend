const knex = require('knex');

const knexConfig = require('../knexfile.js');

switch (process.env.NODE_ENV.toUpperCase()) {
    case "DEVELOPMENT": 
        module.exports = knex(knexConfig.development)
        break
    case "PRODUCTION":
        module.exports = knex(knexConfig.production)
        break
    case "TEST":
        module.exports = knex(knexConfig.test)
        break
    default: 
        console.warn("Ensure that your NODE_ENV is specified. Its current value is: ", process.env.NODE_ENV)
        module.exports = knex(knexConfig.development)
}
