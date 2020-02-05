
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'johnnyTest@example.com', hashed_password: "password", full_name: "Johnny Test"},
        {id: 2, email: 'johndoe@example.com', hashed_password: "password", full_name: "John Doe"},
        {id: 3, email: 'janedoe@example.com', hashed_password: "password", full_name: "Jane Doe"},
      ]);
    });
};
