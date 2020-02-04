const db = require('../database/dbClient')

module.exports = {
    // Promise (Array Obj)
    getAll() {
        return db('pics')
    },

    // String -> Promise (Array Obj)
    getAllForUser(userId) {
        return db('pics').where({user_id: userId}).orderBy("id", "asc")
    },

    // Most important endpoint in the entire app.
    // Number -> String -> Promise Object
    async processAndCreate(userId, url) {
        /*
        Store the url in the db.
        Then query the DS ednpoint to process the image.
        Once the image is processed, write to the attributes
        table all the attributes for the image. (Attributes.create())
         */
        await db('pics').insert({
            user_id: userId,
            url: url
        })
         
    },

    delete(picId) {
        return db('users').delete().where({id: picId})
    }
}