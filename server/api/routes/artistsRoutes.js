const router = require("express").Router();
const { Album, Artist, Song } = require("../../database/models");

// GET /api/artists - Returns all artists
router.get("/", async (req, res, next) => {
  try {
    const artists = await Artist.findAll();
    res.send(artists);
  } catch (error) {
    next(error);
  }
});

// GET /api/artists/:artistId - Returns artist info including albums
router.get("/:artistId", async (req, res, next) => {
  try {
    const artists = await Artist.findOne({
      where: {
        id: req.params.artistId,
      },
      include: [{ model: Album }, { model: Song }],
    });
    res.send(artists);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
