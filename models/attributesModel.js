const db = require('../database/dbClient')

module.exports = {
    // Number -> Promise (Array Object)
    getAllForPic(picId) {
        return db('attributes')
            .where({pic_id: picId})
            .orderBy("id", "asc")
    },

    // Number -> String -> Number -> Promise String
    async create(picId, attribute, count) {
        /*  picId comes from the request parameters, attriubte
            attribute and count comes from the the flask API 
            (thru the processAndCreate method on the pics model)
        */  
        await db("attributes").insert({
            pic_id: picId,
            attribute: attribute,
            count: count
        })

        return "success"
    }
}