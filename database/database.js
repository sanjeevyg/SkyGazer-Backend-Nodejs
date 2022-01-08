const knex = require('knex')
const config = require('../knexfile')[process.env.DB_ENV || "development"]


module.exports = knex(config);