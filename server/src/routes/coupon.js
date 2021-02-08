const express = require('express');
const coupon = require('../services/coupon');
const { celebrate, Joi, errors, Segments } = require('celebrate');

const router = express.Router();

router.get('/', (_, res) =>
  coupon
    .getAll(res.locals.user.sub)
    .then(result => res.send(result))
    .catch(err => res.status(400).send(err))
);


router.get('/:name', celebrate({
  [Segments.PARAMS]: Joi.object({
    name: Joi.string(),
  }),
}, {
  allowUnknown: true,
}),
  (_, res) =>
    coupon
      .getByName(req.params.name)
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
);

router.delete('/:_id', celebrate({
  [Segments.PARAMS]: Joi.object({
    _id: Joi.string(),
  }),
}, {
  allowUnknown: true,
}),
  (req, res) =>
    coupon
      .remove(res.locals.user.sub, req.params._id)
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
);

router.post('/', celebrate({
  [Segments.BODY]: Joi.object({
    coupon: Joi.object({
      name: Joi.string(),
      value: Joi.number(),
    }),
  }),
}, {
  allowUnknown: true,
}),
  (req, res) =>
    coupon
      .create(res.locals.user.sub, req.body.coupon)
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
);

router.use(errors());

module.exports = router;