const Sequelize = require("sequelize");
const db = require("../db");

const Album = db.define("album", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  artworkUrl: {
    type: Sequelize.STRING,
    defaultValue: "default-album.jpg",
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

Album.beforeValidate((album) => {
  album.slug = album.name.replace(/\s/g, "-").toLowerCase();
});

module.exports = Album;
