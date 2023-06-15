const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    source: String,
    image: String,
    description: String,
    rating: String,
    price: String,
    finalPrice: String
  });
  const Product = mongoose.model('Product', productSchema);
  module.exports = Product;