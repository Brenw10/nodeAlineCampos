const CouponModel = require('../models/coupon');
const user = require('../services/user');

async function getAll(sub) {
  const currentUser = await user.get(sub);
  if (!currentUser.admin) return Promise.reject();
  return CouponModel.find();
}

async function remove(sub, _id) {
  const currentUser = await user.get(sub);
  if (!currentUser.admin) return Promise.reject();
  return CouponModel.deleteOne({ _id });
}

module.exports = {
  getAll,
  remove,
};