'use strict';

const env = {
  PORT: process.env.PORT || 3000,
  DATABASE_NAME: process.env.DATABASE_NAME || 'db_scheduler',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'usrscheduler',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'schd$#@!2018',
  DATABASE_PORT: process.env.DATABASE_PORT || 5432,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'postgres',

  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;
