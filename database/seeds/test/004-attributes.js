
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('attributes').del()
    .then(function () {
      // Inserts seed entries
      return knex('attributes').insert([
        {id: 1, pic_id: 1, attribute: "hands", count: 2},
        {id: 2, pic_id: 2, attribute: "programmers", count: 6},
        {id: 3, pic_id: 3, attribute: "buildings", count: 2},
        {id: 4, pic_id: 3, attribute: "windows", count: 50},
        {id: 5, pic_id: 4, attribute: "horse", count: 1},
        {id: 6, pic_id: 4, attribute: "human", count: 1},
      ]);
    });
};
