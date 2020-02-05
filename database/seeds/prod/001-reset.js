
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => knex('pics').del())
    .then(() =>  knex('attributes').del())
};
