const db = require('../database/dbClient')

module.exports = {
    // Promise (Array Object)
    all() {
        return db('users')
    },

    // Number -> Promise Object
    findById(id) {
        return db('users')
            .where({ user_id: id })
            .first()
    },

    // String -> Promise Object
    findByEmail(email) {
        return db('users').where({ email }).first()
    },

    // Object -> Promise Object
    async create(user) {
        await db('users').insert(user)
        return this.findByEmail(user.email)
    },

    // Number -> Object -> Promise Object
    async updateById(id, changes) {
        await db('users').update(changes).where({ user_id: id })
        return this.findById(id)
    },

    // String -> Object -> Promise Object
    async updateByEmail(email, changes) {
        await db('users').update(changes).where({ email })
        return this.findByEmail(email)
    },

    // Number -> Promise Object
    async removeById(id) {
        return db('users').delete().where({ user_id: id })
    },

    // String -> Promise Object
    async removeByEmail(email) {
        return db('users').delete().where({ email })
    }
}