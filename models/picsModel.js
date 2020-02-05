const db = require('../database/dbClient')

module.exports = {
    // Promise (Array Obj)
    all() {
        return db('pics')
    },

    // String -> Promise (Array Obj)
    allForUser(userId) {
        return db('pics').where({user_id: userId}).orderBy('id', 'asc')
    },

    // Object -> Promise Object
    async create(userId, pic) {
        await db('pics').insert({
            user_id: userId,
            pic: pic
        })
        
        return 'success'
    },

    // Store the processed image 
    async update(userId, changes) {
        await db('pics').update(changes).where({user_id: userId})

        return 'success'
    },

    // Number -> Number
    delete(picId) {
        return db('pics').delete().where({id: picId})
    }
}