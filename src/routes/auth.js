const express = require('express');

const router = express.Router();

router.use(function ({ body }, _, next) {
  console.log(body);
  next();
});

module.exports = router;