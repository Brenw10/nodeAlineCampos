const express = require('express');
const auth = require('../services/auth')

const router = express.Router();

router.use(async function ({ body }, _, next) {
  const user = await auth.getUser(body.idToken);
  if (body.user.id === user.sub) {
    next();
  } else {
    res.send(401);
  }
});

module.exports = router;