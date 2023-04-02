const mongoose = require("mongoose");
const cartSchema = mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String },
  image1: { type: String, required: true },
  discount: { type: String },
  quantity: { type: Number, default: 1 },
  userID: { type: String, required: true },
  size: String,
  description: String,
  price: Number,
});

const cartModel = mongoose.model("cart", cartSchema);

module.exports = { cartModel };
