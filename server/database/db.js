const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/mooZka", {
  logging: false,
});

module.exports = db;
