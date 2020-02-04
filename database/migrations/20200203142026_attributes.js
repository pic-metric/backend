
exports.up = function(knex) {
    return knex.schema.createTable('attributes', tbl => {
        tbl.increments()
        tbl.timestamps(true, true)

        tbl.integer('pic_id')
            .references('id')
            .inTable('pics')
            .unsigned()
            .notNullable()
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

        tbl.text('attribute').notNullable()
        tbl.integer('count').defaultTo(1)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('attributes')
};
