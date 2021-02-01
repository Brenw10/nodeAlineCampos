const express = require('express');
const user = require('../services/user');
const { celebrate, Joi, errors, Segments } = require('celebrate');

const router = express.Router();

router.post('/', celebrate({
  [Segments.BODY]: Joi.object({
    user: Joi.object({
      name: Joi.string(),
      photo: Joi.string(),
      email: Joi.string(),
    }),
  }),
}, {
  allowUnknown: true,
}),
  (req, res) => user
    .set(res.locals.user.sub, req.body.user)
    .then(result => res.send(result))
    .catch(err => res.status(400).send(err))
);

router.get('/', (_, res) =>
  user
    .get(res.locals.user.sub)
    .then(result => res.send(result))
    .catch(err => res.status(400).send(err))
);

router.use(errors());

module.exports = router;