const router = require("express").Router();
const { Album, Song, Artist } = require("../../database/models/index");

// GET /api/albums - Returns all albums
router.get("/", async (req, res, next) => {
  try {
    const albums = await Album.findAll({
      include: [{ model: Artist }],
    });
    res.send(albums);
  } catch (error) {
    next(error);
  }
});

// GET /api/albums/:albumId - Returns album and its songs
router.get("/:albumId", async (req, res, next) => {
  try {
    const albums = await Album.findOne({
      where: {
        id: req.params.albumId,
      },
      include: [{ model: Artist }, { model: Song }],
    });
    res.send(albums);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
