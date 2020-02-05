const db = require('../database/dbClient')

module.exports = {
    // Number -> Promise (Array Object)
    getAllForPic(picId) {
        return db('attributes')
            .where({id: picId})
            .orderBy("id", "asc")
    },

     // Object -> Promise Object
     create(picId, picInfo) {
        return db("attributes")
            .insert({
                id: picId,
                ...picInfo
            })
    },

    // Store the processed image 
    // Number -> Object -> Promise Object
    updateById(picId, changes) {
        return db('pics').update(changes).where({id: picId})
    },
}