const mongoose = require('../config/database');
const { STATUS } = require('../constants/appointment');

const COLLECTION_NAME = 'appointment';

const AppointmentModel = new mongoose.Schema(
  {
    datetime: { type: Date, required: true },
    duration: { type: Number, required: true },
    treatments: { type: [mongoose.Types.ObjectId], required: true },
    client: { type: mongoose.Types.ObjectId, required: true },
    price: { type: Number, required: true },
    status: { type: String, enum: Object.values(STATUS), default: STATUS.CREATED, required: true },
  },
  {
    COLLECTION_NAME
  }
);

module.exports = mongoose.model(COLLECTION_NAME, AppointmentModel, COLLECTION_NAME);