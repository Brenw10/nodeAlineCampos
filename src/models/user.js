const mongoose = require('../config/database');

const collection = 'user';

const UserModel = new mongoose.Schema(
  {
    id: String,
    name: String,
    email: String,
    photo: String,
  },
  {
    collection
  }
);

module.exports = mongoose.model(collection, UserModel, collection);