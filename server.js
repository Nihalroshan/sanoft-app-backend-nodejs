const express = require("express");
const app = express();
const users = require("./routes/users");
const items = require("./routes/items");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

mongoose
  .connect(process.env.DATABASE_URL || "mongodb://localhost/sanoft")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use("/api/users", users);
app.use("/api/items", items);

const port = process.env.PORT || 3001;

const server = app.listen(port, () =>
  console.log(`Listening to port ${port}..`)
);

module.exports = server;


