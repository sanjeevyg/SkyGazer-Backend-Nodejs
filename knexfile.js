// Update with your config settings.
require("dotenv").config();
module.exports = {

  development: {
    client: 'pg',
    connection: "postgress:///skyGazer"
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './migrations',
    },
    useNullAsDefault: true,
    seeds: { directory: './seeds' },
    ssl: {
      rejectUnauthorized: false,
    }
  },
  
};
