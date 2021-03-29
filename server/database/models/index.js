const db = require("../db");
const Artist = require("./Artist");
const Album = require("./Album");
const Song = require("./Song");

Artist.hasMany(Album);
Artist.hasMany(Song);
Album.hasMany(Song);

Album.belongsTo(Artist);
Song.belongsTo(Album);
Song.belongsTo(Artist);

module.exports = {
  db,
  Artist,
  Album,
  Song,
};
