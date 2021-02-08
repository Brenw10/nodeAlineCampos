const mongoose = require('../config/database');
const { STATUS } = require('../constants/appointment');

const COLLECTION_NAME = 'appointment';

const Schema = new mongoose.Schema(
  {
    datetime: { type: Date, required: true },
    duration: { type: Number, required: true },
    treatments: [{ type: mongoose.Types.ObjectId, required: true, ref: 'treatment' }],
    client: { type: mongoose.Types.ObjectId, required: true, ref: 'user' },
    price: { type: Number, required: true },
    status: { type: String, enum: Object.values(STATUS), default: STATUS.CREATED, required: true },
    coupon: {
      name: String,
      value: Number,
    }
  },
  {
    COLLECTION_NAME
  }
);

module.exports = mongoose.model(COLLECTION_NAME, Schema, COLLECTION_NAME);