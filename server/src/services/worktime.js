const WorktimeModel = require('../models/worktime');

function getAll() {
  return WorktimeModel.find();
}

module.exports = {
  getAll,
};