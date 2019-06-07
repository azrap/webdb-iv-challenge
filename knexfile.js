// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/cookbook.db3'
    },
    useNullAsDefault: true, // needed for sqlite
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  }

};