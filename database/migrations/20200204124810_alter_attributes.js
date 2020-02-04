
exports.up = function(knex) {
    return knex.schema.alterTable('attributes', tbl => {
        tbl.integer('count').defaultTo(1)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('attributes')
};
