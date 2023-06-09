const mongoose = require("mongoose");
const cartSchema = mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: Number, default: 5 },
  images: { type: String },
  image1: { type: String },
  description: String,
  price: Number,
  discount: { type: String, default: "2" },
  userID: { type: String, required: true },
});

const cartModel = mongoose.model("cart", cartSchema);

let a = "harry";
let b = "harry";
module.exports = { cartModel };

// image1: { type: String, required: true },
// discount: { type: String },
// quantity: { type: Number, default: 1 },
// userID: { type: String, required: true },
// size: String,
// description: String,
