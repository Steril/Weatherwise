exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          email: 'example@gmail.com',
          password: '$2b$10$6hhsN6IaeeN7etP/fTOhjuVdtrSgPAiBYfT4tkI.4SZnCE4t68QsK', // hashed version of "password"
          api_key: 'API_KEY_HERE',
          api_secret: 'API_SECRET_HERE',
        },
      ]);
    });
};
