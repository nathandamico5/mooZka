const Sequelize = require("sequelize");
const db = require("../db");

const Song = db.define("song", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  audioUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Song;
