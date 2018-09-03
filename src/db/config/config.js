module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'database_development',
    dialect: 'sqlite',
    storage: 'test.db'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    dialect: 'sqlite',
    storage: 'test.db'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};