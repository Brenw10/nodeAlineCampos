const UserModel = require('../models/user');

function getByCPF(cpf) {
  return UserModel.findOne({ cpf });
}

function set(user) {
  return UserModel.updateOne({ cpf: user.cpf }, user, { upsert: true });
}

module.exports = {
  getByCPF,
  set,
};