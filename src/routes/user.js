const express = require('express');
const user = require('../services/user');
const { celebrate, Joi, errors, Segments } = require('celebrate');

const router = express.Router();

router.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    user: Joi.object().required().keys({
      name: Joi.string().optional(),
      email: Joi.string().optional(),
      photo: Joi.string().optional(),
    }),
  }),
}), (req, res) =>
  user
    .set(res.locals.user.sub, req.body.user)
    .then(result => res.send(result))
);

router.use(errors());

module.exports = router;