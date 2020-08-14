const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BigDataSchema = new Schema({
  index: {
    type: Number,
    required: true
  },
  balance: {
    type: String,
    required: true
  },
  sales: {
    type: Number,
    required: true
  },
});

module.exports = BigData = mongoose.model('bigdata', BigDataSchema);