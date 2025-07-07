const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  items: [{ productId: mongoose.Types.ObjectId, quantity: Number }]
});
module.exports = mongoose.model('Cart', cartSchema);
