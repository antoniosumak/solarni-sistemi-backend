// Update with your config settings.
const { host, port, user, password, database } = require('../config.js');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    //   client: 'postgresql',
    //   connection: {
    //     database: 'solarni_sistemi',
    //     host: '127.0.0.1',
    //     port: 5432,
    //     user: 'postgres',
    //     password: '1234',
    //   },
    //   pool: {
    //     min: 2,
    //     max: 10,
    //   },
    //   migrations: {
    //     tableName: 'knex_migrations',
    //   },
    client: 'mysql2',
    connection: {
      host: host,
      port: port,
      user: user,
      password: password,
      database: database,
      charset: 'utf8',
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'mysql2',
    connection: {
      host: host,
      port: port,
      user: user,
      password: password,
      database: database,
      charset: 'utf8',
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
