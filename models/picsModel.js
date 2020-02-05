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
    create(userId, picInfo) {
        return db("pics")
            .insert({
                user_id: userId,
                ...picInfo
            })
            .first()
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