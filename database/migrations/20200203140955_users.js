
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments()
        tbl.timestamps(true, true)

        tbl.text('email').notNullable().unique()
        tbl.text('full_name')
        tbl.text('hashed_password').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};
