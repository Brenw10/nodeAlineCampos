const UserModel = require('../models/user');

function getByCPF(cpf) {
  return UserModel.find({});
}

module.exports = {
  getByCPF,
};