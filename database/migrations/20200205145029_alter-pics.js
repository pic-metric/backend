
exports.up = function(knex) {
    return knex.schema.alterTable('attributes', tbl => {
        tbl.dropColumn('pic')
        tbl.dropColumn('processed_pic')

        tbl.binary('pic')
        tbl.binary('processed_pic')
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable('attributes', tbl => {
        tbl.dropColumn('pic')
        tbl.dropColumn('processed_pic')

        tbl.text('pic').notNullable()
        tbl.text('processed_pic')

    })
};
