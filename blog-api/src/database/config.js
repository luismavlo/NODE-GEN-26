const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  database: "blogdbgen26",
  username: "postgres",
  password: "root",
  host: "localhost",
  port: 5432,
  logging: false,
});

module.exports = { db };
