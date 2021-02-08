const express = require('express');
const appointment = require('../services/appointment');
const { celebrate, Joi, errors, Segments } = require('celebrate');

const router = express.Router();

router.get('/', (_, res) =>
  appointment
    .getAll(res.locals.user.sub)
    .then(result => res.send(result))
    .catch(err => res.status(400).send(err))
);

router.post('/', celebrate({
  [Segments.BODY]: Joi.object({
    appointment: Joi.object({
      datetime: Joi.string().required(),
      treatments: Joi.array().required(),
      coupon: Joi.string(),
    }),
  }),
}, {
  allowUnknown: true,
}),
  (req, res) => appointment
    .create(res.locals.user.sub, req.body.appointment)
    .then(result => res.send(result))
    .catch(err => res.status(400).send(err))
);

router.put('/:_id/status', celebrate({
  [Segments.BODY]: Joi.object({
    status: Joi.string().required(),
  }),
  [Segments.PARAMS]: Joi.object({
    _id: Joi.string().required(),
  }),
}, {
  allowUnknown: true,
}),
  (req, res) => appointment
    .setStatus(res.locals.user.sub, req.params._id, req.body.status)
    .then(result => res.send(result))
    .catch(err => res.status(400).send(err))
);

router.get('/freetime', celebrate({
  [Segments.BODY]: Joi.object({
    date: Joi.date(),
  }),
}, {
  allowUnknown: true,
}),
  (req, res) =>
    appointment
      .getFreeTimes(req.query.date)
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err))
)

router.use(errors());

module.exports = router;