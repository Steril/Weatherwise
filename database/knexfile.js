const config = require('./config');


module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'password',
      database: 'myapp'
    },
    migrations: {
      directory: __dirname + '/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  }

};
