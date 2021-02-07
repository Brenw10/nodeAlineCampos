const express = require('express');
const coupon = require('../services/coupon');

const router = express.Router();

router.get('/', (_, res) =>
  coupon
    .getAll(res.locals.user.sub)
    .then(result => res.send(result))
    .catch(err => res.status(400).send(err))
);

module.exports = router;