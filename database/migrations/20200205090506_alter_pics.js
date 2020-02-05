
exports.up = function(knex) {
    return knex.schema.alterTable('pics', tbl => {
        tbl.dropColumn('url')
        tbl.binary('pic').notNullable()
        tbl.binary('processed_pic')

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pics')
};
