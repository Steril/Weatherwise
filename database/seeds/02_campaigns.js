exports.seed = function(knex) {
  return knex('campaigns').del()
    .then(function () {
      return knex('campaigns').insert([
        {
          user_id: 1,
          name: 'Example Campaign',
          content: 'Hello, {{name}}! This is an example campaign.',
        },
      ]);
    });
};
