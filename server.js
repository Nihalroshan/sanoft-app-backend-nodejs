const express = require("express");
const app = express();
const users = require("./routes/users");
const items = require("./routes/items");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost/sanoft")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());

app.use(cors());

app.use("/api/users", users);
app.use("/api/items", items);

const port = process.env.PORT || 3001;

const server = app.listen(port, () =>
  console.log(`Listening to port ${port}..`)
);

module.exports = server;
