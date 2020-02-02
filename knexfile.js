module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://localhost/bw_pic_metric_dev',
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds/dev',
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection:'postgres://localhost/bw_pic_metric_test',
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds/test',
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL, // TBD
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds/prod',
    },
    useNullAsDefault: true
  }
};
