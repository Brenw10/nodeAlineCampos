const mongoose = require('../config/database');

const collection = 'user';

const UserModel = new mongoose.Schema(
  {
    cpf: String,
    name: String,
    phone: String,
  },
  {
    collection
  }
);

module.exports = mongoose.model(collection, UserModel, collection);