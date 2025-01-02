// models/Item.js

const mongoose = require('mongoose');

// Define schema for "Item"
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

// Create and export the model
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
