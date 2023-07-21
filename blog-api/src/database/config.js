const { Sequelize } = require('sequelize');

console.log(process.env.DB_DIALECT);

const db = new Sequelize({
  dialect: process.env.DB_DIALECT,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  logging: false,
});

module.exports = { db };
