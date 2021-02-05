const WorktimeModel = require('../models/worktime');
const moment = require('moment');

function getAll() {
  return WorktimeModel.find().sort('time');
}

async function getWithDate(date) {
  const times = await getAll();
  return times.map(value => moment(moment(date).format('YYYY-MM-DD') + ' ' + value.time));
}

module.exports = {
  getWithDate,
};