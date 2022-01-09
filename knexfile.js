// Update with your config settings.

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
})



module.exports = {

  development: {
    client: 'pg',
    connection: "postgress:///skyGazer"
  },
  production: {
    client: client,
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
