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
  prodConfig = Object.assign(
    {},
    devConfig,
    { client: 'pg', connection: process.env.DATABASE_URL}
  )
};
