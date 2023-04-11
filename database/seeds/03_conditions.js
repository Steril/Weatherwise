exports.seed = function(knex) {
  return knex('conditions').del()
    .then(function () {
      return knex('conditions').insert([
        {
          user_id: 1,
          location: 'London, UK',
          temperature: 10,
          condition: 'Rain',
        },
      ]);
    });
};
