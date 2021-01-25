const express = require('express');
const user = require('../services/user');

const router = express.Router();

router.post('/', async ({ body }, res) =>
  res.send(await user.set(res.locals.user.sub, body.user))
);

module.exports = router;