const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./database/db");

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(morgan("dev"));
app.use(express.urlencoded());
app.use(express.json());

app.use("/api", require("./api"));

// Redirect to react-router for unrecognized routes
app.get("/*", (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, "..", "public/index.html"));
  } catch (error) {
    next(error);
  }
});

// 500 Error Handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({ message: err.message });
});

// Initialize Server
const PORT = 3000;
const init = async () => {
  try {
    await db.sync();
    app.listen(PORT, () =>
      console.log(`

          Listening on port ${PORT}

          http://localhost:${PORT}/

      `)
    );
  } catch (err) {
    console.log(`There was an error starting up!`, err);
  }
};

init();
