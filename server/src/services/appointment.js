const AppointmentModel = require('../models/appointment');
const user = require('../services/user');
const { STATUS } = require('../constants/appointment');
const treatment = require('../services/treatment');
const coupon = require('../services/coupon');
const worktime = require('../services/worktime');
const moment = require('moment');

async function getAll(sub) {
  const currentUser = await user.get(sub);
  const find = currentUser.admin ? {} : { client: currentUser._id };
  return AppointmentModel.find(find)
    .sort('datetime')
    .populate('treatments', '-image')
    .populate('client')
    .exec();
}

function getById(_id) {
  return AppointmentModel.findOne({ _id });
}

async function create(sub, appointment) {
  const results = await Promise.all([
    user.get(sub),
    treatment.getByIds(appointment.treatments),
    coupon.getByName(appointment.coupon),
  ]);
  const data = Object.assign(appointment,
    {
      client: results[0]._id,
      status: STATUS.CREATED,
      duration: results[1].reduce((sum, value) => sum + value.duration, 0),
      price: results[1].reduce((sum, value) => sum + value.price, 0),
      coupon: results[2],
    }
  );
  return AppointmentModel.create(data);
}

function isInvalidChangeStatus(currentUser, appointment, status) {
  const isInvalidNewStatus = status === STATUS.CREATED;
  const isInvalidAppointment = appointment.status === STATUS.REJECTED;
  const isNotAnAdmin = status === STATUS.ACCEPTED && !currentUser.admin;
  return isInvalidNewStatus || isInvalidAppointment || isNotAnAdmin;
}

async function setStatus(sub, _id, status) {
  const currentUser = await user.get(sub);
  const appointment = await getById(_id);
  const isInvalid = isInvalidChangeStatus(currentUser, appointment, status);
  if (isInvalid) return Promise.reject();
  return AppointmentModel.updateOne({ _id }, { status }, { runValidators: true });
}

async function getByDateAndStatus(date, status) {
  const startDate = moment(date).startOf('day');
  const endDate = moment(date).endOf('day');
  return AppointmentModel.find({
    datetime: {
      $gte: startDate,
      $lte: endDate,
    },
    status,
  });
}

function getStartEndDate(appointments) {
  return appointments.map(value => ({
    startDate: moment(value.datetime),
    endDate: moment(value.datetime).add(value.duration, 'minute'),
  }))
}

async function getFreeTimes(date) {
  const datetimes = await worktime.getWithDate(date);
  const dayAppointments = await getByDateAndStatus(date, [STATUS.ACCEPTED, STATUS.CREATED]);
  const appointments = getStartEndDate(dayAppointments);
  return datetimes.filter(dt =>
    !appointments.find(ap => dt.isBetween(ap.startDate, ap.endDate, null, '[]'))
  );
}

module.exports = {
  getAll,
  create,
  setStatus,
  getFreeTimes
};