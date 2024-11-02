const knexfile = require("./knexfile");
const dbConncetionConfig = require('knex')(knexfile.development);

module.exports = dbConncetionConfig;
