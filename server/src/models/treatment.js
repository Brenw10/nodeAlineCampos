const mongoose = require('../config/database');

const COLLECTION_NAME = 'treatment';

const Schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    isFirstType: { type: Boolean, default: false, required: true },
    image: String,
  },
  {
    COLLECTION_NAME
  }
);

module.exports = mongoose.model(COLLECTION_NAME, Schema, COLLECTION_NAME);