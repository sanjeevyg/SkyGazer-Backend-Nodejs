// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: "postgress:///skyGazer"
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2, 
      max: 10
    },
    migrations: {
      tablename: 'knex_migrations',
      directory: './migrations',
    },
    seeds: { directory: './seeds' }
  },  
  ssl: {
    rejectUnauthorized: false
  }
  
};
