const AppointmentModel = require('../models/appointment');
const user = require('../services/user');
const { STATUS } = require('../constants/appointment');
const treatment = require('../services/treatment');

async function getAll(sub) {
  const currentUser = await user.get(sub);
  const find = currentUser.admin ? {} : { client: currentUser._id };
  return AppointmentModel.find(find)
    .sort('datetime')
    .populate('treatments')
    .populate('client')
    .exec();
}

async function create(sub, appointment) {
  const currentUser = await user.get(sub);
  const treatments = await treatment.getByIds(appointment.treatments);
  const data = Object.assign(appointment,
    {
      client: currentUser._id,
      status: STATUS.CREATED,
      duration: treatments.reduce((sum, value) => sum + value.duration, 0),
      price: treatments.reduce((sum, value) => sum + value.price, 0),
    }
  );
  return AppointmentModel.create(data);
}

async function setStatus(sub, _id, status) {
  const currentUser = await user.get(sub);
  if (!currentUser.admin) return Promise.reject("You are not an admin");
  return AppointmentModel.updateOne({ _id }, { status }, { runValidators: true });
}

module.exports = {
  getAll,
  create,
  setStatus,
};