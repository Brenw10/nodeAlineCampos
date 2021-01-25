const mongoose = require('../config/database');

const COLLECTION_NAME = 'treatment';

const TreatmentModel = new mongoose.Schema(
  {
    name: String,
    duration: Number,
    price: Number,
    description: String,
  },
  {
    COLLECTION_NAME
  }
);

module.exports = mongoose.model(COLLECTION_NAME, TreatmentModel, COLLECTION_NAME);