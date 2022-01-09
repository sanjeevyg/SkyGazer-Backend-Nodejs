const knex = require('knex')
const config = require('../knexfile')[process.env.DB_ENV || "development"]
const config = require('../knexfile')[production || "development"]


module.exports = knex(config);