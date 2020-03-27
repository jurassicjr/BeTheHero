// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user:     'root',
      password: 'Eganmuw67848.110110',
      database: 'bethehero'
    },
    migrations : {
      directory : './src/database/migrations'
    }
  },

  test: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user:     'root',
      password: 'Eganmuw67848.110110',
      database: 'betheherotest'
    },
    migrations : {
      directory : './src/database/migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: 'localhost:3306',
      database: 'bethehero',
      user:     'root',
      password: 'Eganmuw67848.110110'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations : {
      directory : './src/database/migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'localhost:3306',
      database: 'bethehero',
      user:     'root',
      password: 'Eganmuw67848.110110'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations : {
      directory : './src/database/migrations'
    }
  }
};
