exports.up = function(knex) {
  return knex.schema.createTable('campaigns', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('campaigns');
};
