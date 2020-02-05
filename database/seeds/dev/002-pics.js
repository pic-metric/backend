
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pics').del()
    .then(function () {
      // Inserts seed entries
      return knex('pics').insert([
        {id: 1, user_id: 1, url: 'https://images.unsplash.com/photo-1558981033-0f0309284409?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'},
        {id: 2, user_id: 1, url: 'https://images.unsplash.com/photo-1580829854010-9c3d7ad894b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80'},
        {id: 3, user_id: 2, url: 'https://images.unsplash.com/photo-1580823648685-fa304676ed09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'},
        {id: 4, user_id: 3, url: 'https://images.unsplash.com/photo-1580793097574-2fcd030e9601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'},
        {id: 5, user_id: 3, url: 'https://images.unsplash.com/photo-1580820726687-30e7ba70d976?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'}
      ]);
    });
};
