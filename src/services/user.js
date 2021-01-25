const UserModel = require('../models/user');

function set(id, user) {
  return UserModel.updateOne({ id }, user, { upsert: true });
}

module.exports = {
  set,
};