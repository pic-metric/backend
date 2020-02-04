
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('attributes').del()
    .then(function () {
      // Inserts seed entries
      return knex('attributes').insert([
        {id: 1, pic_id: 3, attribute: "dog", count: 1},
        {id: 2, pic_id: 1, attribute: "tree", count: 15},
        {id: 3, pic_id: 2, attribute: "rose", count: 2},
        {id: 4, pic_id: 2, attribute: "person", count: 25},
      ]);
    });
};
