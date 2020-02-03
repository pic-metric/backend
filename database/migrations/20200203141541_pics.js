
exports.up = function(knex) {
    return knex.schema.createTable('pics', tbl => {
        tbl.increments()
        tbl.timestamps(true, true)

        tbl.integer('user_id')
            .references('id')
            .inTable('users')
            .unsigned()
            .notNullable()
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        
        tbl.text('url').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pics')
};
