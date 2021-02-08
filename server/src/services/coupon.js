const CouponModel = require('../models/coupon');
const user = require('../services/user');

async function getAll(sub) {
  const currentUser = await user.get(sub);
  if (!currentUser.admin) return Promise.reject();
  return CouponModel.find().sort({ _id: -1 });
}

async function remove(sub, _id) {
  const currentUser = await user.get(sub);
  if (!currentUser.admin) return Promise.reject();
  return CouponModel.deleteOne({ _id });
}

async function create(sub, coupon) {
  const currentUser = await user.get(sub);
  if (!currentUser.admin) return Promise.reject();
  return CouponModel.updateOne({ name: coupon.name }, coupon, { upsert: true });
}

module.exports = {
  getAll,
  remove,
  create,
};