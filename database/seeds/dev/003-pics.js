
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pics').del()
    .then(function () {
      // Inserts seed entries
      return knex('pics').insert([
        // Hands
        {id: 1, user_id: 1, pic: "https://images.unsplash.com/photo-1580893246395-52aead8960dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60", processed_pic: null},
        // Programmers
        {id: 2, user_id: 1, pic: "https://images.unsplash.com/photo-1580920461931-fcb03a940df5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80", processed_pic: null},
        // Buildings
        {id: 3, user_id: 2, pic: "https://images.unsplash.com/photo-1580902078282-cda1ab0c4101?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", processed_pic: null},
        // Horse
        {id: 4, user_id: 3, pic: "https://images.unsplash.com/photo-1580902078282-cda1ab0c4101?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", processed_pic: null},
      ]);
    });
};
