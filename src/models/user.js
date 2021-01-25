const mongoose = require('../config/database');

const COLLECTION_NAME = 'user';

const UserModel = new mongoose.Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    photo: { type: String, required: true },
    admin: { type: Boolean, default: false, required: true },
  },
  {
    COLLECTION_NAME
  }
);

module.exports = mongoose.model(COLLECTION_NAME, UserModel, COLLECTION_NAME);