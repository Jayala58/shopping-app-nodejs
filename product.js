const mongoose = require('mongoose');
const prodSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  stock: Number
});
module.exports = mongoose.model('Product', prodSchema);
