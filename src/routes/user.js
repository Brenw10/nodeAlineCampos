const express = require('express');
const user = require('../services/user');
const { celebrate, Joi, errors, Segments } = require('celebrate');

const router = express.Router();

router.post('/', celebrate({
  [Segments.BODY]: Joi.object({
    user: Joi.object({
      name: Joi.string().optional(),
      phone: Joi.string().optional(),
      email: Joi.string().optional(),
    }),
  }),
}, {
  allowUnknown: true,
}),
  (req, res) => user
    .set(res.locals.user.sub, req.body.user)
    .then(result => res.send(result))
);

router.use(errors());

module.exports = router;