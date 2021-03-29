const Sequelize = require("sequelize");
const db = require("../db");

const Artist = db.define("artist", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  artistImage: {
    type: Sequelize.TEXT,
    defaultValue: "default-album.jpg",
  },
});

module.exports = Artist;
