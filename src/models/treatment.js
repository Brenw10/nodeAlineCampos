const mongoose = require('../config/database');

const COLLECTION_NAME = 'treatment';

const TreatmentModel = new mongoose.Schema(
  {
    name: { type: String, required: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
  },
  {
    COLLECTION_NAME
  }
);

module.exports = mongoose.model(COLLECTION_NAME, TreatmentModel, COLLECTION_NAME);