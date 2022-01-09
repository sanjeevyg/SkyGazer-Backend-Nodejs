// const knex = require('knex')
// const config = require('../knexfile')[process.env.DB_ENVIRONMENT || "development"]

const dbEngine = process.env.DB_ENVIRONMENT || "development";
const config = require("../knexfile")[dbEngine];


module.exports = require("knex")(config);


