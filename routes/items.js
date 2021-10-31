const express = require("express");
const router = express.Router();
const Item = require("../models/item");

router.get("/", async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

router.post("/", async (req, res) => {
  let item = new Item({
    orderNumber: req.body.orderNo,
    name: req.body.name,
    name2: req.body.name2,
    address: req.body.address,
    status: "pending",
  });

  item = await item.save();
  res.send(item);
});

router.patch("/:id", async (req, res) => {
  let item = await Item.updateOne(
    { _id: req.params.id },
    { $set: { status: req.body.status } }
  );
  res.send(item);
});

module.exports = router;
