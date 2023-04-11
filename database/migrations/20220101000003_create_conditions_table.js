exports.up = function(knex) {
  return knex.schema.createTable('conditions', (table) => {
    table.increments('id').primary();
    table.integer('campaign_id').unsigned().references('id').inTable('campaigns').onDelete('CASCADE');
    table.string('location').notNullable();
    table.integer('temp_min');
    table.integer('temp_max');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('conditions');
};
