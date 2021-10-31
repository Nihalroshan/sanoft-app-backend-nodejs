const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/", async (req, res) => {
  let user = await User.findOne({
    userName: req.body.userName,
    password: req.body.password,
  });
  if (!user) return res.status(400).send('Invalid email or password.');
  res.send(user);
});

module.exports = router;
