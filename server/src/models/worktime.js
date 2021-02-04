const mongoose = require('../config/database');

const COLLECTION_NAME = 'worktime';

const Schema = new mongoose.Schema(
  {
    time: { type: String, required: true },
  },
  {
    COLLECTION_NAME
  }
);

module.exports = mongoose.model(COLLECTION_NAME, Schema, COLLECTION_NAME);