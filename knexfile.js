// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: "postgress:///skyGazer"
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      tablename: 'knex_migrations',
      directory: './migrations', 
    },
    seeds: { directory: './seeds' }
  }
}
  
