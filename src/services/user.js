const UserModel = require('../models/user');

function set(user) {
  return UserModel.updateOne({ cpf: user.cpf }, user, { upsert: true });
}

module.exports = {
  set,
};