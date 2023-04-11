exports.up = function(knex) {
  return knex.schema.createTable('weather', (table) => {
    table.increments('id').primary();
    table.string('location').notNullable();
    table.float('temp').notNullable();
    table.string('description').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('weather');
};
