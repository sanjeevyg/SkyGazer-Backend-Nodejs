// const knex = require('knex')
// const config = require('../knexfile')[process.env.DB_ENV || "development"]
// const config = require('../knexfile')[production || "development"]


// module.exports = knex(config);


const knex = require('knex');
const knexConfig = require('../knexfile');
const environment = process.env.DB_ENV || 'development';
module.exports = knex(knexConfig[environment]);

// let dbConnectionConfig
// switch (process.env.NODE_ENV){
//     case 'production':
//       dbConnectionConfig = dbConfigObj.production;
//       break;
//     default:
//       dbConnectionConfig = 
//       dbConfigObj.development
// }

// const appDb = connectToDb(dbConnectionConfig)
