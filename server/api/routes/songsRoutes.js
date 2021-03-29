const router = require("express").Router();
const Song = require("../../database/models/Song");
const Album = require("../../database/models/Album");
const Artist = require("../../database/models/Artist");

router.get("/", async (req, res, next) => {
  try {
    const songs = await Song.findAll({
      include: [{ model: Album }, { model: Artist }],
    });
    res.send(songs);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
