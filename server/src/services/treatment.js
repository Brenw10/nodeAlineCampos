const TreatmentModel = require('../models/treatment');

function getAll() {
  return TreatmentModel
    .find()
    .sort({ isFirstType: -1 })
    .sort('name')
    .exec();
}

function getByIds(ids) {
  return TreatmentModel.find({ '_id': { $in: ids } });
}

module.exports = {
  getAll,
  getByIds,
};