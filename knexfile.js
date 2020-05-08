// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "knex_test",
      user: "postgres",
      password: "pl4t1num",
    },
    migrations: {
      tablename: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
}