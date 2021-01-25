const express = require('express');
const auth = require('../services/auth')

const router = express.Router();

router.use(async function (req, res, next) {
  const user = await auth.getUser(req.body.idToken);
  if (user.sub) {
    res.locals.user = user;
    next();
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;