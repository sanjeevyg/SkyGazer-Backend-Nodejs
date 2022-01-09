// Update with your config settings.

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
    client: "pg",
    connection: process.env.DATABASE_URL,
    // migrations: {
    //     directory: __dirname + '/db/migrations',
    // },
    // seeds: {
    //     directory: __dirname + '/db/seeds/production',
    // },
},
};
