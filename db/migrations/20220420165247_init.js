/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('clients', (table) => {
      table.bigIncrements('id').notNullable().primary();
      table.string('name', 50).notNullable();
      table.string('surname', 80).notNullable();
      table.string('oib', 20).notNullable().unique();
      table.string('email', 100).notNullable();
      table.string('phone', 20).notNullable();
      table.string('county', 50).notNullable();
      table.string('post_code', 20).notNullable();
      table.string('address', 100).notNullable();
      table.string('billing_location_number');
      table.timestamps('created', true);
      table.boolean('isDeleted');
    })
    .createTable('statuses', (table) => {
      table.bigIncrements('id').notNullable().primary();
      table.string('name', 50).notNullable();
      table.timestamps('created', true);
      table.boolean('isDeleted');
    })
    .createTable('power_plant_types', (table) => {
      table.bigIncrements('id').notNullable().primary();
      table.string('name').notNullable();
      table.timestamps('created', true);
      table.boolean('isDeleted');
    })
    .createTable('power_plants', (table) => {
      table.bigIncrements('id').notNullable().primary();
      table.string('name', 50).notNullable();
      table.float('power').notNullable();
      table.timestamps('created', true);
      table.bigInteger('power_plant_type_id').unsigned().notNullable();
      table.boolean('isDeleted');

      table.foreign('power_plant_type_id').references('power_plant_types.id');
    })
    .createTable('projects', (table) => {
      table.bigIncrements('id').notNullable().primary();
      table.string('name', 100).notNullable();
      table.string('address', 100).notNullable();
      table.text('comment');
      table.bigInteger('power_plant_id').unsigned().notNullable();
      table.float('connection_power').notNullable();
      table.string('particle_number', 100).notNullable();
      table.string('cadastral_municipality', 100).notNullable();
      table.bigInteger('client_id').unsigned().notNullable();

      table.bigInteger('status_id').unsigned().notNullable();

      table.foreign('power_plant_id').references('power_plants.id');
      table.foreign('client_id').references('clients.id');
      table.foreign('status_id').references('statuses.id');

      table.timestamps('created', true);
      table.boolean('isDeleted');
    })
    .createTable('products', (table) => {
      table.bigIncrements('id').notNullable().primary();
      table.string('code', 50).notNullable();
      table.string('name', 100).notNullable();
      table.float('price').notNullable();
      table.text('description');
      table.specificType('photo', 'LONGBLOB');
      table.timestamps('created', true);
      table.boolean('isDeleted');
    })
    .createTable('products_projects', (table) => {
      table.bigIncrements('id').notNullable().primary();
      table.bigInteger('project_id').unsigned().notNullable();
      table.bigInteger('product_id').unsigned().notNullable();
      table.foreign('project_id').references('projects.id');
      table.foreign('product_id').references('products.id');

      table.integer('quantity');
      table.boolean('isDeleted');
    })
    .createTable('documents', (table) => {
      table.bigIncrements('id').notNullable().primary();
      table.string('name', 200).notNullable();
      table.specificType('document', 'LONGBLOB').notNullable();
      table.bigInteger('project_id').notNullable().unsigned();
      table.timestamps('created', true);
      table.boolean('isDeleted');

      table.foreign('project_id').references('projects.id');
    })
    .createTable('users', (table) => {
      table.bigIncrements('id').notNullable().primary();
      table.string('username').notNullable();
      table.string('password').notNullable();
      table.string('email').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
