const express = require('express');

const router = express.Router();

router.get('/', (_, res) =>
  res.send({ name: 'schedule' })
);

module.exports = router;