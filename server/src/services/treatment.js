const TreatmentModel = require('../models/treatment');

function getAll() {
  return TreatmentModel.find();
}

function getByIds(ids) {
  return TreatmentModel.find({ '_id': { $in: ids } });
}

module.exports = {
  getAll,
  getByIds,
};