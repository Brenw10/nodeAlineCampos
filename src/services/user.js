const UserModel = require('../models/user');

function set(id, user) {
  return UserModel.updateOne({ id }, user, { upsert: true });
}

function get(id) {
  return UserModel.findOne({ id });
}

module.exports = {
  set,
  get,
};