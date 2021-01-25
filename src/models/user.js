const mongoose = require('../config/database');

const COLLECTION_NAME = 'user';

const UserModel = new mongoose.Schema(
  {
    id: String,
    name: String,
    email: String,
    photo: String,
    admin: { type: Boolean, default: false },
  },
  {
    COLLECTION_NAME
  }
);

module.exports = mongoose.model(COLLECTION_NAME, UserModel, COLLECTION_NAME);