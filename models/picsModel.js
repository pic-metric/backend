const db = require('../database/dbClient')

module.exports = {
    // Promise (Array Obj)
    all() {
        return db('pics')
    },

    // String -> Promise (Array Obj)
    allForUser(userId) {
        return db('pics').where({user_id: userId}).orderBy("id", "asc")
    },

    // Number -> String -> Promise Object
    async create(userId, url) {
       
        await db('pics').insert({
            user_id: userId,
            url: url
        })
         
    },

    delete(picId) {
        return db('users').delete().where({id: picId})
    }
}