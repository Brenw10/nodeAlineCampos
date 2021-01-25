const TreatmentModel = require('../models/treatment');

function getAll() {
  return TreatmentModel.find();
}

module.exports = {
  getAll,
};