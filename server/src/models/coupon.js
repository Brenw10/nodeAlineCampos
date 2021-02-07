const mongoose = require('../config/database');

const COLLECTION_NAME = 'coupon';

const Schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    value: { type: Number, required: true },
  },
  {
    COLLECTION_NAME
  }
);

module.exports = mongoose.model(COLLECTION_NAME, Schema, COLLECTION_NAME);