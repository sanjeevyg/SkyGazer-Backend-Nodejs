// Update with your config settings.
require("dotenv").config();
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
    useNullAsDefault: true,
    seeds: { directory: './seeds' },
    ssl: {
      rejectUnauthorized: false,
    }
  },  
  
};
