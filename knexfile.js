// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: "postgress:///skyGazer"
  },
  production: {
    client: 'pg',
    connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2, 
      max: 10
    },
    migrations: {
      tablename: 'knex_migrations',
      directory: './migrations',
    },
    seeds: { directory: './seeds' }
  }
  
