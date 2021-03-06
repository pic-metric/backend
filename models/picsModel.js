const db = require('../database/dbClient')

module.exports = {
    // Promise (Array Obj)
    all() {
        return db('pics')
    },

    // Number -> Promise Object
    getPicById(picId) {
        return db('pics')
            .where({id: picId})
            .first()
    }, 

    // String -> Promise (Array Obj)
    allForUser(userId) {
        return db('pics')
            .where({user_id: userId})
            .orderBy('id', 'asc')
    },

    // Object -> Promise Object
    create(userId, pic) {
        return db("pics")
            .insert({
                user_id: userId,
                pic: pic
            })
            .returning("id")
    },

    // Store the processed image 
    // Number -> Object -> Promise Object
    updateById(picId, changes) {
        return db('pics').update(changes).where({id: picId})
    },

    // Number -> Number
    delete(picId) {
        return db('pics').delete().where({id: picId})
    }
}