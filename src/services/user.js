const UserModel = require('../models/user');

function getByCPF(cpf) {
  return UserModel.findOne({ cpf });
}

module.exports = {
  getByCPF,
};