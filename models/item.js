const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  name2: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status:{
    type:String,
    required:true
  }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
