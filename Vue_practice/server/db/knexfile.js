// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const { knexSnakeCaseMappers } = require("objection");

module.exports = {
  development: {
    client: "pg",
    connection: {
      host:'127.0.0.1',
      database: "test",
      user: "postgres",
      password: "1024",
      port:5434
    },
    pool: {
      min: 2,
      max: 10,
    },
    ...knexSnakeCaseMappers(),
    migrations: {
      tableName: "knex_migrations",
    },
    searchPath: ["knex", "public"],
  },
};
