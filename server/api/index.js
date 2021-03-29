const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.send("mooZka API");
});

router.use("/artists", require("./routes/artistsRoutes"));
router.use("/albums", require("./routes/albumsRoutes"));
router.use("/songs", require("./routes/songsRoutes"));

module.exports = router;
